import React from "react";
import PropTypes from "prop-types";
import formatNumber from "../../utils/formatNumber";

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
            &#36;{formatNumber(balance)}
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
