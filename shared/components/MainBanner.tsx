import React from "react";
import Image from "next/image";
import banner from "../../public/banner.svg";

export default function MainBanner() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none "
      aria-hidden="true"
    >
      <div className="bg-gradient-to-b from-blue-900 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
      <Image
        className="block h-full w-full object-cover"
        src={banner}
        alt="banner"
        width={500}
        height={350}
      />
    </div>
  );
}
