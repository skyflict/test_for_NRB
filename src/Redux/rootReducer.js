import { combineReducers } from "redux";
import employeeReducer from "./reducers";

const rootReducer = combineReducers({
  employees: employeeReducer,
});

export default rootReducer;
