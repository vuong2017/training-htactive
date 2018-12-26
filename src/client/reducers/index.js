import { combineReducers } from 'redux'

import { SectionsReducer } from './admin/sections.reducer'
import { PostsReducer } from './admin/posts.reducer'
import { SubjectsReducer } from './admin/subjects.reducer'
import { CategoryReducer } from './category.reducer'
import { TrainingReducer } from './training.reducer'

const reducer = combineReducers({
  SectionsReducer,
  PostsReducer,
  TrainingReducer,
  CategoryReducer,
  SubjectsReducer,
})

export default reducer
