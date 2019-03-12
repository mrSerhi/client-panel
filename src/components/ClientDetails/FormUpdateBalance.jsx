import React from "react";

const FormUpdateBalance = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={value}
        />

        <div className="input-group-append">
          <input
            type="submit"
            value="Update"
            className="btn btn-outline-info"
          />
        </div>
      </div>
    </form>
  );
};

export default FormUpdateBalance;
