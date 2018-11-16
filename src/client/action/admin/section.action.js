import { actionEnums } from '../admin-action-enum';
import {
  getSectionsServices,
  postSectionServices,
  deleteSectionsServices,
  getfindIDServies
} from '../../services/admin/section.services';

const sectionRequest = () => {
  return {
    type: actionEnums.GET_SECTiONS_REQUEST
  }
}

const getSections = (isSuccess, data, error) => {
  return {
    type: actionEnums.FETCH_DATA_SECTIONS,
    payload: {
      isSuccess,
      data,
      error
    }
  }
}

const getSectionsFindId = (isSuccess, data, error) => {
  return {
    type: actionEnums.FETCH_ITEM_SECTION_FIND_ID,
    payload: {
      isSuccess,
      data,
      error
    }
  }
}

const createSection = (isSuccess, dataCreate) => {
  return {
    type: actionEnums.CREATE_DATA_SECTIONS,
    payload: {
      isSuccess,
      dataCreate
    }
  }
}

const deleteSection = (isSuccess, dataDelete, message) => {
  return {
    type: actionEnums.DELETE_ITEM_SECTIONS,
    payload: {
      isSuccess,
      dataDelete,
      message
    }
  }
}

const fetchDataSection = () => {
  return async (dispatch) => {
    dispatch(sectionRequest());
    try {
      const result = await getSectionsServices();
      if (result) {
        dispatch(getSections(true, result, null));
      }
    } catch (e) {
      dispatch(getSections(false, null, e.response ? 'Error 1' : 'Error 2'));
    }
  }
}

const fetchDataFindID = (sections_id) => {
  return async (dispatch) => {
    dispatch(sectionRequest());
    try {
      const result = await getfindIDServies(sections_id);
      if (result) {
        dispatch(getSectionsFindId(true, result, null));
      }
    } catch (e) {
      dispatch(getSectionsFindId(false, null, e.response ? 'Error 1' : 'Error 2'));
    }
  }
}

const createItemSection = (data) => async (dispatch) => {
  try {
    const result = await postSectionServices(data);
    if (result) {
      dispatch(createSection(true, null));
    }
  } catch (e) {
    dispatch(createSection(false, null, e.response ? 'Err 1' : 'Err 2'));
  }
}

const deleteItemSection = (data) => async (dispatch) => {
  try {
    const result = await deleteSectionsServices(data);
    if (result) {
      dispatch(deleteSection(true, result));
    }
  } catch (e) {
    dispatch(deleteSection(false, null, e.response ? 'ERR 1' : 'ERR 2'));
  }
}

export const sectionsActions = {
  fetchDataSection,
  createItemSection,
  deleteItemSection,
  fetchDataFindID
}