import axios from "axios";
import { returnErrors } from "../actions/messages";
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../actions/types";

// Check for Token And Get the User
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  //  Get Token Form The State
  const token = getState().auth.token;

  // ADD Headers
  const config = {
    headers: {
      "content-type": "application/json"
    }
  };

  // If Token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
