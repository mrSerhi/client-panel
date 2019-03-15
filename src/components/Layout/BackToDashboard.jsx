import React from "react";
import { Link } from "react-router-dom";

const LinkBackToDashboard = () => {
  return (
    <div className="col-sm-6">
      <Link to="/" className="btn btn-link text-info">
        <i className="fas fa-chevron-circle-left" /> back to the Dashbord
      </Link>
    </div>
  );
};

export default LinkBackToDashboard;
