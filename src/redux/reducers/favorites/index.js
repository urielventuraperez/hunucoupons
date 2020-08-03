import { ADD_MY_FAVORITES, SUPR_MY_FAVORITES, MY_TOTAL_FAVORITES, LOAD_MY_TOTAL_FAVORITES } from '../../actionTypes/favorites';

const initialState = {
  myTotalFavorites: 0,
}

export default function reducer(state=initialState, action) {
  switch(action.type){
    case ADD_MY_FAVORITES:
      return {...state, myTotalFavorites: state.myTotalFavorites+1}
    case SUPR_MY_FAVORITES:
      return {...state, myTotalFavorites: state.myTotalFavorites-1}
    case MY_TOTAL_FAVORITES:
      return { ...state, myTotalFavorites: 10 }
    default:
      return state
  }
}