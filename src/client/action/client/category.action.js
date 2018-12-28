import { actionEnums } from "../admin-action-enum"

import baseUrl from '../../common/baseUrl'
import api from '../../services/axios-services'

const getCategory = data => ({
  type: actionEnums.GET_CATEGORY_DATA,
  payload: data
})

const fetchDataAllCategory = () => async dispatch => {
  const url = `${baseUrl.Api}/subjects`
  const result = await api().get(url)
  dispatch(getCategory(result))
}

export const categoryActions = {
  fetchDataAllCategory
}
