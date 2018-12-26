import { actionEnums } from '../../action/admin-action-enum'

const initialState = {
  isRequest: false,
  status:false,
  data: [],
  dataFind: [],
  errMessage: null,
  messages: null,
  dataAll: [],
  sectionData: [],
  dataFindid: [],
}

export function SectionsReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.GET_SECTiONS_REQUEST:
      state = {
        ...state,
        isRequest: true
      }
      return state
    /**GET */
    case actionEnums.FETCH_DATA_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          data: action.payload.data.data,
          status:true,
          errMessage: null
        }
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          data: [],
          status:false,
          errMessage: action.payload.error
        }
        return state
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
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          dataFind: [],
          errMessage: action.payload.error
        }
        return state
      }
    /**POST */
    case actionEnums.CREATE_DATA_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          status: true,
          sectionData: [...state.sectionData, action.payload.data.content],
          messages: action.payload.data.messages
        }
        return state
      } else {
        state = {
          ...state,
          status: false,
          isRequest: false,
          messages: action.payload.data.messages
        }
        return state
      }
    /**UPDATE */
    case actionEnums.UPDATE_ITEM_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          errMessage: null
        }
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          errMessage: action.payload.error
        }
        return state
      }
    /**DELETE */
    case actionEnums.DELETE_ITEM_SECTIONS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          sectionData: state.sectionData.filter(e => e._id !== action.payload.id),
          errMessage: null
        }
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          errMessage: action.payload.message
        }
        return state
      }
    /**SUBJECT */
    case actionEnums.SUBJECTS_REQUEST:
      state = {
        ...state,
        isRequest: false,
      }
      return state
    /**GET_SUBJECTS_DATA_FIND_ID */
    case actionEnums.GET_SUBJECTS_DATA_FIND_ID:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          dataFindid: action.payload.data.content,
          sectionData: action.payload.data.content.sections,
          errMessage: null
        }
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          dataFindid: [],
          sectionData: [],
          errMessage: action.payload.error
        }
      }
    /**GET_SUBJECTS_DATA */
    case actionEnums.GET_SUBJECTS_DATA:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          dataAll: action.payload.data.content,
          errMessage: null
        }
        return state
      } else {
        state = {
          ...state,
          isRequest: false,
          dataAll: [],
          errMessage: action.payload.error
        }
      }
    default: return state
  }
}