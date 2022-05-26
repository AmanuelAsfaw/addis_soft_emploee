import { all, fork } from "redux-saga/effects";

import onEmployeeSaga from "./employee";

export function* rootSaga() {
  yield all([fork(onEmployeeSaga)]);
}