import { cn } from "@/lib/utils";
import React, { HTMLAttributes, JSX } from "react";
import { TitleLevel } from "../types/TitleLevel.type";

interface Props extends HTMLAttributes<HTMLTitleElement> {
  level: TitleLevel;
}

export default function Title({ level, ...props }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(`font-belwe text-gray-100 ${props.className}`)}>
      {props.children}
    </Tag>
  );
}
