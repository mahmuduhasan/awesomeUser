import * as actionTypes from "./ActionTypes";
import User from "../Data/User";

export const addPost = (userId, title, post) => {
  return {
    type: actionTypes.ADD_POST,
    payload: {
      userId: userId,
      title: title,
      body: post,
    },
  };
};

export const loadUser = (user) => {
  return {
    type: actionTypes.USER_LOADED,
    payload: user,
  };
};
export const loadingUser = () => {
  return {
    type: actionTypes.USER_LOADING,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(loadingUser());
    setTimeout(() => {
      dispatch(loadUser(User));
    }, 3000);
  };
};
