import { GET_USER, LOAD_USER } from "../../actionTypes/user";
import { UNSET_TOKEN } from "../../actionTypes/auth";
import { URL_API, ACCESS_TOKEN, ACCESS_USER } from "../../../environments";

export function getUserProfile() {
  return function(dispatch) {
    dispatch({ type: LOAD_USER });
    return fetch(`${URL_API}user/me`, {
      method:'GET',
      headers: { 'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` }
    })
      .then(response => response.json())
      .then(json => {
        if(json.status === 'success') {
          localStorage.setItem(ACCESS_USER, JSON.stringify(json.data));
          return dispatch({ type: GET_USER, payload: json.data });
        } else {
          localStorage.clear()
          return dispatch({
            type: UNSET_TOKEN
          })
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
