export const login = () => {
  return {
    type: "LOG_IN",
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const changeLanguage = (language: string) => {
  return {
    type: language,
  };
};

export const isLoggingIn = () => {
  return {
    type: "LOGGING_IN",
  };
};

export const notLoggingIn = () => {
  return {
    type: "NOT_LOGGING_IN",
  };
};
