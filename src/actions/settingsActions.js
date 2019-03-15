import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

export const setDisableBalanceOnAdd = () => {
  // get setting from localStorage
  const settings = JSON.parse(localStorage.getItem("settings"));
  // mutation state with toggling
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  // save back to the localStorage
  localStorage.setItem("settings", JSON.stringify(settings));
  // return action obj with changed value
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};
export const setDisableBalanceOnEdit = () => {
  const settings = JSON.parse(localStorage.getItem("settings"));
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};
export const setAllowRegistration = () => {
  const settings = JSON.parse(localStorage.getItem("settings"));
  settings.allowRegistration = !settings.allowRegistration;
  localStorage.setItem("settings", JSON.stringify(settings));

  return { type: ALLOW_REGISTRATION, payload: settings.allowRegistration };
};
