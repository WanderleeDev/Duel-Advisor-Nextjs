import Image from "next/image";
import React from "react";
import card from "../public/card-animated.webp";

export default function Loading() {
  return (
    <section className="grid place-content-center bg-stone-800 gap-12 min-h-dvh w-full">
      <Image className="w-40 h-44 rotate-[15deg]" src={card} alt="banner" />
      <h1 className="font-Belwe text-white text-3xl font-medium text-center">
        Loading ...
      </h1>
    </section>
  );
}
