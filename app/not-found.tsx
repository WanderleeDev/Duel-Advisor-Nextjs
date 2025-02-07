"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import Title from "@/shared/Typography/Title";

export default function NotFoundPage() {
  const router = useRouter();

  const DynamicComponent = dynamic(
    () => import("@shared/components/ClientUrl"),
    { ssr: false }
  );

  return (
    <section className="grid place-content-center place-items-center bg-[#040205] h-[100dvh]">
      <div className="max-w-xs relative h-80 aspect-square">
        <Image
          className="object-cover select-none w-full"
          src="https://www.dropbox.com/scl/fi/eonl72ko0r9cp0fbiuorb/404.webp?rlkey=t3in2oil3sb6l3bdhe4j7ap3x&raw=1"
          alt="error img"
          fill
          priority
        />
      </div>
      <Title level={1} className="font-black text-xl">
        NOT FOUND
      </Title>
      <p className="py-4 text-center text-base font-semibold text-white">
        The route you want to access does not exist:
        <DynamicComponent />
      </p>
      <InteractiveHoverButton
        className="min-w-48"
        onClick={() => router.back()}
      >
        Back track
      </InteractiveHoverButton>
    </section>
  );
}
