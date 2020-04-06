import { VIEW_ALL_COUPONS, LOAD_COUPONS, VIEW_COUPON } from "../../actionTypes/coupons";
import { URL_API, ACCESS_TOKEN } from "../../../environments";

export function GetCoupons() {
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

export function GetSingleCoupon(slugCoupon) {
  return function(dispatch) {
    dispatch({ type: LOAD_COUPONS });
    return fetch(`${URL_API}app/cupon/${slugCoupon}`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
      }
    })
    .then( response=>response.json() )
    .then(json=> {
      if(json.status === 'success'){
        return dispatch({
          type: VIEW_COUPON,
          payload: json.data['0']
        })
      }
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
