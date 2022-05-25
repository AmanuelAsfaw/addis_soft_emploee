import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchEmployeeFailure, fetchEmployeeSuccess } from "../actions/employee/actions";

import { FETCH_EMPLOYEE_REQUEST } from "../actions/employee/type";
import { IEmployee } from "../actions/employee/type";

const getEmployees = () =>
  axios.get<IEmployee[]>("http://localhost:3000/employees");

/*
  Worker Saga: Fired on FETCH_Employee_REQUEST action
*/
function* fetchGetEmployeesSaga(): any {
  try {
    const response = yield call(getEmployees);
    console.log('response ', response);
    
    yield put(
      fetchEmployeeSuccess({
        employees: response.data.data,
      })
    );
  } catch (e) {
    yield put(
      fetchEmployeeFailure({
        error: (e as Error).message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_Employee_REQUEST` action.
  Allows concurrent increments.
*/
function* employeeSaga() {
  yield all([takeLatest(FETCH_EMPLOYEE_REQUEST, fetchGetEmployeesSaga)]);
}

export default employeeSaga;