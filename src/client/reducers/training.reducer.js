import { actionEnums } from '../action/admin-action-enum'

const initialState = {
  isRequest: false,
  isRequestPost: false,
  isLoading: true,
  isLoadingPost: true,
  status: false,
  statusPost: false,
  data: [],
  content: null,
  messages: null
}

export function TrainingReducer(state = initialState, action) {
  switch (action.type) {
    case 'TRAINING_REQUEST':
      return {
        ...state,
        isRequest: true,
      }
    case 'TRAINING_POSTS_REQUEST':
      return {
        ...state,
        isRequestPost: true,
      }
    //GET CONTENT SHOW SITE TRAINING
    case 'GET_TRAINING_DATA_POSTS':
    if (action.payload.isSuccess) {
      return {
        ...state,
        content: action.payload.data.content,
        isRequestPost: false,
        isLoadingPost: false,
        statusPost:true,
        messages: action.payload.data.messages
      }
    }
    else
      return {
        ...state,
        isRequestPost: false,
        isLoadingPost: false,
        statusPost:false,
        messages: action.payload.data.messages
      }  
    //GET ALL
    case 'GET_TRAINING_DATA':
      if (action.payload.isSuccess) {
        return {
          ...state,
          data: action.payload.data.content,
          isRequest: false,
          isLoading: false,
          status:true,
          messages: action.payload.data.messages
        }
      }
      else
        return {
          ...state,
          isRequest: false,
          isLoading: false,
          status:false,
          messages: action.payload.data.messages
        }
    default:
      return state
  }
}