import { Metadata } from "next";
import { CardDataSetResponse } from "@/features/cards/data/models/CardApiResponse";
import CardBaseInfo from "../../../../features/cards/presentation/CardBaseInfo";
import CardComplementaryInfo from "@/features/cards/presentation/CardComplementaryInfo";
import CardSetInfo from "@/features/cards/presentation/CardSetInfo";
import CardPrices from "@/features/cards/presentation/CardPrices";
import { fetchData } from "@/lib/fetchData";
import RelatedCards from "@/features/cards/presentation/RelatedCards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cardId: string }>;
}): Promise<Metadata> {
  const { cardId } = await params;
  const data = (await fetchData<CardDataSetResponse>(`?id=${cardId}`)).data[0];

  return {
    title: `Card | ${data.name}` || "unknown",
    description: `Viewing data for ${data.name || "unknown"}`,
    openGraph: {
      title: data.name,
      description: data.desc,
      images: [data.card_images[0].image_url_cropped],
    },
  };
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ cardId: string }>;
}) {
  const { cardId } = await params;
  const {
    desc,
    card_images,
    name,
    card_sets,
    banlist_info,
    card_prices,
    linkmarkers,
    typeline,
    ygoprodeck_url,
    id,
    ...rest
  } = (await fetchData<CardDataSetResponse>(`?id=${cardId}`)).data[0];

  return (
    <div className="flex flex-col gap-20 md:gap-32">
      <CardBaseInfo
        description={desc}
        image={card_images[0].image_url}
        title={name}
        typeLine={typeline}
        externalLink={ygoprodeck_url}
      />
      <CardComplementaryInfo data={rest} />
      <CardSetInfo data={card_sets} />
      <CardPrices data={card_prices} />
      <RelatedCards archetype={rest.archetype} type={rest.type} />
    </div>
  );
}
