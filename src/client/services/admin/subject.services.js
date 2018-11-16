import {
  getTakenData,
  postTakenData
} from '../base-services';
import baseUrl from '../../common/baseUrl';

const getSubjectServies = async () => {
  try {
    const url = `${baseUrl.Api}/subjects`;
    return await getTakenData(url)
  } catch (e) {
    throw e;
  }
}

export {
  getSubjectServies
}