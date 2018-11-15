import { actionEnums } from '../admin-action-enum';
import { getExampleServices } from '../../services/admin/example-services';

const exampleRequest = () => {
  return {
    type: 'EXAMPLE_REQUEST'
  }
}

const getExample = (isSuccess, data, errMessage) => {
  return {
    type: actionEnums.GET_EXAMPLE_DATA,
    payload: {
      isSuccess,
      data,
      errMessage
    }
  }
}

const fetchDataExample = () => {
  return async (dispatch) => {
    dispatch(exampleRequest());
    const result = await getExampleServices();
    if (result) {
      dispatch(getExample(true, result, null))
    } else {
      dispatch(getExample(false, result && result ? 'MESSAGE ERROR 1' : 'MESSAGE ERROR 2'))
    }
  }
}

export const exampleActions = {
  fetchDataExample
}