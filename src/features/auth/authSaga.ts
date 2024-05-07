import { fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LoginPayload) {
  console.log("Login: ", payload);
}
function* handleLogout() {
  console.log("logout");
}

function* WatchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(
      authActions.login.type
    );
    console.log("🚀 ~ function*WatchLoginFlow ~ action:", action);
    yield fork(handleLogin, action.payload);

    console.log("Waiting Logout");

    yield take(authActions.logout.type);
    console.log(
      "🚀 ~ function*WatchLoginFlow ~ authActions.logout.type:",
      authActions.logout.type
    );

    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(WatchLoginFlow);
}
