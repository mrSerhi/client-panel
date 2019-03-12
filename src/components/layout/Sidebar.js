import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link to="/client/add" className="btn btn-info btn-block">
      <i className="fas fa fa-plus" /> New
    </Link>
  );
};

export default Sidebar;
