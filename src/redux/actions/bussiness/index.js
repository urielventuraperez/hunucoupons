import {
  VIEW_BUSINESS,
  IS_LOAD_BUSINESS,
  PREMIUM_BUSINESS,
  VIEW_BUSINESS_COUPONS,
} from "../../actionTypes/bussiness";
import { URL_API, ACCESS_TOKEN } from "../../../environments";

export function getBusiness(business) {
  return function (dispatch) {
    dispatch({ type: IS_LOAD_BUSINESS });
    return fetch(`${URL_API}app/comercio/${business}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: VIEW_BUSINESS, payload: json.data[0] });
      });
  };
}

export function getPremiumBusiness() {
  return function (dispatch) {
    dispatch({ type: IS_LOAD_BUSINESS });
    return fetch(`${URL_API}app/comercio/categoria/?categoria=0&pagina=0`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: PREMIUM_BUSINESS,
          payload: json.data.content,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function getAllBussines() {}

export function getCoupons(business) {
  return function (dispatch) {
    return fetch(`${URL_API}app/cupones/negocio/${business}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: VIEW_BUSINESS_COUPONS,
          payload: json.data.content,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
