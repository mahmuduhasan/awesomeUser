import Post from "../Data/Post";
import { combineReducers } from "redux";
import * as actionTypes from "./ActionTypes";

const userReducer = (userState = { isLoaded: false, userData: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.USER_LOADING:
      return {
        ...userState,
        isLoaded: true,
        userData: [],
      };
    case actionTypes.USER_LOADED:
      return {
        ...userState,
        isLoaded: false,
        userData: action.payload,
      };

    default:
      return userState;
  }
};

const postReducer = (state = Post, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      let post = action.payload;
      post.id = state.length + 1;
      return state.concat(post);
    default:
      return state;
  }
};

export const Reducer = combineReducers({
  userData: userReducer,
  postData: postReducer,
});
