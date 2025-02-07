import card from "public/card-animated.webp";
import Image from "next/image";

interface Props {
  message?: string;
}

export default function SpinnerCard({ message = "Loading ..." }: Props) {
  return (
    <figure className="flex flex-col items-center justify-center gap-4 w-full py-28">
      <Image className="w-40 h-44 rotate-[15deg]" src={card} alt={message} />
      <figcaption className="text-3xl font-medium text-center font-belwe text-gray-100">
        {message}
      </figcaption>
    </figure>
  );
}
