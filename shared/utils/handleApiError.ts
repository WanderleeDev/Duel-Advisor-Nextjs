import axios from "axios";

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    throw new Error(`Error ${error.response?.status}: ${error.message}`);
  }

  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error("An unexpected error occurred");
}
