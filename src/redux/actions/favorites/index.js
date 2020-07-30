import { ADD_MY_FAVORITES, SUPR_MY_FAVORITES } from '../../actionTypes/favorites';

export function updateMyTotalFav(isMyFav) {
  return function(dispatch){
    isMyFav ? dispatch({type: ADD_MY_FAVORITES}) : dispatch({type: SUPR_MY_FAVORITES}); 
    
  }
}

export function getMyFavorites() {

}

export function addToFavorites() {

}

export function quitToFavorites() {
  
}