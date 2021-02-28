import { Reducer } from "./Reducer";
import { createStore } from "redux";

const dataStore = createStore(Reducer);

export default dataStore;
