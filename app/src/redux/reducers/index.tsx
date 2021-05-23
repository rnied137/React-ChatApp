import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ProductListReducer } from './ProductListReducer';

export const rootReducer = combineReducers({
    productList: ProductListReducer
});

