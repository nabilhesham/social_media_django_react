import axios from "axios";

//  actions types import
import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  GET_ERRORS,
  CREATE_MESSAGE,
} from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// GET POSTS
export const getPosts = () => (dispatch, getState) => {
  axios
    .get("/api/posts/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE POSTS
export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
      dispatch(createMessage({ deletePost: "Post Deleted" }));
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

// ADD Post
export const addPost = (post) => (dispatch, getState) => {
  axios
    .post("/api/posts/", post, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addPost: "Post Added" }));
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) =>
      //   {
      //   const errors = {
      //     msg: err.response.data,
      //     status: err.response.status
      //   };
      //   dispatch({
      //     type: GET_ERRORS,
      //     payload: errors
      //   });
      // }
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
