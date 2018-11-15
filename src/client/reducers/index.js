import { combineReducers } from 'redux';

import { ExampleReducer } from './admin/example.reducer';
import { SubjectsReducer } from './subjects.reducer';
import { Posts } from './posts.reducer';

const reducer = combineReducers({
  ExampleReducer,
  SubjectsReducer,
  Posts
});

export default reducer;
