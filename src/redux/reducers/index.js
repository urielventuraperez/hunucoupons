import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import coupons from './coupons';
import business from './bussiness';
import categories from './categories';
import favorites from './favorites';
import auth from './auth';
import user from './user';
import theme from './theme';

const rootReducer = (history) => combineReducers({
    coupons,
    business,
    categories,
    favorites,
    auth,
    user,
    theme,
    router: connectRouter(history),
})

export default rootReducer;