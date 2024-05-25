import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface UserState {
  name: string;
  list: User[];
}

const initialState: UserState = {
  name: "1",
  list: [],
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserList(state) {
      state.name = "2";
    },
    fetchUserListSuccess(state, action: PayloadAction<User[]>) {
      state.list = action.payload;
    },
  },
});

// Action
// use for dispatch in component or page
export const userAction = UserSlice.actions;
// Selector
const selectorUserList = (state: RootState) => state.user;

// Reducer
// use this for add in rootStore
const UserReducer = UserSlice.reducer;
export default UserReducer;
