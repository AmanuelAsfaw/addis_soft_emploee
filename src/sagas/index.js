import { all, fork } from "redux-saga/effects";

import employeeSaga from "./employee";

export function* rootSaga() {
  yield all([fork(employeeSaga)]);
}