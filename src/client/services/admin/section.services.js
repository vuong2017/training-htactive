import { getTakenData, postTakenData } from '../base-services'
import baseUrl from '../../common/baseUrl'

const getSectionsServices = async () => {
  try {
    const url = `${baseUrl.Api}/getSections`
    return await getTakenData(url)
  } catch (e) {
    throw e
  }
}

const postSectionServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/insertItemSections`
    return await postTakenData(url, { ...data })
  } catch (e) {
    throw e
  }
}

const deleteSectionsServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/deleteItems`
    return await postTakenData(url, { ...data })
  } catch (e) {
    throw e
  }
}

const getfindIDServies = async (sections_id) => {
  try {
    const url = `${baseUrl.Api}/getFindById`
    return await getTakenData(`${url}?sections_id=${sections_id}`)
  } catch (e) {
    throw e
  }
}

const updateSectionServices = async (data) => {
  try {
    const url = `${baseUrl.Api}/updateItemSections`
    return await postTakenData(url, data)
  } catch (e) {

  }
}

/**SUBJECT */
const getSubjectFindIdServies = async (subjects_id) => {
  try {
    const url = `${baseUrl.Api}/subjects`
    return await getTakenData(`${url}/${subjects_id}`)
  } catch (e) {
    throw e
  }
}

const getSubjectServies = async () => {
  try {
    const url = `${baseUrl.Api}/subjects`
    return await getTakenData(`${url}`)
  } catch (e) {
    throw e
  }
}

export {
  getSectionsServices,
  postSectionServices,
  deleteSectionsServices,
  getfindIDServies,
  updateSectionServices,
  /**SUBJECT */
  getSubjectFindIdServies,
  getSubjectServies
}