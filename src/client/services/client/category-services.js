import { getTakenData } from "../base-services"
import BaseUrl from "../../common/baseUrl"

const getAllSubjectsServices = async () => {
    try {
      const url = `${BaseUrl.Api}/subjects`
      return await getTakenData(url)
    } catch (e) {
      throw e
    }
  }

export { getAllSubjectsServices }