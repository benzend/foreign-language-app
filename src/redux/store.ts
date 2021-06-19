import { createStore, combineReducers } from "redux";
import {
  logInOutReducer,
  changeLanguageReducer,
  isLoggingInReducer,
} from "./reducers";

const reducers = combineReducers({
  login: logInOutReducer,
  language: changeLanguageReducer,
  loggingIn: isLoggingInReducer,
});

const store = createStore(reducers);
export default store;
