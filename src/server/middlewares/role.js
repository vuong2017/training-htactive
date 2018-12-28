import { postHeaders } from '../services/base-services'

export const roleMiddleware = name => {
  return async (req, res, next) => {
    try {
      const { accesstoken } = req.headers
      const data = { name }
      const url = "http://localhost:8000/api/auth/check-role"
      await postHeaders(url, accesstoken, data)
      return next()
    }
    catch (err) {
      const error = err.response.data
      res.status(error.code || 500).send({
        ...err.response.data
      })
    }
  }
}
