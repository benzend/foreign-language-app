import { IUser } from "../interfaces/IUser";

export const addUser = (payload: IUser | null) => ({
  type: "ADD_USER",
  payload,
});

export const RemoveUser = () => ({ type: "NO_USER", payload: null });
