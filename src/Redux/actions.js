import axios from "axios";

export const GET_EMPLOYEES_REQUEST = "GET_EMPLOYEES_REQUEST";
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAILURE = "GET_EMPLOYEES_FAILURE";

export const getEmployees = () => {
  return (dispatch) => {
    dispatch({ type: GET_EMPLOYEES_REQUEST });

    axios
      .get("https://reactapi.bsite.net/api/Employee")
      .then((response) => {
        dispatch({
          type: GET_EMPLOYEES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_EMPLOYEES_FAILURE,
          payload: error.message,
        });
      });
  };
};
