import { actionEnums } from '../admin-action-enum'

import baseUrl from '../../common/baseUrl'
import api from '../../services/axios-services'


const subjectsRequest = () => {
  return {
    type: actionEnums.GET_SUBJECTS_REQUEST
  }
}

const getSubjects = data => ({
  type: actionEnums.FETCH_DATA_SUBJECTS,
  payload: data
})


const createSubjects = data => ({
  type: actionEnums.CREATE_DATA_SUBJECTS,
  payload: data
})

const updateSubjects = data => ({
  type: actionEnums.UPDATE_DATA_SUBJECTS,
  payload: data
})

const deleteSubjects = data => ({
  type: actionEnums.DELETE_DATA_SUBJECTS,
  payload: data
})
// Get Data
const fetchDataSubjects = () => async dispatch => {
  const url = `${baseUrl.Api}/subjects`
  const result = await api().get(url)
  dispatch(getSubjects(result))
}
// Create Data
const createItemSubjects = data => async dispatch => {
  const url = `${baseUrl.Api}/subjects`
  const result = await api().postFormData(url, data)
  dispatch(createSubjects(result))
}
// Update Data
const updateItemSubjects = data => async dispatch => {
  const url = `${baseUrl.Api}/subjects/update`
  const result = await api().postFormData(url, data)
  dispatch(updateSubjects(result))
}
// Delete Data
const deleteItemSubjects = data => async dispatch => {
  const url = `${baseUrl.Api}/subjects/delete`
  const result = await  api().post(url, data)
  dispatch(deleteSubjects(result))
}

// Set Current Page Pagination
const setCurrentPageSubjects = page => ({
  type: actionEnums.SET_ITEM_CURRENT_PAGE_SUBJECTS,
  payload: {
    page
  }
})

// Set numberData Pagination
const setPerPageSubjects = perPage => ({
  type: actionEnums.SET_ITEM_PERPAGE_SUBJECTS,
  payload: {
    perPage
  }
})

// Sort By
const sortBySubjects = result => ({
  type: actionEnums.SORT_BY_SUBJECTS,
  payload: {
    result,
  }
})


export const subjectsActions = {
  fetchDataSubjects,
  createItemSubjects,
  updateItemSubjects,
  deleteItemSubjects,
  setCurrentPageSubjects,
  setPerPageSubjects,
  sortBySubjects
}