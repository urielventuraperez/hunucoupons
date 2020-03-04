import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import coupons from './coupons';
import bussines from './bussiness';
import categories from './categories';
import favorites from './favorites';

const rootReducer = (history) => combineReducers({
    coupons,
    bussines,
    categories,
    favorites, 
    router: connectRouter(history),
})

export default rootReducer;