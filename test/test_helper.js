import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;