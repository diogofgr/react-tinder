import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';

let createStoreWithMiddleware = applyMiddleware()(createStore);
let store = createStoreWithMiddleware(reducers);

export default store;