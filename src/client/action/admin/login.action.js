import api from '../../services/axios-services'

const loginRequest = data => async () => {
  const url = "/auth/login"
  const result = await api().post(url, data)
  console.log(result)
}

export const loginActions = {
  loginRequest,
}