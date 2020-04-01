import { VIEW_ALL_COUPONS, LOAD_COUPONS, VIEW_COUPONS } from "../../actionTypes/coupons";

const initialState = {
  loadCoupons: false,
  coupons: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COUPONS:
      return { ...state, loadCoupons: !state.loadCoupons };
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
    default:
      return state;
  }
}

export default reducer;
