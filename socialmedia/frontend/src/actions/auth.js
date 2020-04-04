import axios from "axios";
import { returnErrors } from "../actions/messages";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

// Check for Token And Get the User
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//  Register the User
export const register = ({ username, password, email }) => (dispatch) => {
  // Setting the Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // ADD Body
  const body = JSON.stringify({
    username: username,
    password: password,
    email: email,
  });

  axios
    .post("api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//  Login the User
export const login = (username, password) => (dispatch) => {
  // Setting the Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // ADD Body
  const body = JSON.stringify({ username: username, password: password });

  axios
    .post("api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// Logout the User
export const logout = () => (dispatch, getState) => {
  axios
    .post("api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//  Setup Config With Token -Helper Function
export const tokenConfig = (getState) => {
  // Get Token From State
  const token = getState().auth.token;

  // Setting the Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If Token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
