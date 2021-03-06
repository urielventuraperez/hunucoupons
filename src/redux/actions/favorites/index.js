import { ADD_MY_FAVORITES, SUPR_MY_FAVORITES, MY_TOTAL_FAVORITES, MY_FAVORITES, LOAD_MY_FAVORITES  } from '../../actionTypes/favorites';
import { ACCESS_TOKEN, URL_API } from '../../../environments';

export function updateMyTotalFav(slug_coupon) {
  return function(dispatch){
    const data = { slug_cupon: slug_coupon }
      return fetch(`${URL_API}app/favorito/guardar`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      ).then(response => response.json())
      .then(json => {
        let typeDispatch;
        json.data.activo ? 
          typeDispatch = ADD_MY_FAVORITES : 
          typeDispatch = SUPR_MY_FAVORITES;
        dispatch({
        type: typeDispatch,
        payload: json.data.activo
      })
    });
    
  }
}

export function getMyTotalFavCoupons() {
  return function(dispatch) {
    dispatch({ type: LOAD_MY_FAVORITES });
    return fetch(`${URL_API}user/me`, {
      method:'GET',
      headers: { 'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` }
    })
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: MY_TOTAL_FAVORITES, payload: parseInt(json.data.numFavoritos) });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function viewMyFavorites() {
  return function(dispatch) {
    dispatch({ type: LOAD_MY_FAVORITES });
    return fetch(`${URL_API}app/cupon/favoritos`,
    {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` }
    })
    .then(response => response.json())
    .then(
      json => {
        return dispatch({ type: MY_FAVORITES, payload: json.data.content })
      }
    ).catch({
      function(error){
        console.log(error);
      }
    })
  }
}
