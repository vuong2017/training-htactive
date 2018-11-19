import { getTakenData, postTakenData } from '../base-services';
import baseUrl from '../../common/baseUrl';

const getPostsServices = async idSections => {
  try {
    const url = `${baseUrl.Api}/posts/${idSections}`;
    return await getTakenData(url)
  } catch (e) {
    throw e;
  }
}

const addPostsServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/posts`;
    return await postTakenData(url, data)
  } catch (e) {
    throw e;
  }
} 

const updatePostsServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/posts/update`;
    return await postTakenData(url, data)
  } catch (e) {
    throw e;
  }
} 

const deletePostsServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/posts/delete`;
    return await postTakenData(url, data)
  } catch (e) {
    throw e;
  }
}

export {
  getPostsServices,
  addPostsServices,
  updatePostsServices,
  deletePostsServices
}