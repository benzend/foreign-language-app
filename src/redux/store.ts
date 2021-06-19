import { createStore, combineReducers } from "redux";
import {
  isLoggedInReducer,
  changeLanguageReducer,
  isLoggingInReducer,
} from "./reducers";

const reducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  language: changeLanguageReducer,
  loggingIn: isLoggingInReducer,
});

const store = createStore(reducers);
export default store;
