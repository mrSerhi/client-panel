import React from "react";
import PropTypes from "prop-types";

const HeaderOfClients = ({ balance }) => {
  return (
    <React.Fragment>
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
            {balance}
          </span>
        </h4>
      </div>
    </React.Fragment>
  );
};

HeaderOfClients.propTypes = {
  balance: PropTypes.string
};

export default HeaderOfClients;
