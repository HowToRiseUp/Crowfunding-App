import { all } from "redux-saga/effects";
import CounterSaga from "../features/counter/counterSaga";
import authSaga from "../features/auth/authSaga";
import userSaga from "../features/users/UserSaga";

export default function* rootSaga() {
  yield all([CounterSaga(), authSaga(), userSaga()]);
}
