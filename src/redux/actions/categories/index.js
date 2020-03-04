import { VIEW_ALL_CATEGORIES, LOAD_CATEGORIES } from '../../actionTypes/categories';
import { URL_API } from '../../../environments';

export function GetCategories() {
  return function (dispatch) {
    dispatch({ type: LOAD_CATEGORIES });
    return fetch(`${URL_API}app/categorias/listar`)
      .then( response => response.json() )
      .then(
        json => {
          return dispatch({
            type: VIEW_ALL_CATEGORIES,
            payload: json.data
          })
        }
      )
      .catch( function (error) {
        console.log(error)
      })
  }
}

export function getBussines() {

}