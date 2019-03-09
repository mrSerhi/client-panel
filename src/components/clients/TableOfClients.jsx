import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableOfClients = ({ clients }) => {
  return (
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
  );
};

TableOfClients.propTypes = {
  clients: PropTypes.array.isRequired
};

export default TableOfClients;
