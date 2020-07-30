import { ADD_MY_FAVORITES, SUPR_MY_FAVORITES } from '../../actionTypes/favorites';

const initialState = {
  myTotalFavorites: 0,
}

export default function reducer(state=initialState, action) {
  switch(action.type){
    case ADD_MY_FAVORITES:
      return {...state, myTotalFavorites: state.myTotalFavorites+1}
    case SUPR_MY_FAVORITES:
      return {...state, myTotalFavorites: state.myTotalFavorites-1}
    default:
      return state
  }
}