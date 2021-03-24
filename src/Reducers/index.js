import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import message from "./message";

export default combineReducers({
  AuthReducer,
  message,
});