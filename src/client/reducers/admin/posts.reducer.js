import { actionEnums } from "../../action/admin-action-enum";

const initialState = {
  isRequest: false,
  data: {},
  status: false,
  messages: null,
  perPage: 5,
  currentPage: 0,
  sortBy: {
    text: "",
    order: false
  }
};

export function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case actionEnums.GET_POSTS_REQUEST:
      state = {
        ...state,
        isRequest: true
      };
      return state;

    /**GET */
    case actionEnums.FETCH_DATA_POSTS:
      if (action.payload.isSuccess) {
        state = {
          ...state,
          isRequest: false,
          status: true,
          data: action.payload.data.content,
          messages: action.payload.data.messages
        };
        return state;
      } else {
        state = {
          ...state,
          isRequest: false,
          status: false,
          messages: action.payload.data.messages
        };
        return state;
      }

    /**Add */
    case actionEnums.CREATE_DATA_POSTS:
      if (action.payload.isSuccess) {
        return {
          ...state,
          isRequest: false,
          data: {
            posts: [...state.data.posts, action.payload.data.content]
          },
          status: true,
          messages: action.payload.data.messages,
          currentPage:0,
          sortBy: {
            text: '',
            order:false,
          }
        };
      } else {
        return {
          ...state,
          isRequest: false,
          status: false,
          messages: action.payload.data.messages
        };
      }

    /**Update */
    case actionEnums.UPDATE_DATA_POSTS:
      if (action.payload.isSuccess) {
        const update = state.data.posts.map((e, i) => {
          if (e._id === action.payload.data.content._id) {
            return { ...action.payload.data.content };
          }
          return e;
        });
        return {
          ...state,
          isRequest: false,
          data: { ...state.data, posts: update },
          status: true,
          messages: action.payload.data.messages,
          sortBy: {
            text: '',
            order:false,
          }
        };
      } else {
        return {
          ...state,
          isRequest: false,
          status: false,
          messages: action.payload.data.messages
        };
      }

    /**Delete */
    case actionEnums.DELETE_DATA_POSTS:
      if (action.payload.isSuccess) {
        return {
          ...state,
          isRequest: true,
          data: {
            ...state.data,
            posts: state.data.posts.filter(
              e => e._id !== action.payload.data.content._id
            )
          },
          status: true,
          messages: action.payload.data.messages
        };
      } else {
        return {
          ...state,
          isRequest: false,
          status: false,
          messages: action.payload.data.messages
        };
      }

    // SET ITEM CURRENT PAGE
    case actionEnums.SET_ITEM_CURRENT_PAGE_POSTS:
      return {
        ...state,
        currentPage: action.payload.page
      };

    // SET NUMBER DATA
    case actionEnums.SET_ITEM_PERPAGE_POSTS:
      return {
        ...state,
        perPage: action.payload.perPage,
        currentPage: 0
      };

    // SORT BY
    case actionEnums.SORT_BY_POSTS:
      return {
        ...state,
        items: action.payload.result.items,
        sortBy: {
          text: action.payload.result.sortName,
          order: action.payload.result.order
        }
      };
    default:
      return state;
  }
}
