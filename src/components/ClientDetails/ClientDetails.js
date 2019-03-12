import React, { Component } from "react";
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
  render() {
    const { client } = this.props;
    if (client) {
      return (
        <React.Fragment>
          <div className="row">
            <LinkBackToDashboard />
            <BtnControls id={client.id} />
          </div>
          <hr />
          <DetailsBody client={client} />
        </React.Fragment>
      );
    }

    return <Spinner />;
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
