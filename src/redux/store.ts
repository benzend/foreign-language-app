import { createStore, combineReducers } from "redux";
import {
  isLoggedInReducer,
  changeLanguageReducer,
  isLoggingInReducer,
  isAdminReducer,
  userReducer,
} from "./reducers";

const reducers = combineReducers({
  isAdmin: isAdminReducer,
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  language: changeLanguageReducer,
  loggingIn: isLoggingInReducer,
});

const store = createStore(reducers);
export default store;
