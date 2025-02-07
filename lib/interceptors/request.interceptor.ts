import { AxiosInstance } from "axios";

export function requestInterceptor(axiosInstance: AxiosInstance) {
  return axiosInstance.interceptors.request.use(
    (config) => {
      console.log(
        `[Axios Request] ${config.method?.toUpperCase()} ${config.url}`,

        config
      );
      return config;
    },
    (error) => {
      console.error("Axios Request Error:", error);
      return Promise.reject(error);
    }
  );
}
