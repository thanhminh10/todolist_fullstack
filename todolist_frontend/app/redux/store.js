import rootReducer from "./rootreducer";
import {createStore, applyMiddleware, compose} from 'redux'

import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))


// const store = createStore(rootReducer)
export default store;