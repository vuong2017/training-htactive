import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export const initializeSession = () => ({
  type: 'INITIALIZE_SESSION'
});

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default configureStore;
