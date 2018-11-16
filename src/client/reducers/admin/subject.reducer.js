import { actionEnums } from '../../action/admin-action-enum';

const initialState = {
  isRequest: false,
  data: [],
  errMessage: null
}

export function SubjectReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.SUBJECTS_REQUEST:
      state = {
        ...state,
        isRequest: false,
      }
      return state;
    /**GET */
    case actionEnums.GET_SUBJECTS_DATA:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          data: action.payload.data.content,
          errMessage: null
        }
        return state;
      } else {
        state = {
          ...state,
          isRequest: false,
          data: [],
          errMessage: action.payload.error
        }
      }
    default:
      return state;
  }
}