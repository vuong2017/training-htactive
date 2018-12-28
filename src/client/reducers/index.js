import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

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
  loadingBar: loadingBarReducer,
})

export default reducer
