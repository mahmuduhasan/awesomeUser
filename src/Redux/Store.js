import { Reducer } from "./Reducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const dataStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default dataStore;
