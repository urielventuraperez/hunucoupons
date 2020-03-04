import {
  VIEW_ALL_CATEGORIES,
  LOAD_CATEGORIES
} from "../../actionTypes/categories";

const initialState = {
  categories: [],
  loadCategories: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return { ...state, loadCategories: !state.loadCategories };
    case VIEW_ALL_CATEGORIES:
      return Object.assign(
        { ...state, loadCategories: false },
        { categories: action.payload }
      );
    default:
      return state;
  }
}

export default reducer;
