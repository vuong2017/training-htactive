import { actionEnums } from '../admin-action-enum';
import { getSubjectsServices } from '../../services/client/subjects-services';

const subjectsRequest = () => {
  return {
    type: actionEnums.SUBJECTS_REQUEST
  }
}

const getSubjects = (isSuccess, data) => {
  return {
    type: actionEnums.GET_SUBJECTS_DATA,
    payload: {
      isSuccess,
      data
    }
  }
}



const fetchDataSubjects = (id) => async dispatch => {
  dispatch(subjectsRequest());
  try {
      const result = await getSubjectsServices(id);
      if (result) {
        dispatch(getSubjects(true, result))
      }
  } catch (e) {
      const error = e.response ? e.response.data : { message: "Network Error" };
      dispatch(getSubjects(false, error))
  }
};



export const SubjectActions = {
  fetchDataSubjects
}