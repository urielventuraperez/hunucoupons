import { SET_TOKEN, UNSET_TOKEN } from "../../actionTypes/auth";
import { ACCESS_TOKEN } from "../../../environments";

export function loginUser() {
  return (dispatch) => {
    dispatch({ type: SET_TOKEN })
  }
}

export function logoutUser() {
  return function(dispatch) {
    if(localStorage.getItem(ACCESS_TOKEN)){
      localStorage.clear()
      return dispatch({
        type: UNSET_TOKEN
      })
    }
  }
}
