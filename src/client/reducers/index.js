import { combineReducers } from 'redux';

import { ExampleReducer } from './admin/example.reducer';
import { SectionsReducer } from './admin/sections.reducer';
import { PostsReducer } from './admin/posts.reducer';
import { CategoryReducer } from './category.reducer';
import { SubjectsReducer } from './subjects.reducer';
import { TrainingReducer } from './training.reducer';

const reducer = combineReducers({
  ExampleReducer,
  SectionsReducer,
  PostsReducer,
  TrainingReducer,
  CategoryReducer,
  SubjectsReducer,
})

export default reducer;
