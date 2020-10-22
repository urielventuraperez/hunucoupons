import {
  VIEW_BUSINESS,
  IS_LOAD_BUSINESS,
  PREMIUM_BUSINESS,
  VIEW_BUSINESS_COUPONS,
} from "../../actionTypes/bussiness";

const initialState = {
  isLoadBusiness: false,
  business: {},
  premiumBusiness: [],
  coupons: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOAD_BUSINESS:
      return { ...state, isLoadBusiness: !state.isLoadBusiness };
    case VIEW_BUSINESS:
      return Object.assign(
        { ...state, isLoadBusiness: false },
        { business: action.payload }
      );
    case PREMIUM_BUSINESS:
      return Object.assign(
        { ...state, isLoadBusiness: false },
        { premiumBusiness: action.payload }
      );
    case VIEW_BUSINESS_COUPONS:
      return Object.assign(
        { ...state, isLoadBusiness: false },
        {
          coupons: action.payload
        }
      )
    default:
      return state;
  }
}

export default reducer;
