import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import message from "./message";
import posts from './posts'

export default combineReducers({
  AuthReducer,
  posts,
  message,
});