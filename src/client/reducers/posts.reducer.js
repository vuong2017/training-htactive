import { actionEnums } from '../action/admin-action-enum';

const initialState = {
  isRequest: false,
  isLoading: true,
  status: false,
  data: [],
  content: null,
  messages: null
}

export function Posts(state = initialState, action) {
  switch (action.type) {
    case actionEnums.POSTS_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    //GET CONTENT SHOW SITE TRAINING
    case actionEnums.GET_POSTS_DATA_ID:
    if (action.payload.isSuccess) {
      return {
        ...state,
        content: action.payload.data.content,
        isRequest: false,
        isLoading: false,
        status:true,
        messages: action.payload.data.messages
      };
    }
    else
      return {
        ...state,
        isRequest: false,
        isLoading: false,
        status:false,
        messages: action.payload.data.messages
      };  
    default:
      return state
  }
}