import React, { Component } from "react";

class InputGroup extends Component {
  render() {
    const { settings, error = "", refs, onChange = null } = this.props;
    const {
      label = "",
      name,
      value,
      placeholder,
      requared = false,
      type = "text"
    } = settings;
    const requred = requared ? <span className="text-danger">*</span> : null;
    const errorInfo = <div className="invalid-feedback">{error}</div>;

    return (
      <div className="form-group">
        <label htmlFor={name}>
          {label} {requred}
        </label>
        <input
          className={error ? "form-control is-invalid" : "form-control"}
          type={type}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          // required={requared}
          onChange={onChange}
          ref={refs}
        />
        {error && errorInfo}
      </div>
    );
  }
}

export default InputGroup;
