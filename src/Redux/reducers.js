import {
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  employees: [],
  error: "",
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        error: "",
      };
    case GET_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
