import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";
import type { RootState } from "./store";

let user: IUser | null = null;

// Define a type for the slice state
export interface IUserState {
  value: IUser | null;
}

// Define the initial state using that type
const initialState: IUserState = {
  value: null,
};

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUser: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload;
    },
    removeUser: (state, action: PayloadAction<null>) => {
      state.value = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
