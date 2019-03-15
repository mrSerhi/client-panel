import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

// empty object because we're start using localStorage for save our init state
// With action.payload we're will be change state
export default (state = {}, action) => {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
      };
    default:
      return state;
  }
};
