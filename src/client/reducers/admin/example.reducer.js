import { actionEnums } from '../../action/admin-action-enum'

const initialState = {
  isRequest: false,
  data: [],
  errMessage: null
}

export function ExampleReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.EXAMPLE_REQUEST:
      return {
        ...state,
        isRequest: true,
      }
    //GET
    case actionEnums.GET_EXAMPLE_DATA:
      if (action.payload.isSuccess) {
        return {
          ...state,
          data: action.payload.data,
          isRequest: false,
          errMessage: null
        }
      }
      else
        return {
          ...state,
          isRequest: false,
          errMessage: action.payload.errMessage
        }
    default:
      return state
  }
}