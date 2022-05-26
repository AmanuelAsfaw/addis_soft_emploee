import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_FAILURE,
  CREATE_EMPLOYEE_SUCCESS,
} from "./type";

import {
  FetchEmployeeRequest,
  FetchEmployeeSuccess,
  FetchEmployeeSuccessPayload,
  FetchEmployeeFailure,
  FetchEmployeeFailurePayload,
  AddEmployeeRequest,
  AddEmployeeSuccessPayload,
  AddEmployeeSuccess,
  AddEmployeeFailurePayload,
  AddEmployeeFailure,
  IEmployee,
} from "./type";

export const fetchEmployeeRequest = (): FetchEmployeeRequest => ({
  type: FETCH_EMPLOYEE_REQUEST,
});

export const fetchEmployeeSuccess = (
  payload: FetchEmployeeSuccessPayload
): FetchEmployeeSuccess => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload,
});

export const fetchEmployeeFailure = (
  payload: FetchEmployeeFailurePayload
): FetchEmployeeFailure => ({
  type: FETCH_EMPLOYEE_FAILURE,
  payload,
});

// Add Employee request actions
export const addEmployeeRequest = (employee: IEmployee) : AddEmployeeRequest => ({
  type : CREATE_EMPLOYEE_REQUEST,
  employee : employee,
})

export const addEmployeeSuccess = (
  payload : AddEmployeeSuccessPayload
): AddEmployeeSuccess => ({
  type : CREATE_EMPLOYEE_SUCCESS,
  payload,
})

export const addEmployeeFailure = (
  payload : AddEmployeeFailurePayload
) : AddEmployeeFailure => ({
  type : CREATE_EMPLOYEE_FAILURE,
  payload,
})