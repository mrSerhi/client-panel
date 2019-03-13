import React from "react";
import { Link } from "react-router-dom";

const BtnControls = ({ id, onDeleteClient }) => {
  return (
    <div className="col-md-6">
      <div className="btn-group float-right">
        <Link to={`/client/edit/${id}`} className="btn btn-dark">
          Edit
        </Link>
        <button onClick={onDeleteClient} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BtnControls;
