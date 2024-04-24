import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { clickChange, incrementByAmount } from "./counterSlice";

// eslint-disable-next-line require-yield
export function* log(action: PayloadAction<number>) {
  console.log("🚀 ~ function*log ~ action:", action);
  console.log("waiting for love");
  yield delay(1000);
  console.log("done");
  yield put(incrementByAmount(3));
}

// eslint-disable-next-line require-yield
// After initialization, it will run once
export default function* CounterSaga() {
  yield takeEvery(clickChange.type, log);
  // yield takeLatest(clickChange.type, log) ;
}
