export const FETCH_EMPLOYEE_REQUEST = "FETCH_EMPLOYEE_REQUEST";
export const FETCH_EMPLOYEE_SUCCESS = "FETCH_EMPLOYEE_SUCCESS";
export const FETCH_EMPLOYEE_FAILURE = "FETCH_EMPLOYEE_FAILURE";

export const CREATE_EMPLOYEE_REQUEST = "CREATE_EMPLOYEE_REQUEST";
export const CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAILURE = "CREATE_EMPLOYEE_FAILURE";

export const GET_EMPLOYEE_REQUEST = "GET_EMPLOYEE_REQUEST";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILURE = "GET_EMPLOYEE_FAILURE";

export const UPDATE_EMPLOYEE_REQUEST = "UPDATE_EMPLOYEE_REQUEST";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const REMOVE_EMPLOYEE_REQUEST = "REMOVE_EMPLOYEE_REQUEST";
export const REMOVE_EMPLOYEE_SUCCESS = "REMOVE_EMPLOYEE_SUCCESS";
export const REMOVE_EMPLOYEE_FAILURE = "REMOVE_EMPLOYEE_FAILURE";

export interface IEmployee {
  _id: number | string;
  name: string;
  birth_date: string;
  gender: string;
  salary: Number;
}

export interface EmployeeState {
  pending: boolean;
  employees: IEmployee[];
  error: string | null;
  success : boolean;
  message : string | null;
  addedEmployee : IEmployee | null;
  getEmployee : IEmployee | null;
  updatedEmployee : IEmployee | null;
}

// featch employees list data
export interface FetchEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface FetchEmployeeFailurePayload {
  error: string;
}

export interface FetchEmployeeRequest {
  type: typeof FETCH_EMPLOYEE_REQUEST;
}

export type FetchEmployeeSuccess = {
  type: typeof FETCH_EMPLOYEE_SUCCESS;
  payload: FetchEmployeeSuccessPayload;
};

export type FetchEmployeeFailure = {
  type: typeof FETCH_EMPLOYEE_FAILURE;
  payload: FetchEmployeeFailurePayload;
};

// Add employee to database
export interface AddEmployeeSuccessPayload {
  success : boolean | false;
  addedEmployee : IEmployee | null;
  message : string | null;
}

export interface AddEmployeeFailurePayload {
  error : string | Object | null;
  message : string | null;
  success : boolean | null | false;
}

export interface AddEmployeeRequest {
  type : typeof CREATE_EMPLOYEE_REQUEST;
  employee : IEmployee;
}

export type AddEmployeeSuccess = {
  type : typeof CREATE_EMPLOYEE_SUCCESS;
  payload : AddEmployeeSuccessPayload;
}

export type AddEmployeeFailure = {
  type : typeof CREATE_EMPLOYEE_FAILURE;
  payload : AddEmployeeFailurePayload;
}

// Get employee by id
export interface GetEmployeeSuccessPayload {
  success : boolean | false;
  employee : IEmployee | null;
  message : string | null;
}

export interface GetEmployeeFailurePayload {
  error : string | Object | null;
  message : string | null;
  success : boolean | null | false;
}

export interface GetEmployeeRequest {
  type : typeof GET_EMPLOYEE_REQUEST;
  id : string;
}

export type GetEmployeeSuccess = {
  type : typeof GET_EMPLOYEE_SUCCESS;
  payload : GetEmployeeSuccessPayload;
}

export type GetEmployeeFailure = {
  type : typeof GET_EMPLOYEE_FAILURE;
  payload : GetEmployeeFailurePayload;
}

// Update employee
export interface UpdateEmployeeSuccessPayload {
  success : boolean | false;
  employee : IEmployee;
  message : string | null;
}

export interface UpdateEmployeeFailurePayload {
  error : string | Object | null;
  message : string | null;
  success : boolean | null | false;
}

export interface UpdateEmployeeRequest {
  type : typeof UPDATE_EMPLOYEE_REQUEST;
  employee : IEmployee;
}

export type UpdateEmployeeSuccess = {
  type : typeof UPDATE_EMPLOYEE_SUCCESS;
  payload : UpdateEmployeeSuccessPayload;
}

export type UpdateEmployeeFailure = {
  type : typeof UPDATE_EMPLOYEE_FAILURE;
  payload : UpdateEmployeeFailurePayload;
}

// Remove employee
export interface RemoveEmployeeSuccessPayload {
  success : boolean | false;
  message : string | null;
  employee : IEmployee;
}

export interface RemoveEmployeeFailurePayload {
  error : string | Object | null;
  message : string | null;
  success : boolean | null | false;
}

export interface RemoveEmployeeRequest {
  type : typeof REMOVE_EMPLOYEE_REQUEST;
  id : string;
}

export type RemoveEmployeeSuccess = {
  type : typeof REMOVE_EMPLOYEE_SUCCESS;
  payload : RemoveEmployeeSuccessPayload;
}

export type RemoveEmployeeFailure = {
  type : typeof REMOVE_EMPLOYEE_FAILURE;
  payload : RemoveEmployeeFailurePayload;
}

export type EmployeeActions =
  | FetchEmployeeRequest
  | FetchEmployeeSuccess
  | FetchEmployeeFailure
  | AddEmployeeRequest
  | AddEmployeeSuccess
  | AddEmployeeFailure
  | GetEmployeeRequest
  | GetEmployeeSuccess
  | GetEmployeeFailure
  | UpdateEmployeeRequest
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailure
  | RemoveEmployeeRequest
  | RemoveEmployeeSuccess
  | RemoveEmployeeFailure;