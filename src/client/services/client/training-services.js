import { getTakenData } from "../base-services";
import BaseUrl from "../../common/baseUrl";

const getTrainingServices = async (id) => {
  try {
    const url = `${BaseUrl.Api}/subjects/${id}`;
    return await getTakenData(url);
  } catch (e) {
    throw e;
  }
};

const getTNPostIdServices = async (idSubjects, idPosts) => {
  try {
    const url = `${BaseUrl.Api}/post/${idSubjects}/${idPosts}`;
    return await getTakenData(url);
  } catch (e) {
    throw e;
  }
};

export { getTrainingServices, getTNPostIdServices };
