import { SET_TOKEN, UNSET_TOKEN } from '../../actionTypes/auth';
import { URL_API } from '../../../environments';


const initialState = {
  token: '',
  startSession: false,
}

function reducer ( state, action ){
  switch( action.payload ){
    case SET_TOKEN:
      return;
    case UNSET_TOKEN:
      return;
    default:
      return;    
  }
}

export default reducer;