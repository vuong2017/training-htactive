import { combineReducers } from 'redux';
import { ExampleReducer } from '../reducers/admin/example.reducer';

const reducer = combineReducers({
  ExampleReducer: ExampleReducer
});

export default reducer;
