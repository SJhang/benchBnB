import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

console.log(RootReducer());
const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState
  )
);

export default configureStore;
