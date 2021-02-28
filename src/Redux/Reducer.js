import User from "../Data/User";
import Post from "../Data/Post";
import { combineReducers } from "redux";

const userReducer = (state = User, action) => {
  return state;
};

const postReducer = (state = Post, action) => {
  if (action.type === "ADD_POST") {
    let post = action.payload;
    post.id = state.length + 1;
    return state.concat(post);
  }
  return state;
};

export const Reducer = combineReducers({
  userData: userReducer,
  postData: postReducer,
});
