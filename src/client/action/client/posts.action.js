import { actionEnums } from '../admin-action-enum';
import { getPostsServices, getPostsIdServices } from '../../services/client/posts-services';

const postsRequest = () => {
  return {
    type: actionEnums.POSTS_REQUEST
  }
}

const getPosts = (isSuccess, data) => {
  return {
    type: actionEnums.GET_POSTS_DATA,
    payload: {
      isSuccess,
      data
    }
  }
}

const getPostsId = (isSuccess, data) => {
  return {
    type: actionEnums.GET_POSTS_DATA_ID,
    payload: {
      isSuccess,
      data
    }
  }
}
// Trang training
const fetchDataPosts = () => async dispatch => {
  dispatch(postsRequest());
  try {
      const result = await getPostsServices();
      if (result) {
        const content = {
          content: result.content[0]
        }
        dispatch(getPostsId(true, content))
      }
  } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(getPostsId(false, error))
  }
};
const fetchDataPostsId = (idSubjects, idPosts) => async dispatch => {
  dispatch(postsRequest());
  try {
      const result = await getPostsIdServices(idSubjects, idPosts);
      if (result) {
        dispatch(getPostsId(true, result))
      }
  } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(getPostsId(false, error))
  }
}; 


export const PostsActions = {
  fetchDataPosts,
  getPostsId,
  fetchDataPostsId
}