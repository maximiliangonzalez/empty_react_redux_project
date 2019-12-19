import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

// const reducers = combineReducers({
//   reducer
// })

const store = createStore(reducer, applyMiddleware(thunk));

export default store;