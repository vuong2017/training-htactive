import { actionEnums } from '../admin-action-enum';
import {
  getSubjectServies
} from '../../services/admin/subject.services';

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

const fetchDataSubject = () => {
  return async (dispatch) => {
    dispatch(subjectRequest());
    try {
      const result = await getSubjectServies();
      if (result) {
        dispatch(getSubject(true, result, null));
      }
    } catch (e) {
      console.log('e', e);
      dispatch(getSubject(false, null, e.response ? 'Error 1' : 'Error 2'));
    }
  }
}

export const subjectActions = {
  fetchDataSubject
}