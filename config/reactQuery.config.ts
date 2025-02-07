import { QueryClientConfig } from "@tanstack/react-query";

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      gcTime: 1000 * 60 * 60,
      retry: 3,
      retryDelay: 1000,
      refetchOnReconnect: true,
    },
  },
};
