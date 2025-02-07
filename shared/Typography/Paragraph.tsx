import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export function Paragraph({ children, className, ...props }: Props) {
  return (
    <p
      className={cn(className)}
      {...props}
      style={{ fontSize: "inherit", lineHeight: "inherit" }}
    >
      {children}
    </p>
  );
}
