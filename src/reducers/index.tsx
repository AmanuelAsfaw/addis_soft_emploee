import { combineReducers } from "redux";

import employeeReducer from "./employee";

const rootReducer = combineReducers({
  employees: employeeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
