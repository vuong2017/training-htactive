import { getTakenData } from "../base-services";
import BaseUrl from "../../common/baseUrl";

const getPostsServices = async () => {
  try {
    const url = `${BaseUrl.Api}/posts`;
    return await getTakenData(url);
  } catch (e) {
    throw e;
  }
};

const getPostsIdServices = async (idSubjects, idPosts) => {
  try {
    const url = `${BaseUrl.Api}/post/${idSubjects}/${idPosts}`;
    return await getTakenData(url);
  } catch (e) {
    throw e;
  }
};

export { getPostsServices, getPostsIdServices };
