import { getTakenData } from "../base-services";
import BaseUrl from "../../common/baseUrl";

const getSubjectsServices = async (id) => {
  try {
    const url = `${BaseUrl.Api}/subjects/${id}`;
    return await getTakenData(url);
  } catch (e) {
    throw e;
  }
};

export { getSubjectsServices };
