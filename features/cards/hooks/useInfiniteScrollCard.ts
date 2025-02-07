import { axiosInstance } from "@/lib/axiosInstance";
import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { CardDataSetResponse } from "../data/models/CardApiResponse";
import { useEffect } from "react";
import { Card } from "../domain/models/Card.model";
import { useIntersectionObserver } from "@uidotdev/usehooks";

interface InfiniteScrollCard {
  query: UseInfiniteQueryResult<
    InfiniteData<CardDataSetResponse, unknown>,
    Error
  >;
  currentItems: number | null;
  totalItems: number | null;
  cards: Card[];
  ref: (element: HTMLDivElement) => void;
}

export default function useInfiniteScrollCard(
  cardPerView: number
): InfiniteScrollCard {
  const query = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: async ({ pageParam = 0 }): Promise<CardDataSetResponse> => {
      const res = await axiosInstance<CardDataSetResponse>(
        `?num=${cardPerView}&offset=${pageParam}`
      );

      return res.data;
    },
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.meta.total_pages,
    getNextPageParam: (lastPage) => lastPage.meta.next_page_offset,
  });
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
    rootMargin: "400px",
  });

  useEffect(() => {
    if (entry?.isIntersecting && !query.isFetching) {
      query.fetchNextPage();
    }
  }, [entry]);

  return {
    query,
    ref,
    currentItems:
      query.data?.pages
        .flatMap((page) => page.meta)
        .reduce((a, b) => a + b.current_rows, 0) || null,
    totalItems: query.data?.pages.at(-1)?.meta.total_rows || null,
    cards: query.data?.pages.flatMap((page) => page.data) || [],
  };
}
