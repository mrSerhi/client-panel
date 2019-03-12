import React from "react";

const DetailsBody = ({ client }) => {
  const { firstName, lastName, id, balance, phone, email } = client;
  const balanceStyle =
    balance > 0 ? "balance balance-danger" : "balance balance-good";

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <h3 className="card-header client-color">
            {firstName} {lastName}
          </h3>

          <div className="card-body">
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <h5>
                  Client ID: <span className="text-secondary">{id}</span>
                </h5>
              </div>

              <div className="col-md-4 col-sm-6">
                <h3>
                  <span className="font-weight-bold">Balance:</span>{" "}
                  <span className={balanceStyle}>&#36;{balance}</span>
                </h3>
              </div>
            </div>

            <hr />

            <ul className="list-group">
              <li className="list-group-item">
                <span className="text-info font-weight-bold">
                  Client Email:
                </span>{" "}
                {email}
              </li>
              <li className="list-group-item">
                <span className="text-info font-weight-bold">
                  Client Phone:
                </span>{" "}
                {phone}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBody;
