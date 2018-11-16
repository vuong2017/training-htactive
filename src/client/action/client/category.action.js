import { actionEnums } from "../admin-action-enum";
import { getAllSubjectsServices } from "../../services/client/category-services";

const categoryRequest = () => {
  return {
    type: actionEnums.CATEGORY_REQUEST
  };
};

const getCategory = (isSuccess, data) => {
  return {
    type: actionEnums.GET_CATEGORY_DATA,
    payload: {
      isSuccess,
      data
    }
  };
};

const fetchDataAllCategory = () => async dispatch => {
  dispatch(categoryRequest());
  try {
    const result = await getAllSubjectsServices();
    if (result) {
      dispatch(getCategory(true, result));
    }
  } catch (e) {
    const error = e.response ? e.response.data : { message: "Network Error" };
    dispatch(getCategory(false, error));
  }
};

export const categoryActions = {
  fetchDataAllCategory
};
