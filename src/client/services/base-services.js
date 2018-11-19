import axios from "axios";
import { getCurrentUserToken } from "./local-storage-service";

const postTakenData = async (url, data) => {
  try {
    // const token = await getCurrentUserToken();
    const result = await axios({
      method: "post",
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data
    }).then(res => {
      return res;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const getTakenData = async url => {
  try {
    // const token = await getCurrentUserToken();
    const result = await axios({
      method: "get",
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      return res.data;
    });
    return result;
  } catch (e) {
    throw e;
  }
};

const postFormData = async (url, data) => {
  try {
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    const result = await axios({
      method: "post",
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: formData
    }).then(res => {
      return res;
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export { postTakenData, postFormData, getTakenData };
