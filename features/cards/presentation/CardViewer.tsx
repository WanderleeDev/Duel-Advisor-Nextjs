import Image from "next/image";
import { Card } from "../domain/models/Card.model";
import CardPlaceholder from "./CardPlaceholder";
import FormatterParagraph from "@/shared/components/ParagraphFormatter";
import { useEffect, useRef } from "react";
import { resetScroll } from "@/shared/utils/resetScroll";

interface Props {
  card: Card | null;
}

export default function CardViewer({ card }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      resetScroll(containerRef.current);
    }
  }, [card]);

  if (!card) {
    return (
      <div className="w-80 fixed">
        <CardPlaceholder className="mx-auto w-64 h-96" />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-80 fixed">
      <figure title={card.name}>
        <Image
          className="visible mx-auto"
          loading="lazy"
          src={card.card_images[0].image_url}
          alt={card.name}
          width={260}
          height={380}
        />
        <figcaption
          className="text-gray-100 font-belwe text-2xl text-center py-4 truncate"
          title={card.name}
        >
          {card.name}
        </figcaption>
      </figure>
      <div className="flex flex-col gap-8 justify-between h-full max-h-[11.3rem] text-gray-100">
        <FormatterParagraph
          ref={containerRef}
          className="h-40 overflow-auto customScroll flex flex-col gap-2"
          text={card.desc}
        />
        <div
          className="flex gap-4 justify-between items-center font-semibold border-gray-100 border-4 p-2"
          style={{ borderStyle: "ridge" }}
        >
          {card.atk && <span>ATK: {card.atk}</span>}
          {card.def && <span>DEF: {card.def}</span>}
          {card.linkval && <span>LINK - {card.linkval}</span>}
          {!card.atk && !card.def && !card.linkval && (
            <span className="text-center uppercase">{card.frameType} CARD</span>
          )}
        </div>
      </div>
    </div>
  );
}
