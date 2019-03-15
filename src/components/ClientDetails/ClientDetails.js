import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import "./styles.css";
// Components
import Spinner from "../layout/SpinnerLoader/Spinner";
import LinkBackToDashboard from "../layout/BackToDashboard";
import BtnControls from "./BtnControls";
import DetailsBody from "./DetailsBody";

class ClientDetails extends Component {
  state = {
    toggleUpdate: false,
    updateValue: ""
  };

  onToggleUpdate = () => {
    this.setState({ toggleUpdate: !this.state.toggleUpdate });
  };

  onChangeValue = e => this.setState({ updateValue: e.target.value });

  // submiting update balances
  onSubmitBalance = e => {
    e.preventDefault();

    const { client, firestore } = this.props;
    const { updateValue } = this.state;
    // update one value of each client
    const clientUpdate = {
      balance: parseFloat(updateValue)
    };
    firestore.update({ collection: "clients", doc: client.id }, clientUpdate);
    this.setState({ updateValue: "" }); // clear input field
  };

  onDeleteClient = async () => {
    const { client, firestore, history } = this.props;
    await firestore.delete({ collection: "clients", doc: client.id }, client);
    history.push("/");
  };

  render() {
    const { client } = this.props;
    if (client) {
      return (
        <React.Fragment>
          <div className="row">
            <LinkBackToDashboard />
            <BtnControls id={client.id} onDeleteClient={this.onDeleteClient} />
          </div>
          <hr />
          <DetailsBody
            client={client}
            state={this.state}
            onToggle={this.onToggleUpdate}
            onChangeValue={this.onChangeValue}
            onSubmitBalance={this.onSubmitBalance}
          />
        </React.Fragment>
      );
    }

    return <Spinner />;
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
