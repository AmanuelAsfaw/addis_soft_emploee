import { createSelector } from "reselect";
import employee from "../reducers/employee";

import { AppState } from "../reducers/index";

const getPending = (state: AppState) => state.employees.pending;

const getEmployees = (state: AppState) => state.employees.employees;

const getError = (state: AppState) => state.employees.error;

const getAddEmployeeSucces = (state: AppState) => state.employees.success;

const getEmployeeById = (state: AppState) => state.employees.getEmployee;

export const getEmployeesSelector = createSelector(getEmployees, (employees) => employees);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getAddEmployeeSuccesSelector = createSelector(getAddEmployeeSucces, (success) => success);

export const getEmployeeByIdSelector = createSelector(getEmployeeById, (employee) => employee)