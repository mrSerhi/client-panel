import React from "react";

const FormCheckInput = ({
  type = "checkbox",
  name,
  checked,
  onChangeCheckbox,
  label = ""
}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type={type}
        name={name}
        checked={!!checked}
        onChange={onChangeCheckbox}
      />
      <label className="form-check-label text-capitalize">{label}</label>
    </div>
  );
};

export default FormCheckInput;
