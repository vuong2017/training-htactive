import { actionEnums } from '../../action/admin-action-enum';

const initialState = {
  isRequest: false,
  data: [],
  dataFind: [],
  errMessage: null
}

export function SectionsReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.GET_SECTiONS_REQUEST:
      state = {
        ...state,
        isRequest: false
      }
      return state;
    /**GET */
    case actionEnums.FETCH_DATA_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          data: action.payload.data.data,
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
        return state;
      }
    /**GET FIND ID */
    case actionEnums.FETCH_ITEM_SECTION_FIND_ID:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          dataFind: action.payload.data.data,
          errMessage: null
        }
        return state;
      } else {
        state = {
          ...state,
          isRequest: false,
          dataFind: [],
          errMessage: action.payload.error
        }
        return state;
      }
    /**POST */
    case actionEnums.CREATE_DATA_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          errMessage: null
        }
        return state;
      } else {
        state = {
          ...state,
          isRequest: false,
          errMessage: action.payload.errMessage
        }
        return state;
      }
    /**DELETE */
    case actionEnums.DELETE_ITEM_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          errMessage: null
        }
        return state;
      } else {
        state = {
          ...state,
          isRequest: false,
          errMessage: action.payload.message
        }
        return state;
      }
    default: return state;
  }
}