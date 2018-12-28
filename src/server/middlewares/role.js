import { postHeaders } from '../services/base-services'

export const roleMiddleware = name => {
  return async (req, res, next) => {
    try {
      const { accesstoken } = req.headers
      const data = { name }
      const url = "http://localhost:8000/api/auth/check-role"
      const result = await postHeaders(url, accesstoken, data)
      if(result.session) {
        res.set({
          session: JSON.stringify({
            positionNumber: result.session.positionNumber,
            scopes: result.session.scopes
          })
        })
      }
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
