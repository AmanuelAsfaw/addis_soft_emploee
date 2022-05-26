import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { addEmployeeFailure, addEmployeeSuccess, fetchEmployeeFailure, fetchEmployeeSuccess } from "../actions/employee/actions";

import { AddEmployeeRequest, CREATE_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_REQUEST } from "../actions/employee/type";
import { addEmployee, getEmployees } from "../api/employee";

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
  Worker Saga: Fired on FETCH_Employee_REQUEST action
*/
function* addEmployeeSage(action: AddEmployeeRequest) : any {
  try {
    const response = yield call(addEmployee, action.employee)

    let data = response.data
    console.log('added employee response ', response.data)

    if (data.success) {
      let employee = {
        _id : data.employee._id, name : data.name,
        birth_date: data.birth_date, 
        gender: data.gender, salary: data.salary
      }
      yield put(
        addEmployeeSuccess({
          addedEmployee : employee,
          success : true,
          message : data.message
        })
      )
    }
    else {
      yield put(
        addEmployeeFailure(
          {
            error : data.message,
            message : data.message,
            success : false
          }
        )
      )
    }
    
  } catch (e) {
    yield put(
      addEmployeeFailure({
        error: (e as Error).message,
        success : false,
        message : (e as Error).message,
      })
    )
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_Employee_REQUEST` action.
  Allows concurrent increments.
*/
function* onEmployeeSaga() : SagaIterator{
  yield all([
    takeLatest(FETCH_EMPLOYEE_REQUEST, fetchGetEmployeesSaga),
    takeLatest(CREATE_EMPLOYEE_REQUEST, addEmployeeSage),
  ]);
}

export default onEmployeeSaga;