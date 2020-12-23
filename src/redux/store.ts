import { createStore, combineReducers } from "redux";
import {
  logInOutReducer,
  changeLanguageReducer,
  isLogginInReducer,
} from "./reducers";

const reducers = combineReducers({
  login: logInOutReducer,
  language: changeLanguageReducer,
  loggingIn: isLogginInReducer,
});

const store = createStore(reducers);
export default store;
