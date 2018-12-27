import { postHeaders } from '../services/base-services'

export const roleMiddleware = name => {
  return async (req, res, next) => {
    try {
      const { accesstoken } = req.headers
      console.log(accesstoken)
      const data = { name }
      console.log(data)
      const url = "http://localhost:8000/api/auth/check-role"
      await postHeaders(url, accesstoken, data)
      return next()
    }
    catch (error) {
      res.send({
        ...error.response.data
      })
    }
  }
}
