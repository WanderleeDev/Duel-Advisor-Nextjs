import FlipCard from "@/shared/components/FlipCard";
import FormatterParagraph from "@/shared/components/ParagraphFormatter";
import { Paragraph } from "@/shared/Typography/Paragraph";
import placeholder from "public/placeholder-card.webp";
import Title from "@/shared/Typography/Title";
import { ScrollArea } from "@/components/ui/scroll-area";
import Box from "@/shared/Containers/Box";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CopyToClipBoardButton from "@/shared/components/CopyToClipBoardButton";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  typeLine: string[];
  externalLink: string;
}

export default function CardBaseInfo({
  description,
  externalLink,
  title,
  image,
  typeLine,
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 grid-rows-[auto_1fr]">
      <div className="order-1 lg:order-2 justify-self-center lg:place-content-center lg:col-[2/3] lg:row-[1/3] lg:py-36">
        <label className="-rotate-6 transition-transform py-8 lg:scale-125 xl:scale-150 block lg:opacity-40 lg:grayscale lg:hover:grayscale-0 hover:lg:opacity-80 lg:transition-all lg:duration-300 lg:has-[:checked]:grayscale-0 lg:has-[:checked]:opacity-100 lg:cursor-pointer has-[:checked]">
          <FlipCard
            autoAnimation
            front={image}
            back={placeholder.src}
            label={title}
          />
          <input type="checkbox" className="sr-only hidden" />
        </label>
      </div>

      <Title level={2} className="text-3xl text-center order-0 lg:text-left">
        Card {title}
      </Title>

      <div className="flex flex-col gap-8 order-2">
        {typeLine?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-center">
            {typeLine.map((type) => (
              <Badge
                key={type}
                className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
              >
                {type}
              </Badge>
            ))}
          </div>
        )}
        <Box bgVariant="secondary" title="Description" level={3}>
          <ScrollArea className="h-48">
            <FormatterParagraph
              className="text-lg lg:basis-1/2 lg:order-3 place-content-center flex flex-col gap-3"
              text={description}
              CustomParagraph={Paragraph}
            />
          </ScrollArea>
        </Box>
        <div className="flex flex-wrap gap-8 items-center">
          <CopyToClipBoardButton
            useCurrentUrl
            textToCopy=""
            label="Share page"
          />
          <Link
            href={externalLink}
            target="_blank"
            className="flex items-center gap-2 hover:underline-offset-4  focus-within:underline-offset-4 hover:underline hover:text-amber-400 transition-all"
          >
            External Founts
            <ChevronRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
