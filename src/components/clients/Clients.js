import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  state = {
    clients: [
      {
        id: 232323,
        firstName: "Denni",
        lastName: "Bibilon",
        email: "bibi@gmail.com",
        phone: "333-444-1",
        balance: 40
      },
      {
        id: 5555555,
        firstName: "Djeki",
        lastName: "Koko",
        email: "koko@gmail.com",
        phone: "696969-6969",
        balance: 1000
      },
      {
        id: 121231131,
        firstName: "bill",
        lastName: "bobolinski",
        email: "billy@gmail.com",
        phone: "123456789-444-1",
        balance: 550
      }
    ]
  };
  render() {
    const { clients } = this.state;
    if (clients) {
      return (
        <div className="row">
          <div className="col-sm-6">
            <h3>
              <i className="fas fa-users" /> Clients
            </h3>
          </div>
          <div className="col-sm-6">
            <h3>Sum: 40</h3>
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
                    <td>{parseFloat(balance).toFixed(2)}</td>
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
      return <p className="lead">Loading...</p>;
    }
  }
}

export default Clients;
