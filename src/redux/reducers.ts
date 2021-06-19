interface ActionType {
  type: string;
}

export const logInOutReducer = (state: boolean = false, action: ActionType) => {
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
