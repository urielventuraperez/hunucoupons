import { VIEW_ALL_COUPONS, LOAD_COUPONS } from "../../actionTypes/coupons";

const initialState = {
  homeCoupons: [],
  loadCoupons: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COUPONS:
      return { ...state, loadCoupons: !state.loadCoupons };
    case VIEW_ALL_COUPONS:
      return Object.assign(
        { ...state, loadCoupons: false },
        { homeCoupons: action.payload }
      );
    default:
      return state;
  }
}

export default reducer;
