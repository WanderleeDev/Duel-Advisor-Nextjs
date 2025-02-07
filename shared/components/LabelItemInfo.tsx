import React from "react";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLElement> {
  image: string;
  title: string;
  label: string;
}

export default function LabelItemInfo({ image, title, label }: Props) {
  return (
    <figure className="grid bg-black/50 backdrop-blur-sm rounded p-2 text-amber-300 text-base border-[.1rem] border-black/30 gap-2 grid-cols-[1fr_auto]">
      <span className="capitalize font-semibold col-[1/2]">{label}</span>
      <div className="col-[2/3] row-[1/3] self-center hover:scale-125 transition-transform duration-200 false">
        <Image
          src={image}
          aria-hidden="true"
          alt="card"
          width={30}
          height={30}
        />
      </div>
      <figcaption className="text-white font-semibold text-sm truncate block col-[1/2] row-[2/3]">
        {title}
      </figcaption>
    </figure>
  );
}
