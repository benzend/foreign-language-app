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

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
