import axios from "axios";

//  actions types import
import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  GET_ERRORS,
  CREATE_MESSAGE
} from "./types";
import { createMessage } from "./messages";

// GET POSTS
export const getPosts = () => dispatch => {
  axios
    .get("/api/posts/")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE POSTS
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
      dispatch(createMessage({ deletePost: "Post Deleted" }));
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// ADD POST
export const addPost = post => dispatch => {
  axios
    .post("/api/posts/", post)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
      dispatch(createMessage({ addPost: "Post Added" }));
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
