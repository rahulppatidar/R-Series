import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../_reducers/index'

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;