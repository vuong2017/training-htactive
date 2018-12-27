import axios from 'axios'

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data)
    return response
  }
  catch (e) {
    throw e
  }
}

export const postHeaders = async (url, accesstoken, data) => {
  try {
    const result = axios({
      method: 'post',
      url,
      headers: {
        accesstoken
      },
      data
    })
      .then(res => {
        return res.data
      })
    return result
  } catch (e) {
    throw e
  }
}
