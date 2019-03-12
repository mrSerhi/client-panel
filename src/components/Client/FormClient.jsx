import React from "react";
import InputGroup from "./InputGroup";

const FormClient = ({ state, onInputChange, formSubmit }) => {
  const { firstName, lastName, email, phone, balance, error } = state;
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 my-5">
        <div className="card m-auto">
          <div className="card-header bg-info text-white">Add New Client</div>
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
              />

              <InputGroup
                settings={{
                  label: "Phone:",
                  name: "phone",
                  value: phone,
                  placeholder: "Enter your Phone"
                }}
                onChange={onInputChange}
              />

              <InputGroup
                settings={{
                  label: "Balance:",
                  name: "balance",
                  value: balance,
                  placeholder: "Enter Balance"
                }}
                onChange={onInputChange}
              />

              <input
                type="submit"
                value="Add Client"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormClient;