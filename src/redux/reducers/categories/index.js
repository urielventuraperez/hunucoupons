import {
  VIEW_ALL_CATEGORIES,
  LOAD_CATEGORIES,
  LOAD_CATEGORY,
  VIEW_CATEGORY
} from "../../actionTypes/categories";

const initialState = {
  categories: [],
  loadCategories: false,
  loadCategory: false,
  category: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return { ...state, loadCategories: !state.loadCategories };
    case LOAD_CATEGORY:
      return { ...state, loadCategory: !state.loadCategory };
    case VIEW_ALL_CATEGORIES:
      return Object.assign(
        { ...state, loadCategories: false },
        { categories: action.payload }
      );
    case VIEW_CATEGORY:
      return Object.assign(
        { ...state, loadCategory: false },
        { category: action.payload }
      );
    default:
      return state;
  }
}

export default reducer;
