import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { Constant } from "../utils/Constants";

const instance = axios.create({
  baseURL: Constant.baseURL,
  withCredentials: true
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = useAuthStore.getState().refreshToken
        const response = await axios.post('/api/token/refresh/', {
          refresh: refreshToken
        })
        const { access } = response.data
        useAuthStore.getState().setTokens(access, refreshToken)
        originalRequest.headers.Authorization = `Bearer ${access}`
        return instance(originalRequest)
      } catch (refreshError) {
        useAuthStore.getState().logout()
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

const Axios = async (object) => {
  return await instance({
    url: `${object.apiName}`,
    method: `${object.method}`,
    data: object.dataObject,
    withCredentials: true,
    headers: {
      "Content-Type": `${object.contentType}`,
    },
    params: object.params,
  });
};

export default Axios;
