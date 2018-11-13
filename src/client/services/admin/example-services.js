import { getTakenData } from '../base-services';

const getExampleServices = async () => {
  try {
    const url = 'http://www.json-generator.com/api/json/get/cukRRZGFhK?indent=2';
    return await getTakenData (url)
  } catch (e) {
    throw e;
  }
}

export  {
  getExampleServices
};
