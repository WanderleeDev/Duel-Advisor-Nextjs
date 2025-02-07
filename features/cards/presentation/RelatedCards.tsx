import { Carousel } from "@/shared/components/Carousel";
import Box from "@/shared/Containers/Box";
import Title from "@/shared/Typography/Title";
import { MonsterType } from "../domain/types/MonsterType.enum";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { CardDataSetResponse } from "../data/models/CardApiResponse";
import { getCards } from "@/actions/card.actions";
import { getQueryClient } from "@/shared/utils/getQueryClient";

interface Props {
  type: MonsterType;
  archetype: string;
}

export default async function RelatedCards({ archetype, type }: Props) {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery<CardDataSetResponse>({
    queryKey: ["related-cards"],
    staleTime: 1000 * 5,
    queryFn: () =>
      getCards({
        archetype,
        num: 10,
        offset: 0,
        sort: "random",
      }),
  });

  return (
    <section className="flex flex-col gap-4">
      <Title
        className="font-semibold mb-3 text-2xl tracking-wider text-gray-100"
        level={2}
      >
        Related Cards
      </Title>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Box bgVariant="tertiary">
          <Carousel type={type} archetype={archetype} />
        </Box>
      </HydrationBoundary>
    </section>
  );
}
