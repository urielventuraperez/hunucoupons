import { SET_THEME_MODE } from "../../actionTypes/theme";
import { DARK_MODE } from "../../../environments";

const initialState = {
  darkTheme: localStorage.getItem(DARK_MODE) === 'true' ? true : false,
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case SET_THEME_MODE:
      localStorage.setItem(DARK_MODE, !state.darkTheme);
      return { ...state, darkTheme: !state.darkTheme }
    default:
      return state
  }
}
