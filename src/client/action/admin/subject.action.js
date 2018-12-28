import { actionEnums } from '../admin-action-enum'
import {
  getSubjectsServices,
  addSubjectsServices,
  updateSubjectsServices,
  deleteSubjectsServices,
} from '../../services/admin/subject.services'

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


const createSubjects = (isSuccess, data) => {
  return {
    type: actionEnums.CREATE_DATA_SUBJECTS,
    payload: {
      isSuccess,
      data
    }
  }
}

const updateSubjects = (isSuccess, data) => {
  return {
    type: actionEnums.UPDATE_DATA_SUBJECTS,
    payload: {
      isSuccess,
      data
    }
  }
}

const deleteSubjects = (isSuccess, data) => {
  return {
    type: actionEnums.DELETE_DATA_SUBJECTS,
    payload: {
      isSuccess,
      data
    }
  }
}
// Get Data
const fetchDataSubjects = () => async dispatch => {
  const url = `${baseUrl.API_RECRUIT}/subjects`
  console.log("url", url)
  const result = await api().get(url)
  console.log(result)
  dispatch(getSubjects(result))
}
// Create Data
const createItemSubjects = data => {
  return async (dispatch) => {
    dispatch(subjectsRequest())
    try {
      const result = await addSubjectsServices(data)
      if (result.data) {
        dispatch(createSubjects(true, result.data))
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" }
      dispatch(createSubjects(false, error))
    }
  }
}
// Update Data
const updateItemSubjects = data => {
  return async (dispatch) => {
    dispatch(subjectsRequest())
    try {
      const result = await updateSubjectsServices(data)
      if (result.data) {
        dispatch(updateSubjects(true, result.data))
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" }
      dispatch(updateSubjects(false, error))
    }
  }
}
// Delete Data
const deleteItemSubjects = data => {
  return async (dispatch) => {
    dispatch(subjectsRequest())
    try {
      const result = await deleteSubjectsServices(data)
      if (result.data) {
        dispatch(deleteSubjects(true, result.data))
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" }
      dispatch(deleteSubjects(false, error))
    }
  }
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