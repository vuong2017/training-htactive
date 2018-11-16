import { combineReducers } from 'redux';

import { ExampleReducer } from './admin/example.reducer';
import { SubjectsReducer } from './subjects.reducer';
import { Posts } from './posts.reducer';
import { SectionsReducer } from './admin/sections.reducer';
import { SubjectReducer } from './admin/subject.reducer';

const reducer = combineReducers({
  ExampleReducer,
  SectionsReducer,
  Posts,
  SubjectsReducer,
  SubjectReducer
});

export default reducer;
