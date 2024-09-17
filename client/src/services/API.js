import axios from 'axios'
// import headers from context which will be the jwt token.

import { toast } from 'react-toastify' // import my custom toast component

const useRequest = () => {
  const baseURL = process.env.REACT_APP_SERVER_URL

  const API = (headers) => {
    const options = {
      baseURL: baseURL,

      headers: headers ? headers : undefined,
    }

    const instance = axios.create(options)

    instance.interceptors.request.use(
      (config) => {
        return config
      },

      (error) => Promise.reject(error),
    )

    instance.interceptors.response.use(
      (res) => {
        if (res?.data?.message) {
          toast.success(res.data.message)
        }

        return res
      },

      async (err) => {
        const errorMessage = err?.response?.data?.error
          ? err?.response?.data?.error
          : err?.response?.data?.message
            ? err?.response?.data?.message
            : 'Unexpected error'

        toast.error(errorMessage)

        return Promise.reject(err)
      },
    )

    return instance
  }

  return API
}

export default useRequest
