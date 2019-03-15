import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

// Components
import Spinner from "../layout/SpinnerLoader/Spinner";
import TableOfClients from "./TableOfClients";
import HeaderOfClients from "./HeaderOfClients";

class Clients extends Component {
  state = {
    totalBalance: null
  };

  static getDerivedStateFromProps(prevProps, nextState) {
    const { clients } = prevProps;
    if (clients) {
      const totalBalance = clients.reduce((acc, curr) => {
        return (acc += parseFloat(curr.balance));
      }, 0);
      return { totalBalance };
    }

    return null;
  }

  TransformBalance = balance => parseFloat(balance).toFixed(2);

  render() {
    const { clients } = this.props;
    const { totalBalance } = this.state;

    if (clients) {
      return (
        <div className="row">
          <HeaderOfClients balance={this.TransformBalance(totalBalance)} />
          <TableOfClients clients={clients} />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);
