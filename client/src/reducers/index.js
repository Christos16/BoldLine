import { combineReducers } from 'redux';

import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  data: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
