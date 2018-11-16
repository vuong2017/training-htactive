import { combineReducers } from 'redux';

import { ExampleReducer } from './admin/example.reducer';
import { SubjectsReducer } from './subjects.reducer';
import { SectionsReducer } from './admin/sections.reducer';
import { CategoryReducer } from './category.reducer';
import { TrainingReducer } from './training.reducer';

const reducer = combineReducers({
  ExampleReducer,
  SectionsReducer,
  TrainingReducer,
  CategoryReducer,
  SubjectsReducer,
})

export default reducer;
