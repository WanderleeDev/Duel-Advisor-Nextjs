import Image from "next/image";
import placeholder from "public/placeholder-card.webp";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function CardPlaceholder({ ...props }: Props) {
  return (
    <Image
      {...props}
      loading="lazy"
      src={props.src ?? placeholder}
      alt="card placeholder"
      width={200}
      height={320}
    />
  );
}
