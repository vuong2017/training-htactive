import { actionEnums } from "../../action/admin-action-enum"

const initialState = {
  data: [],
  status: false,
  messages: null,
  perPage: 5,
  currentPage: 0,
  sortBy: {
    text: "",
    order: false
  }
}

export function SubjectsReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.GET_SUBJECTS_REQUEST:
      state = {
        ...state,
        isRequest: false
      }
      return state

    /**GET */
    case actionEnums.FETCH_DATA_SUBJECTS:
      {
        const { status, content, message,  } = action.payload
        return {
          ...state,
          status,
          data: content || [],
          message
        }
      }

    /**Add */
    case actionEnums.CREATE_DATA_SUBJECTS:
        {
          const { status, content, message } = action.payload
          return {
            ...state,
            status,
            data: [...state.data, content],
            message,
            currentPage:0,
            sortBy: {
              text: '',
              order:false,
            }
          }
        }
    /**Update */
    case actionEnums.UPDATE_DATA_SUBJECTS:
      {
        const { status, content, message } = action.payload
        const update = state.data.map((e, i) => {
          if (e._id === content._id) {
            return { ...content }
          }
          return e
        })
        return {
          ...state,
          status,
          data: update,
          message,
          sortBy: {
            text: '',
            order:false,
          }
        }
      }

    /**Delete */
    case actionEnums.DELETE_DATA_SUBJECTS:
      {
        const { status, content, message } = action.payload
        return {
          ...state,
          data: state.data.filter(
            e => e._id !== content._id
          ),
          status,
          message
        }
      }

    // SET ITEM CURRENT PAGE
    case actionEnums.SET_ITEM_CURRENT_PAGE_SUBJECTS:
      {
        const { page } = action.payload
        return {
          ...state,
          currentPage: page
        }
      }

    // SET NUMBER DATA
    case actionEnums.SET_ITEM_PERPAGE_SUBJECTS:
      {
        const { perPage } = action.payload
        return {
          ...state,
          perPage,
          currentPage: 0
        }
      }

    // SORT BY
    case actionEnums.SORT_BY_SUBJECTS:
      {
        const { items, sortName, order } = action.payload
        return {
          ...state,
          items,
          sortBy: {
            text: sortName,
            order
          }
        }
      }
    default:
      return state
  }
}
