import { SET_THEME_MODE } from "../../actionTypes/theme";

export function changeThemeMode() {
  return function(dispatch){
    return dispatch({type: SET_THEME_MODE});
  }
}