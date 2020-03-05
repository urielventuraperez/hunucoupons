import { SET_TOKEN, UNSET_TOKEN } from '../../actionTypes/auth';
import { ACCESS_TOKEN } from '../../../environments';

const initialState = {
  hasToken: localStorage.getItem(ACCESS_TOKEN) ? true : false,
}

function reducer ( state=initialState, action ){
  switch( action.type ){
    case SET_TOKEN:
      return { ...state, hasToken: true };
    case UNSET_TOKEN:
      return { ...state, hasToken: false };
    default:
      return state;    
  }
}

export default reducer;