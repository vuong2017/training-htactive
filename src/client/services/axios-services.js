import Axios from 'axios'
// Common
import baseUrl from '../common/baseUrl'

const genarateConfig = (defaultOptions = {}, options = { headers: {} }) => {
  const { headers, ...rest } = options
  const config = { ...defaultOptions, ...rest }
  config.headers = { ...config.headers, ...headers }
  return config
}

export const api = (opts = { fullResponse: false }) => {
  const { fullResponse } = opts
  const axios = Axios.create();
  const defaultOption = {
    baseURL: baseUrl.API_RECRUIT,
    headers: {
      "Content-Type": "application/json",
      'Cache-Control': 'no-cache',
    },
  }
  axios.interceptors.request.use(
    config => {
      // store.dispatch(showLoading('sectionBar'))
      return config
    },
    error => {
      // store.dispatch(hideLoading('sectionBar'))
      // notificationsError("Error when request")
      console.log("[api-error-request]", error)
    }
  )

  axios.interceptors.response.use(
    response => {
      // store.dispatch(hideLoading('sectionBar'))
      if(response.headers.session) {
        /*
        |------------------------------------------------------------------------------------
        | Thủ tục khi role của user hiện tại bị cập nhật ở server
        |------------------------------------------------------------------------------------
        | Khi role của user đang trong phiên làm việc bị thay đổi, 'có thể' có một vài
        | chức năng mà user không còn quyền để sử dụng nữa
        |
        | Để cập nhật lại bảng role mới và giao diện:
        | - Tiến hành xóa và cập nhật lại session dựa theo session mới trả về trong header
        | - Không điều hướng về trang login ở đây vì role mới không ảnh hưởng đến chức 
        |   năng hiện tại mà user mới request lên (dù role bị thay đổi nhưng request của
        |   user đã vào được đến đây thì nghĩa là request này là hợp lệ so với bảng role mới
        |   và đã được thực thi trên server)
        |------------------------------------------------------------------------------------
        */
        // LocalStorage.removeAll()
      }
      if (fullResponse) {
        return response
      } 
      return response.data
    },
    error => {
      // store.dispatch(hideLoading('sectionBar'))
      
      if (error.response) {
        console.log(error.response.data)
        if (error.response.status === 401) {
          /*
          |------------------------------------------------------------------------------------
          | Lỗi không có quyền
          |------------------------------------------------------------------------------------
          | Xảy ra khi user gọi đến một chức năng không có trong bảng role của họ
          | Để tránh user spam các chức năng này
          | - Xóa session hiện tại của họ
          | - Điều hướng về trang login click vào thông báo
          |
          | * Chú ý:
          |   - Việc xóa session sẽ dẫn đến mất session hiện tại ở client
          |   - Nếu người dùng không click vào thông báo, việc check session bị mất và điều 
          |     hướng về trang login đang thực hiện ở chỗ khác (App/index)
          |------------------------------------------------------------------------------------
          */
          // LocalStorage.removeAll()
          // notificationsError(
          //   "You don't have permission or your session is expired. Please login again",
          //   () => window.location.href = baseUrl.URL_LOGIN
          // )
          window.location.href = baseUrl.URL_LOGIN
        }
        if (fullResponse) {
          return error.response
        } 
        return error.response.data
      } else {
        // notificationsError("Network Error")
        console.log("[api-error-response]", error)

        const faceResponse = {
          status: 500,
          data: {
            status: false,
            message: "Network Error"
          }
        }
        if (fullResponse) {
          return faceResponse
        } 
        return faceResponse.data
      }
    }
  )

  return {
    get: (url, options = { headers: {} }) => axios.get(url, { ...genarateConfig(defaultOption, options) }),
    post: (url, data, options = { headers: {} }) => axios.post(url, data, { ...genarateConfig(defaultOption, options) }),
    put: (url, data, options = { headers: {} }) => axios.put(url, data, { ...genarateConfig(defaultOption, options) }),
    delete: (url, options = { headers: {} }) => axios.delete(url, { ...genarateConfig(defaultOption, options) }),
  }
}

export default api
