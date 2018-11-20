import { actionEnums } from '../admin-action-enum';
import {
  getPostsServices,
  addPostsServices,
  updatePostsServices,
  deletePostsServices,
} from '../../services/admin/post.services';

const postsRequest = () => {
  return {
    type: actionEnums.GET_POSTS_REQUEST
  }
}

const getPosts = (isSuccess, data) => {
  return {
    type: actionEnums.FETCH_DATA_POSTS,
    payload: {
      isSuccess,
      data
    }
  }
}


const createPosts = (isSuccess, data) => {
  return {
    type: actionEnums.CREATE_DATA_POSTS,
    payload: {
      isSuccess,
      data
    }
  }
}

const updatePosts = (isSuccess, data) => {
  return {
    type: actionEnums.UPDATE_DATA_POSTS,
    payload: {
      isSuccess,
      data
    }
  }
}

const deletePosts = (isSuccess, data) => {
  return {
    type: actionEnums.DELETE_DATA_POSTS,
    payload: {
      isSuccess,
      data
    }
  }
}

// Get Data
const fetchDataPosts = idSections => {
  return async (dispatch) => {
    dispatch(postsRequest());
    try {
      const result = await getPostsServices(idSections);
      if (result) {
        dispatch(getPosts(true, result));
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(getPosts(false, error))
    }
  }
}
// Create Data
const createItemPosts = data => {
  return async (dispatch) => {
    // dispatch(postsRequest());
    try {
      const result = await addPostsServices(data);
      if (result.data) {
        dispatch(createPosts(true, result.data));
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(createPosts(false, error))
    }
  }
} 
// Update Data
const updateItemPosts = data => {
  return async (dispatch) => {
    // dispatch(postsRequest());
    try {
      const result = await updatePostsServices(data);
      if (result.data) {
        dispatch(updatePosts(true, result.data));
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(updatePosts(false, error))
    }
  }
} 
// Delete Data
const deleteItemPosts = (data) => {
  return async (dispatch) => {
    // dispatch(postsRequest());
    try {
      const result = await deletePostsServices(data);
      if (result.data) {
        dispatch(deletePosts(true, result.data));
      }
    } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(deletePosts(false, error))
    }
  }
} 

// Set Current Page Pagination
const setCurrentPagePosts = page => ({
  type: actionEnums.SET_ITEM_CURRENT_PAGE_POSTS,
  payload: {
      page
  }
});

// Set numberData Pagination
const setPerPagePosts = perPage => ({
  type: actionEnums.SET_ITEM_PERPAGE_POSTS,
  payload: {
      perPage
  }
})

// Sort By
const sortByPosts = result => ({
  type: actionEnums.SORT_BY_POSTS,
  payload: {
      result,
  }
})


export const postsActions = {
  fetchDataPosts,
  createItemPosts,
  updateItemPosts,
  deleteItemPosts,
  setCurrentPagePosts,
  setPerPagePosts,
  sortByPosts,
}