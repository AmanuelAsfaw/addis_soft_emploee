import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { addEmployeeFailure, addEmployeeSuccess, deleteEmployeeFailure, deleteEmployeeSuccess, fetchEmployeeFailure, fetchEmployeeRequest, fetchEmployeeSuccess, getEmployeeByIdFailure, getEmployeeByIdSuccess, updateEmployeeFailure, updateEmployeeSuccess } from "../actions/employee/actions";

import { AddEmployeeRequest, CREATE_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_REQUEST, GetEmployeeRequest, GET_EMPLOYEE_REQUEST, RemoveEmployeeRequest, REMOVE_EMPLOYEE_REQUEST, UpdateEmployeeRequest, UPDATE_EMPLOYEE_REQUEST } from "../actions/employee/type";
import { addEmployee, getEmployeeById, getEmployees, removeEmployeeById, updateEmployee } from "../api/employee";

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
  Worker Saga: Fired on CREATE_EMPLOYEE_REQUEST action
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
  Worker Saga: Fired on CREATE_EMPLOYEE_REQUEST action
*/
function* getEmployeeByIdSage(action: GetEmployeeRequest) : any {
  try {
    console.log('id to get'+ action.id);
    
    const response = yield call(getEmployeeById, action.id)

    console.log('get employee by id response ', response)
    let data = response.data

    if (data.success) {
      let employee = {
        _id : data.data._id, name : data.data.name,
        birth_date: data.data.birth_date, 
        gender: data.data.gender, salary: data.data.salary
      }
      yield put(
        getEmployeeByIdSuccess({
          employee : employee,
          success : true,
          message : data.message
        })
      )
    }
    else {
      yield put(
        getEmployeeByIdFailure(
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
      getEmployeeByIdFailure({
        error: (e as Error).message,
        success : false,
        message : (e as Error).message,
      })
    )
  }
}

/*
  Worker Saga: Fired on UPDATE_EMPLOYEE_REQUEST action
*/
function* updateEmployeeSage(action: UpdateEmployeeRequest) : any {
  try {
    console.log('id to update'+ action.employee._id);
    
    const response = yield call(updateEmployee, action.employee)

    console.log('update employee by id response ', response)
    let data = response.data

    if (data.success) {
      let employee = {
        _id : data.employee._id, name : data.employee.name,
        birth_date: data.employee.birth_date, 
        gender: data.employee.gender, salary: data.employee.salary
      }
      yield put(
        updateEmployeeSuccess({
          employee : employee,
          success : true,
          message : data.message
        })
      )
    }
    else {
      yield put(
        updateEmployeeFailure(
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
      updateEmployeeFailure({
        error: (e as Error).message,
        success : false,
        message : (e as Error).message,
      })
    )
  }
}

/*
  Worker Saga: Fired on REMOVE_EMPLOYEE_REQUEST action
*/
function* removeEmployeeSage(action: RemoveEmployeeRequest) : any {
  try {
    console.log('id to remove'+ action.id);
    
    const response = yield call(removeEmployeeById, action.id)

    console.log('remove employee by id response ', response)
    let data = response.data

    if (data.success) {
      let employee = {
        _id : data.employee._id, name : data.employee.name,
        birth_date: data.employee.birth_date, 
        gender: data.employee.gender, salary: data.employee.salary
      }
      yield put(
        deleteEmployeeSuccess({
          employee : employee,
          success : true,
          message : data.message
        })
      )
      yield put(fetchEmployeeRequest())
    }
    else {
      yield put(
        deleteEmployeeFailure(
          {
            error : data.message,
            message : data.message,
            success : false
          }
        )
      )
      yield put(fetchEmployeeRequest())
    }
    
  } catch (e) {
    yield put(
      deleteEmployeeFailure({
        error: (e as Error).message,
        success : false,
        message : (e as Error).message,
      })
    )
    yield put(fetchEmployeeRequest())
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_Employee_REQUEST`, `CREATE_EMPLOYEE_REQUEST` action.
  Allows concurrent increments.
*/
function* onEmployeeSaga() : SagaIterator{
  yield all([
    takeLatest(FETCH_EMPLOYEE_REQUEST, fetchGetEmployeesSaga),
    takeLatest(CREATE_EMPLOYEE_REQUEST, addEmployeeSage),
    takeLatest(GET_EMPLOYEE_REQUEST, getEmployeeByIdSage),
    takeLatest(REMOVE_EMPLOYEE_REQUEST, removeEmployeeSage),
  ]);
}

export default onEmployeeSaga;