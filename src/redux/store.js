import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const store = createStore(rootReducer);

export default store;