import {
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_FAILURE,
    FETCH_EMPLOYEE_SUCCESS,
  } from "./type";

  import {
    FetchEmployeeRequest,
    FetchEmployeeSuccess,
    FetchEmployeeSuccessPayload,
    FetchEmployeeFailure,
    FetchEmployeeFailurePayload,
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