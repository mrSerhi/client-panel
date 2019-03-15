import React, { Component } from "react";
import PropTypes from "prop-types";
import InputGroup from "./InputGroup";

class FormClient extends Component {
  render() {
    const {
      data,
      refs,
      title,
      disabling,
      onInputChange = null,
      formSubmit
    } = this.props;
    const { firstName, lastName, email, phone, balance, error = "" } = data;
    const { header, submit } = title;

    return (
      <div className="row">
        <div className="col-md-8 offset-md-2 my-5">
          <div className="card m-auto">
            <div className="card-header bg-info text-white">{header}</div>
            <div className="card-body">
              <form id="form-client-add" onSubmit={formSubmit}>
                <InputGroup
                  settings={{
                    label: "First-Name:",
                    name: "firstName",
                    value: firstName,
                    placeholder: "Enter your First-Name",
                    requared: true
                  }}
                  onChange={onInputChange}
                  error={error.firstName}
                  refs={refs[0]}
                />

                <InputGroup
                  settings={{
                    label: "Last-Name:",
                    name: "lastName",
                    value: lastName,
                    placeholder: "Enter your Last-Name",
                    requared: true
                  }}
                  onChange={onInputChange}
                  error={error.lastName}
                  refs={refs[1]}
                />

                <InputGroup
                  settings={{
                    label: "Email:",
                    name: "email",
                    value: email,
                    placeholder: "Enter your Email",
                    type: "email"
                  }}
                  onChange={onInputChange}
                  refs={refs[2]}
                />

                <InputGroup
                  settings={{
                    label: "Phone:",
                    name: "phone",
                    value: phone,
                    placeholder: "Enter your Phone"
                  }}
                  onChange={onInputChange}
                  refs={refs[3]}
                />

                <InputGroup
                  settings={{
                    label: "Balance:",
                    name: "balance",
                    value: balance,
                    placeholder: "Enter Balance"
                  }}
                  onChange={onInputChange}
                  refs={refs[4]}
                  disabling={disabling}
                />

                <input
                  type="submit"
                  value={submit}
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormClient.propTypes = {
  data: PropTypes.object.isRequired,
  refs: PropTypes.array.isRequired,
  title: PropTypes.object,
  disabling: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func,
  formSubmit: PropTypes.func.isRequired
};

export default FormClient;
