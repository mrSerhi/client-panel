import React from "react";
import PropTypes from "prop-types";
import formatNumber from "../../utils/formatNumber";

// child
import FormUpdateBalance from "./FormUpdateBalance";

const DetailsBody = ({
  client,
  state,
  onToggle,
  onChangeValue,
  onSubmitBalance
}) => {
  const { firstName, lastName, id, balance, phone, email } = client;
  const { toggleUpdate, updateValue } = state;
  const balanceStyle =
    balance > 0 ? "balance balance-danger" : "balance balance-good";
  const togglingForm = toggleUpdate ? (
    <FormUpdateBalance
      value={updateValue}
      onChange={onChangeValue}
      onSubmit={onSubmitBalance}
    />
  ) : null;

  return (
    <div className="row">
      <div className="col-md-10">
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
                  <span className={balanceStyle}>
                    &#36;{formatNumber(balance)}
                  </span>
                  <button onClick={onToggle} className="btn btn-link p-0 ml-1">
                    <i className="fas fa-pencil-alt" />
                  </button>
                </h3>
                {togglingForm}
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

DetailsBody.propTypes = {
  client: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onSubmitBalance: PropTypes.func.isRequired
};

export default DetailsBody;
