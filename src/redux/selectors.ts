import { RootState } from "./store";

export const selectIsLoggedIn = (state: RootState) => state.isLoggedIn;

export const selectLanguage = (state: RootState) => state.language;

export const selectUser = (state: RootState) => state.user;

export const selectIsAdmin = (state: RootState) => state.isAdmin;
