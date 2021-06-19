import firebase from "firebase/app";

import { IUser } from "../interfaces/IUser";

interface ActionType {
  type: string;
}

export type TIsLoggedIn = "LOG_IN" | "LOG_OUT";

export const isLoggedInReducer = (
  state: boolean = false,
  action: { type: TIsLoggedIn }
) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};

export type TChangeLanguageAction = "TO_GERMAN" | "TO_SPANISH";

export const changeLanguageReducer = (
  state: string = "no language selected",
  action: {
    type: TChangeLanguageAction;
  }
) => {
  switch (action.type) {
    case "TO_GERMAN":
      return "german";
    case "TO_SPANISH":
      return "spanish";
    default:
      return state;
  }
};

export type TIsLoggingInAction = "LOGGING_IN" | "NOT_LOGGING_IN";

export const isLoggingInReducer = (
  state: boolean = false,
  action: { type: TIsLoggingInAction }
) => {
  switch (action.type) {
    case "LOGGING_IN":
      return true;
    case "NOT_LOGGING_IN":
      return false;
    default:
      return state;
  }
};

export type IIsAdminAction = "NOT_ADMIN" | "ADMIN";

export const isAdminReducer = (
  state: boolean = false,
  action: { type: IIsAdminAction }
) => {
  switch (action.type) {
    case "NOT_ADMIN":
      return false;
    case "ADMIN":
      return true;
    default:
      return state;
  }
};

export type TUserAction = "ADD_USER" | "REMOVE_USER";

export const userReducer = (
  state: IUser | null = null,
  action: { type: TUserAction; payload: IUser }
) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "REMOVE_USER":
      return null;
    default:
      return state;
  }
};
