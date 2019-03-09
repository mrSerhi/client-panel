import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

// Components
import Spinner from "../layout/SpinnerLoader/Spinner";

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

  render() {
    const { clients } = this.props;
    const { totalBalance } = this.state;

    if (clients) {
      return (
        <div className="row">
          <div className="col-sm-6">
            <h3>
              <i className="fas fa-users" /> Clients
            </h3>
          </div>
          <div className="col-sm-6">
            <h4 className="text-right">
              <span className="text-muted">All Balance:</span>{" "}
              <span className="text-primary font-weight-bold">
                <i className="fas fa-dollar-sign" />
                {parseFloat(totalBalance).toFixed(2)}
              </span>
            </h4>
          </div>
          <table className="table table-striped mt-2">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => {
                const { id, firstName, lastName, email, balance } = client;
                return (
                  <tr key={id}>
                    <td>
                      {firstName} {lastName}
                    </td>
                    <td>{email}</td>
                    <td>${parseFloat(balance).toFixed(2)}</td>
                    <td>
                      <Link
                        to={`/client/${id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="fas fa-arrow-right" /> Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
