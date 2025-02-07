import { cn } from "@/lib/utils";
import style from "./style.module.css";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLElement> {
  front: string;
  back: string;
  label: string;
  autoAnimation?: boolean;
}

export default function FlipCard({
  autoAnimation = false,
  back,
  front,
  label,
  className,
  ...props
}: Props) {
  return (
    <figure
      {...props}
      className={cn(
        "flip-card w-64 h-96",
        `${style["flip-card"]} ${
          autoAnimation ? style["autoAnimate"] : style["active-hover"]
        } ${className}`
      )}
    >
      <div
        className={`${style["flip-card-inner"]} relative w-full h-full rounded-lg `}
      >
        <Image
          className={`${style["flip-card-front"]} absolute inset-0 shadow-lg flex flex-col items-center justify-center overflow-hidden`}
          src={back}
          alt={`back of ${label}`}
          width={480}
          height={640}
        />
        <Image
          className={`${style["flip-card-back"]} absolute inset-0 shadow-lg flex flex-col items-center justify-center overflow-hidden`}
          src={front}
          alt={`front of ${label}`}
          width={480}
          height={640}
        />
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
