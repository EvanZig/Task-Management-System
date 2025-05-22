import axios from 'axios'
import { toast } from 'react-toastify'

const useRequest = () => {
  const baseURL = process.env.REACT_APP_SERVER_URL

  const API = (headers = {}) => {
    const instance = axios.create({
      baseURL,
      headers: Object.keys(headers).length ? headers : undefined,
    })

    instance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    )

    instance.interceptors.response.use(
      (response) => {
        const message = response?.data?.message
        if (message) {
          toast.success(message)
        }
        return response
      },
      (error) => {
        const errorData = error?.response?.data
        const errorMessage =
          errorData?.error || errorData?.message || 'Unexpected error'

        toast.error(errorMessage)
        return Promise.reject(error)
      },
    )

    return instance
  }

  return API
}

export default useRequest
