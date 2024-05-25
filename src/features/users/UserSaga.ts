import { call, put, takeLatest } from "redux-saga/effects";
import { User, userAction } from "./UserSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import { AxiosResponse } from "axios";

function* fetchUserListInSaga(action: PayloadAction<void>) {
  try {
    const data: User[] = yield call(userApi.getAllUser);
    yield console.log(put(userAction.fetchUserListSuccess(data)));
    yield put(userAction.fetchUserListSuccess(data));
  } catch (error) {
    console.log("ditmemay: ", error);
  }
}

export default function* userSaga() {
  yield takeLatest(userAction.fetchUserList, fetchUserListInSaga);
}
