import { combineReducers } from 'redux';

import { ExampleReducer } from './admin/example.reducer';
import { CategoryReducer } from './category.reducer';
import { TrainingReducer } from './training.reducer';

const reducer = combineReducers({
  ExampleReducer,
  TrainingReducer,
  CategoryReducer
});

export default reducer;
