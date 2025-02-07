"use client";

import CardImage from "./CardImage";
import CardViewer from "./CardViewer";
import { BlurFade } from "@/components/ui/blur-fade";
import AlertMessage from "@/shared/components/AlertMessage";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { useCurrentCard } from "../context/CurrentCard.context";
import useInfiniteScrollCard from "../hooks/useInfiniteScrollCard";
import CardProgressBar from "./CardProgressBar";
import SpinnerCard from "@/shared/components/SpinnerCard";

export default function GalleryCards() {
  const { query, currentItems, totalItems, ref, cards } =
    useInfiniteScrollCard(20);
  const { currentCard, setCard } = useCurrentCard();

  if (query.isLoading) {
    return <SpinnerCard message="Loading cards ..." />;
  }

  if (!query.isLoading && query.isError) {
    return (
      <AlertMessage variant="destructive" message="Error loading cards">
        <Button
          className="w-full mt-2 hover:opacity-90"
          onClick={() => query.refetch()}
        >
          Retry
        </Button>
      </AlertMessage>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16">
      <div
        className="flex gap-4 flex-wrap mx-auto relative justify-center md:justify-between"
        role="grid"
        aria-label="Gallery of cards"
      >
        <CardProgressBar currentItems={currentItems} totalItems={totalItems} />

        {cards.map((card) => (
          <Link key={card.id} href={`/catalog/${card.id}`} title="more info">
            <BlurFade delay={0.25} inView>
              <CardImage
                onMouseEnter={() => setCard(card)}
                image={card.card_images[0].image_url}
                title={card.name}
              />
            </BlurFade>
          </Link>
        ))}
      </div>
      <div className=" w-80 hidden  md:block">
        <CardViewer card={currentCard} />
      </div>
      <div ref={ref}>ref</div>
    </div>
  );
}
