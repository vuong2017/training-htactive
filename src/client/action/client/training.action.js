import { actionEnums } from '../admin-action-enum'
import { getTrainingServices, getTNPostIdServices } from '../../services/client/training-services'

const trainingRequest = () => {
  return {
    type: actionEnums.TRAINING_REQUEST
  }
}

const trainingPostsRequest = () => {
  return {
    type: actionEnums.TRAINING_POSTS_REQUEST
  }
}

const getTraining = (isSuccess, data) => {
  return {
    type: actionEnums.GET_TRAINING_DATA,
    payload: {
      isSuccess,
      data
    }
  }
}

const getTrainingPost = (isSuccess, data) => {
  return {
    type: actionEnums.GET_TRAINING_DATA_POSTS,
    payload: {
      isSuccess,
      data
    }
  }
}
// GET POST
const fetchDataTNPostId = (idSubjects, idPosts) => async dispatch => {
  dispatch(trainingPostsRequest())
  try {
      const result = await getTNPostIdServices(idSubjects, idPosts)
      if (result) {
        dispatch(getTrainingPost(true, result))
      }
  } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" }
      dispatch(getTrainingPost(false, error))
  }
} 
// GET ALL
const fetchDataTN = (id) => async dispatch => {
  dispatch(trainingRequest())
  try {
      const result = await getTrainingServices(id)
      if (result) {
        dispatch(getTraining(true, result))
      }
  } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" }
      dispatch(getTraining(false, error))
  }
}

export const TrainingActions = {
  getTrainingPost,
  fetchDataTN,
  fetchDataTNPostId
}