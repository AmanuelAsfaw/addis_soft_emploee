import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_FAILURE,
  CREATE_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_REQUEST,
  GetEmployeeSuccessPayload,
  GetEmployeeSuccess,
  GET_EMPLOYEE_SUCCESS,
  GetEmployeeFailurePayload,
  GetEmployeeFailure,
  GET_EMPLOYEE_FAILURE,
  UpdateEmployeeRequest,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  UpdateEmployeeSuccessPayload,
  UpdateEmployeeSuccess,
  UpdateEmployeeFailure,
  UpdateEmployeeFailurePayload,
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
  GetEmployeeRequest,
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

// Get Employee by Id request actions
export const getEmployeeByIdRequest = (id: string) : GetEmployeeRequest => ({
  type : GET_EMPLOYEE_REQUEST,
  id : id,
})

export const getEmployeeByIdSuccess = (
  payload : GetEmployeeSuccessPayload
): GetEmployeeSuccess => ({
  type : GET_EMPLOYEE_SUCCESS,
  payload,
})

export const getEmployeeByIdFailure = (
  payload : GetEmployeeFailurePayload
) : GetEmployeeFailure => ({
  type : GET_EMPLOYEE_FAILURE,
  payload,
})

// Update Employee request actions
export const updateEmployeeRequest = (employee: IEmployee) : UpdateEmployeeRequest => ({
  type : UPDATE_EMPLOYEE_REQUEST,
  employee : employee
})

export const updateEmployeeSuccess = (
  payload : UpdateEmployeeSuccessPayload
): UpdateEmployeeSuccess => ({
  type : UPDATE_EMPLOYEE_SUCCESS,
  payload,
})

export const updateEmployeeFailure = (
  payload : UpdateEmployeeFailurePayload
) : UpdateEmployeeFailure => ({
  type : UPDATE_EMPLOYEE_FAILURE,
  payload,
})