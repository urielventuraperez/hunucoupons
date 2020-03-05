import { LOAD_USER, GET_USER } from "../../actionTypes/user";

const initialState = {
  user: [],
  loadUser: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, loadUser: !state.loadUser };
    case GET_USER:
      return Object.assign(
        { ...state, loadUser: true },
        { user: action.payload }
      );
    default:
      return state;
  }
}
