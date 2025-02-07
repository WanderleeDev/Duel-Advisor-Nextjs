import axios, { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

interface ErrorResponse {
  message: string;
  code: number | null;
}

export async function fetchData<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const res = await axiosInstance.get<T>(url, config);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error ${error.response?.status}: ${error.message}`);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unexpected error occurred");
  }
}
