import { combineReducers } from "redux";
import authReducer from "./auth/AuthReducer";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  auth: authReducer,

  user: userReducer,
});

export default rootReducer;
