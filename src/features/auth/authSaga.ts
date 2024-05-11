import { call, delay, fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  yield delay(2000);
  //Call APi
  console.log("Login: ", payload);
  localStorage.setItem("access_token", "fake_token");
}
function* handleLogout() {
  yield delay(500);
  console.log("logout");
  localStorage.removeItem("access_token");
}

function* WatchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    // call() will wait
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(WatchLoginFlow);
}
