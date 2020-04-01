import {
  VIEW_ALL_CATEGORIES,
  LOAD_CATEGORIES,
  VIEW_CATEGORY,
  LOAD_CATEGORY
} from "../../actionTypes/categories";
import {
  VIEW_COUPONS
} from "../../actionTypes/coupons";
import { URL_API, ACCESS_TOKEN } from "../../../environments";

export function GetCategories() {
  return function(dispatch) {
    dispatch({ type: LOAD_CATEGORIES });
    return fetch(`${URL_API}app/categorias/listar`)
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VIEW_ALL_CATEGORIES,
          payload: json.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function GetCategory(category, page) {
  return function(dispatch) {
    dispatch({ type: LOAD_CATEGORY });
    return fetch(`${URL_API}app/cupones/${category}/?page=${page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: VIEW_COUPONS,
          payload: json.data.content
        });
        dispatch({
          type: VIEW_CATEGORY,
          payload: json.data.url
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function getBussines() {}
