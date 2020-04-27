import { VIEW_BUSINESS, IS_LOAD_BUSINESS } from "../../actionTypes/bussiness";
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

export function getAllBussines() {}

export function getCoupons() {}
