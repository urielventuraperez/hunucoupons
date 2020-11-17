import {
  ADD_MY_FAVORITES,
  SUPR_MY_FAVORITES,
  MY_TOTAL_FAVORITES,
  MY_FAVORITES,
  LOAD_MY_FAVORITES,
} from "../../actionTypes/favorites";

const initialState = {
  myTotalFavorites: 0,
  myFavorites: [],
  loadFavorites: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MY_FAVORITES:
      return { ...state, loadFavorites: !state.loadFavorites };
    case ADD_MY_FAVORITES:
      return { ...state, myTotalFavorites: state.myTotalFavorites + 1 };
    case SUPR_MY_FAVORITES:
      return { ...state, myTotalFavorites: state.myTotalFavorites - 1 };
    case MY_TOTAL_FAVORITES:
      return { ...state, myTotalFavorites: action.payload };
    case MY_FAVORITES:
      return Object.assign(
        { ...state, loadFavorites: false },
        { myFavorites: action.payload }
      );
    default:
      return state;
  }
}
