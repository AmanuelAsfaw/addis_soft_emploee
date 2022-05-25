export const FETCH_EMPLOYEE_REQUEST = "FETCH_EMPLOYEE_REQUEST";
export const FETCH_EMPLOYEE_SUCCESS = "FETCH_EMPLOYEE_SUCCESS";
export const FETCH_EMPLOYEE_FAILURE = "FETCH_EMPLOYEE_FAILURE";

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

export type EmployeeActions =
  | FetchEmployeeRequest
  | FetchEmployeeSuccess
  | FetchEmployeeFailure;