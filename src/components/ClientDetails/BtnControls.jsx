import React from "react";
import { Link } from "react-router-dom";

const BtnControls = ({ id }) => {
  return (
    <div className="col-md-6">
      <div className="btn-group float-right">
        <Link to={`/contact/edit/${id}`} className="btn btn-dark">
          Edit
        </Link>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default BtnControls;
