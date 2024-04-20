import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import { increment } from "./counterSlice";

// eslint-disable-next-line require-yield
export function* log(action: PayloadAction) {
  console.log("log", action);
}

// eslint-disable-next-line require-yield
export default function* CounterSaga() {
  yield takeEvery(increment().type, log);
}
