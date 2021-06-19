import firebase from "firebase/app";

import { IUser } from "../interfaces/IUser";

interface ActionType {
  type: string;
}

export const isLoggedInReducer = (
  state: boolean = false,
  action: ActionType
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

export const changeLanguageReducer = (
  state: string = "no language selected",
  action: ActionType
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

export const isLoggingInReducer = (
  state: boolean = false,
  action: ActionType
) => {
  switch (action.type) {
    case "LOGGIN_IN":
      return true;
    case "NOT_LOGGIN_IN":
      return false;
    default:
      return state;
  }
};

export const isAdminReducer = (
  state: boolean = false,
  action: { type: "NOT_ADMIN" | "ADMIN" }
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

export const isUserReducer = (
  state: IUser | null = null,
  action: { type: "ADD_USER" | "REMOVE_USER"; payload: IUser }
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
