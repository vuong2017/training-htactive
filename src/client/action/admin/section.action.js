import { actionEnums } from '../admin-action-enum';
import {
  getSectionsServices,
  postSectionServices,
  deleteSectionsServices,
  getfindIDServies,
  updateSectionServices,
  /**SUBJECT */
  getSubjectFindIdServies,
  getSubjectServies
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

const deleteSection = (isSuccess, id, message) => {
  return {
    type: actionEnums.DELETE_ITEM_SECTIONS,
    payload: {
      isSuccess,
      id,
      message
    }
  }
}

const updateSection = (isSuccess, dataUpdate, message) => {
  return {
    type: actionEnums.UPDATE_ITEM_SECTIONS,
    payload: {
      isSuccess,
      dataUpdate,
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
      dispatch(createSection(true, result.data.data, null));
    }
  } catch (e) {
    dispatch(createSection(false, null, e.response ? 'Err 1' : 'Err 2'));
  }
}

const deleteItemSection = (data) => async (dispatch) => {
  try {
    const result = await deleteSectionsServices(data);
    if (result) {
      dispatch(deleteSection(true, result.data.data._id));
    }
  } catch (e) {
    dispatch(deleteSection(false, null, e.response ? 'ERR 1' : 'ERR 2'));
  }
}

const updateItemsSection = (data) => async (dispatch, reloading) => {
  try {
    const result = await updateSectionServices(data);
    if (result) {
      dispatch(updateSection(true, null));
      dispatch(fetchDataSection(reloading().SectionsReducer));
      dispatch(fetchDataSubject(reloading().SectionsReducer));
    }
  } catch (e) {
    dispatch(updateSection(false, null, e.response ? 'Err 1' : 'Err 2'));
  }
}

/**SUBJECT */
const subjectRequest = () => {
  return {
    type: actionEnums.SUBJECTS_REQUEST
  }
}

const getSubject = (isSuccess, data, error) => {
  return {
    type: actionEnums.GET_SUBJECTS_DATA,
    payload: {
      isSuccess,
      data,
      error
    }
  }
}

const getSubjectFindId = (isSuccess, data, error) => {
  return {
    type: actionEnums.GET_SUBJECTS_DATA_FIND_ID,
    payload: {
      isSuccess,
      data,
      error
    }
  }
}

const fetchDataFindIdSubject = (subjects_id) => {
  return async (dispatch) => {
    dispatch(subjectRequest());
    try {
      const result = await getSubjectFindIdServies(subjects_id);
      if (result) {
        dispatch(getSubjectFindId(true, result, null));
      }
    } catch (e) {
      dispatch(getSubjectFindId(false, null, e.response ? 'Error 1' : 'Error 2'));
    }
  }
}

const fetchDataSubject = () => {
  return async (dispatch) => {
    dispatch(subjectRequest());
    try {
      const result = await getSubjectServies();
      if (result) {
        dispatch(getSubject(true, result, null));
      }
    } catch (e) {
      dispatch(getSubject(false, null, e.response ? 'Error 1' : 'Error 2'));
    }
  }
}

export const sectionsActions = {
  fetchDataSection,
  createItemSection,
  deleteItemSection,
  fetchDataFindID,
  updateItemsSection,
  /**SUBJECT */
  fetchDataFindIdSubject,
  fetchDataSubject
}