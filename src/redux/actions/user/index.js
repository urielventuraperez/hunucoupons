import { GET_USER, LOAD_USER } from "../../actionTypes/user";
import { URL_API, ACCESS_TOKEN } from "../../../environments";

export function getUserProfile() {
  return function(dispatch) {
    dispatch({ type: LOAD_USER });
    return fetch(`${URL_API}user/me`, {
      method:'GET',
      headers: { 'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` }
    })
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: GET_USER, payload: json.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
