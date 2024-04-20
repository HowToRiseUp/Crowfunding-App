import { all } from "redux-saga/effects";
import CounterSaga from "../features/counter/counterSaga";

export default function* rootSaga() {
  yield all([CounterSaga()]);
}
