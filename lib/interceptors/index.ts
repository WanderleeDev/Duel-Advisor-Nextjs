import { axiosInstance } from "../axiosInstance";
import { requestInterceptor } from "./request.interceptor";

export const setupAxiosInterceptors = () => {
  requestInterceptor(axiosInstance);
};
