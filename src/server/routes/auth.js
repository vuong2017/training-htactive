import {
  login
} from '../controllers/auth'

export default (router) => {
  router.post('/auth/login', login)
}
