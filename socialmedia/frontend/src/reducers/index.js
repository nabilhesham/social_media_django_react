import { combineReducers } from "redux";
import posts from "./posts";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  posts: posts,
  errors: errors,
  messages: messages,
  auth: auth
});
