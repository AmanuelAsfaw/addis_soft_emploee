import {
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAILURE,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS,
    GET_EMPLOYEE_FAILURE,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILURE,
  } from "../actions/employee/type";
  
  import { EmployeeActions, EmployeeState } from "../actions/employee/type";
  
  const initialState: EmployeeState = {
    pending: false,
    employees: [],
    error: null,
    success : false,
    message : null,
    addedEmployee : null,
    updatedEmployee : null,
    getEmployee : null,
  };
  
  export default (state = initialState, action: EmployeeActions) => {
    switch (action.type) {
      case FETCH_EMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_EMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          employees: action.payload.employees,
          error: null,
        };
      case FETCH_EMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          employees: [],
          error: action.payload.error,
        };
      case CREATE_EMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case CREATE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: action.payload.success,
          error: null,
          addedEmployee : action.payload.addedEmployee,
          message : action.payload.message 
        };
      case CREATE_EMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          addedEmployee: null,
          success : false,
          error: action.payload.error,
          message : action.payload.message 
        };
      case GET_EMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case GET_EMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: true,
          error: null,
          getEmployee : action.payload.employee,
          message : action.payload.message 
        };
      case GET_EMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          addedEmployee: null,
          success : false,
          error: action.payload.error,
          message : action.payload.message 
        };
      case UPDATE_EMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case UPDATE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: action.payload.success,
          error: null,
          updatedEmployee : action.payload.employee,
          message : action.payload.message 
        };
      case UPDATE_EMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          updatedEmployee: null,
          success : false,
          error: action.payload.error,
          message : action.payload.message 
        };
      default:
        return {
          ...state,
        };
    }
  };