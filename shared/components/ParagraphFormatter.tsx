import React, {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  Ref,
} from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  CustomParagraph?: React.ComponentType<{ children: React.ReactNode }>;
}

function descriptionFormatter(text: string): string[] {
  if (!text.trim()) return [];

  return (
    text
      .match(/(?:[^."●:]+|"[^"]*")+(?:\.|●|:)?/g)
      ?.filter((s) => {
        const trimmedText = s.trim();

        if (trimmedText === "") return false;

        if (/^[A-Z]\.(?:[A-Z]\.)+$/.test(trimmedText)) return false;

        return true;
      })
      .map((s) => s.trim()) || []
  );
}

function DefaultParagraph({ children }: PropsWithChildren) {
  return <p>{children}</p>;
}

const FormatterParagraph = forwardRef<HTMLDivElement, Props>(
  function FormatterParagraph(
    { text, className, CustomParagraph = DefaultParagraph, ...props }: Props,
    ref: Ref<HTMLDivElement>
  ): React.ReactNode | null {
    const formattedText = descriptionFormatter(text);

    if (formattedText.length <= 0) return null;

    return (
      <div ref={ref} className={cn(className)} {...props}>
        {formattedText.map((paragraphSlice, i) => (
          <CustomParagraph key={i}>{paragraphSlice}</CustomParagraph>
        ))}
      </div>
    );
  }
);

export default FormatterParagraph;
