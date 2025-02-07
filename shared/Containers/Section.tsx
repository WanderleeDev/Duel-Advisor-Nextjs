import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

type SectionProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren & {
    backgroundPallete?: string;
  };

export default function Section({
  children,
  className,
  backgroundPallete,
  ...props
}: SectionProps) {
  return (
    <section {...props} className={cn("pt-12 pb-28 px-4 md:px-8", className)}>
      {backgroundPallete && (
        <div
          style={{
            background: backgroundPallete,
          }}
          aria-hidden="true"
          className="inset-0 fixed backdrop-blur-sm w-dvw h-dvh -z-10"
        ></div>
      )}
      {children}
    </section>
  );
}
