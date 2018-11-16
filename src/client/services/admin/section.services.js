import { getTakenData, postTakenData } from '../base-services';
import baseUrl from '../../common/baseUrl';

const getSectionsServices = async () => {
  try {
    const url = `${baseUrl.Api}/getSections`;
    return await getTakenData(url)
  } catch (e) {
    throw e;
  }
}

const postSectionServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/insertItemSections`;
    return await postTakenData(url, { ...data })
  } catch (e) {
    throw e;
  }
}

const deleteSectionsServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/deleteItems`;
    return await postTakenData(url, { ...data })
  } catch (e) {
    throw e;
  }
}

const getfindIDServies = async (sections_id='5bea7c6ef7560822b07f2d37') => {
  try {
    const url = `${baseUrl.Api}/getFindById`;
    return await getTakenData(`${url}?sections_id=${sections_id}`)
  } catch (e) {
    throw e;
  }
}

export {
  getSectionsServices,
  postSectionServices,
  deleteSectionsServices,
  getfindIDServies
}