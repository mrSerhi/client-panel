import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// actions
import {
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit,
  setAllowRegistration
} from "../../actions/settingsActions";

// components
import LinkBackToDashboard from "../layout/BackToDashboard";
import FormCheckInput from "./FormCheck";

class Settings extends Component {
  handleChangeAllowRegistration = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration(); // call the action
  };
  handleChangeDisableBalanceOnEdit = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  };
  handleChangeDisableBalanceOnAdd = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  };

  render() {
    const {
      allowRegistration,
      disableBalanceOnEdit,
      disableBalanceOnAdd
    } = this.props.settings;

    return (
      <div className="row">
        <LinkBackToDashboard />

        <div className="col-sm-6 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-light">
              Control Settings
            </div>
            <div className="card-body">
              <form>
                <FormCheckInput
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChangeCheckbox={this.handleChangeAllowRegistration}
                  label="Allow Registration"
                />

                <FormCheckInput
                  name="disableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChangeCheckbox={this.handleChangeDisableBalanceOnEdit}
                  label="disable balance on edit"
                />

                <FormCheckInput
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChangeCheckbox={this.handleChangeDisableBalanceOnAdd}
                  label="disable balance on add"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setDisableBalanceOnAdd, setDisableBalanceOnEdit, setAllowRegistration }
)(Settings);
