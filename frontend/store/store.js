import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import SessionMiddleware from '../middleware/session_middleware';

console.log(RootReducer());
const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    SessionMiddleware
  )
);

export default configureStore;
