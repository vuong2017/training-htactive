import { getTakenData, postTakenData, postFormData } from '../base-services';
import baseUrl from '../../common/baseUrl';

const getSubjectsServices = async () => {
  try {
    const url = `${baseUrl.Api}/subjects`;
    return await getTakenData(url)
  } catch (e) {
    throw e;
  }
}

const addSubjectsServices = async data => {
  try {
    const url = `${baseUrl.Api}/subjects`;
    return await postFormData(url, data)
  } catch (e) {
    throw e;
  }
} 

const updateSubjectsServices = async data => {
  try {
    const url = `${baseUrl.Api}/subjects/update`;
    return await postFormData(url, data)
  } catch (e) {
    throw e;
  }
} 

const deleteSubjectsServices = async data => {
  try {
    const url = `${baseUrl.Api}/subjects/delete`;
    return await postTakenData(url, data)
  } catch (e) {
    throw e;
  }
}

export {
  getSubjectsServices,
  addSubjectsServices,
  updateSubjectsServices,
  deleteSubjectsServices
}