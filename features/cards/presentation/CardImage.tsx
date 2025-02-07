import { HTMLAttributes } from "react";
import { Card } from "../domain/models/Card.model";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
}

export default function CardImage({
  image,
  title,
  className,
  ...props
}: Props) {
  return (
    <figure className="visibility-auto w-36 h-52 lg:w-52 lg:h-80" {...props}>
      <Image
        className={cn("w-auto h-auto", className)}
        loading="lazy"
        src={image}
        alt={title}
        width={200}
        height={320}
      />
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
