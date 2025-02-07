import { QueryClient } from "@tanstack/react-query";
import { fetchData } from "./fetchData";
import { CardDataSetResponse } from "@/features/cards/data/models/CardApiResponse";

const queryClient = new QueryClient();

export const prefetchServerQuery = (url: string, queryKey: string) => {
  queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: async () => await fetchData<CardDataSetResponse>(url),
  });

  return queryClient;
};
