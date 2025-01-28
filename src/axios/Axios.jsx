import axios from "axios";
import { Constant } from "../utils/Constants";

const instance = axios.create({
  baseURL: `https://${Constant.IP}/certificate/`,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const Axios = async (object) => {
  return await instance({
    url: `${object.apiName}`,
    method: `${object.method}`,
    data: object.dataObject,
    withCredentials: true,
    headers: {
      "Content-Type": `${object.contentType}`,
    },
    params: object.param,
  });
};

export default Axios;
