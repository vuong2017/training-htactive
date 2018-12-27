import { post } from '../services/base-services'

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const errors = {}
    if (!username) errors.username = "Username not empty"
    if (!password) errors.password = "Password not empty"
    if(Object.keys(errors).length > 0) {
      return res.status(403).send({
        status:false,
        errors,
      })
    }
    const data = {
      username,
      password
    }
    const url = "http://localhost:8000/api/auth/login"
    const result = await post(url, data)
    return res.status(200).send({
      ...result.data
    })
    
  } catch (error) {
    const errors = error.response.data || "Network Error" 
    res.status(errors.status || 500).send(errors)
  }
}

export { login }
