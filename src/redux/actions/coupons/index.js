import { VIEW_ALL_COUPONS, LOAD_COUPONS } from "../../actionTypes/coupons";
import { URL_API } from "../../../environments";

export function GetHomeCoupons() {
  return function(dispatch) {
    dispatch({ type: LOAD_COUPONS });
    return fetch(`${URL_API}app/cupones/fechaReciente`)
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VIEW_ALL_COUPONS,
          payload: json.data
        });
      })
      .catch(function(e) {
        console.log(`error: ${e}`);
      });
  };
}

export function GetCoupons() {}

export function GetCurrentCoupon() {}
