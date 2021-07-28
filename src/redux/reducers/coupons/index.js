import {
  VIEW_ALL_COUPONS,
  LOAD_COUPONS,
  VIEW_COUPONS,
  VIEW_COUPON,
  VIEW_HOME_COUPONS,
  BUSSINES_COUPON,
} from "../../actionTypes/coupons";

const initialState = {
  loadCoupons: false,
  coupons: [],
  homeCoupons: [],
  coupon: {},
  bussines: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COUPONS:
      return { ...state, loadCoupons: !state.loadCoupons };
    case VIEW_HOME_COUPONS:
      return Object.assign(
        { ...state, loadCoupons: false },
        { homeCoupons: action.payload.slice(0,9) }
      );
    case VIEW_ALL_COUPONS:
      return Object.assign(
        { ...state, loadCoupons: false },
        { coupons: action.payload }
      );
    case VIEW_COUPONS:
      return Object.assign(
        { ...state, loadCoupons: false },
        { coupons: action.payload }
      );
    case VIEW_COUPON:
      return Object.assign(
        { ...state, loadCoupons: false },
        { coupon: action.payload }
      );
    case BUSSINES_COUPON:
      return Object.assign({ ...state }, { bussines: action.payload });
    default:
      return state;
  }
}

export default reducer;
