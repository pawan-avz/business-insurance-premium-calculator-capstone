import { SET_LOGGEDIN, RESET_LOGGEDIN } from "./AuthTyeps";
import { resetUserRequest } from "..";
export const setLoggedIn = () => {
  return {
    type: SET_LOGGEDIN,
  };
};

export const resetLoggedIn = () => {
  return {
    type: RESET_LOGGEDIN,
  };
};

export const logout = () => {
  return function (dispatch) {
    dispatch(resetLoggedIn());
    // dispatch(resetUserRequest());
  };
};
