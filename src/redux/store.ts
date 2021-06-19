import { createStore, combineReducers } from "redux";
import {
  isLoggedInReducer,
  changeLanguageReducer,
  isLoggingInReducer,
  isAdminReducer,
  isUserReducer,
} from "./reducers";

const reducers = combineReducers({
  isAdmin: isAdminReducer,
  isUser: isUserReducer,
  isLoggedIn: isLoggedInReducer,
  language: changeLanguageReducer,
  loggingIn: isLoggingInReducer,
});

const store = createStore(reducers);
export default store;
