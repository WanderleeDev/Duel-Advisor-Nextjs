"use client";

import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { CardDataSetResponse } from "@/features/cards/data/models/CardApiResponse";
import { MonsterType } from "@/features/cards/domain/types/MonsterType.enum";
import { getCards } from "@/actions/card.actions";
import placeholder from "public/placeholder-card.webp";
import SpinnerCard from "./SpinnerCard";
import AlertMessage from "./AlertMessage";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";

interface Props {
  type: MonsterType;
  archetype: string;
}

export function Carousel({ type, archetype }: Props) {
  const { data, isLoading, isError, refetch, error } =
    useQuery<CardDataSetResponse>({
      queryKey: ["related-cards"],
      staleTime: 1000 * 5,
      queryFn: () =>
        getCards({ archetype, num: 10, offset: 0, sort: "random" }),
    });
  const [isCropImage, setIsCropImage] = useState(false);
  const toggleCropImage = () => setIsCropImage((prev) => !prev);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, watchDrag: true },
    [AutoPlay({ delay: 3000 })]
  );

  if (isLoading) return <SpinnerCard />;

  if (isError)
    return (
      <AlertMessage message={error.message} variant="destructive">
        <Button
          className="w-full mt-2 hover:opacity-90"
          onClick={() => refetch()}
        >
          Retry
        </Button>
      </AlertMessage>
    );

  return (
    <div className="flex flex-col gap-4">
      <Button
        className="ml-auto"
        onClick={toggleCropImage}
        aria-label="toggle crop image"
      >
        <ArrowLeftRight className="h-6 w-6" />
      </Button>
      <div
        className="overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-label="Carousel related cards"
      >
        <div className="flex gap-4">
          {data?.data.map(({ card_images, id, name, type, race }) => (
            <Link
              href={`/catalog/${id}`}
              aria-label={`view details of ${name}`}
              key={id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4"
            >
              <figure className="bg-gray-700/50 rounded-lg overflow-hidden hover:bg-gray-700/70 transition-all">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={
                      isCropImage
                        ? card_images[0].image_url_cropped
                        : card_images[0].image_url_small
                    }
                    className="w-full h-full"
                    alt={`${name} image`}
                    width={300}
                    height={400}
                    onError={(e) => {
                      e.currentTarget.src = placeholder.src;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <figcaption className="font-medium truncate font-belwe opacity-0 select-none">
                      {name}
                    </figcaption>
                    <div className="flex justify-between items-center mt-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-900/50 text-white"
                      >
                        {type}
                      </Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                        {race}
                      </Badge>
                    </div>
                  </div>
                </div>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
