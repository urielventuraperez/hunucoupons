import { VIEW_ALL_COUPONS, LOAD_COUPONS, VIEW_COUPON, VIEW_HOME_COUPONS, BUSSINES_COUPON, COUPONS_PAGES } from "../../actionTypes/coupons";
import { URL_API, ACCESS_TOKEN } from "../../../environments";

export function GetHomeCoupons() {
  return function(dispatch) {
    dispatch({ type: LOAD_COUPONS });
    return fetch(`${URL_API}app/cupones/fechaReciente`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
      }
    })
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VIEW_HOME_COUPONS,
          payload: json.data
        });
      })
      .catch(function(e) {
        console.log(`error: ${e}`);
      });
  };
}

export function GetCoupons(page) {
  return function(dispatch) {
    dispatch({ type: LOAD_COUPONS });
    return fetch(`${URL_API}app/cupones/fecha?page=${page}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: COUPONS_PAGES,
          payload: json.data.totalPaginas
        });
        return dispatch({
          type: VIEW_ALL_COUPONS,
          payload: json.data.content
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
        dispatch({
          type: VIEW_COUPON,
          payload: json.data['0']
        });
        dispatch({
          type: BUSSINES_COUPON,
          payload: json.data['0'].empresa
        });
      }
    })
    .catch(function(error) {
      console.log(error)
    })
  }
}
