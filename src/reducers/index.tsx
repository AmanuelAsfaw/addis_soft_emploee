import { combineReducers } from "redux";
import { EmployeeState } from "../actions/employee/type";

import employeeReducer from "./employee";

const rootReducer = combineReducers({
  employees: employeeReducer
});

// export type AppState = ReturnType<typeof rootReducer>;

export type AppState = {
  employees : EmployeeState
}

export default rootReducer;
