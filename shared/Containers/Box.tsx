import { cn } from "@/lib/utils";
import Title from "../Typography/Title";
import { TitleLevel } from "../types/TitleLevel.type";
import { VariantBox } from "../types/VariantBox.type";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  bgVariant?: VariantBox;
  title?: string;
  level?: TitleLevel;
}

const bgVariantClasses: Record<VariantBox, string> = {
  primary: "bg-primary",
  secondary: "border-emerald-500/30",
  tertiary: "border-purple-500/30",
  warn: "border-yellow-500/30",
  info: "border-blue-500/30",
  accent: "border-amber-500/30",
  black: "border-white/70 bg-black/80",
};

const titleVariantClasses: Record<VariantBox, string> = {
  primary: "text-[inherit]",
  secondary: "text-emerald-500",
  tertiary: "text-purple-500",
  warn: "text-yellow-500",
  info: "text-blue-500",
  accent: "text-amber-500",
  black: "text-gray-100",
};

export default function Box({
  bgVariant = "primary",
  children,
  title,
  level = 1,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "rounded-lg border shadow p-4 h-fit bg-gray-800/80",
        className,
        bgVariantClasses[bgVariant]
      )}
      {...props}
    >
      {title && (
        <Title
          className={cn(
            "font-semibold mb-3 text-2xl tracking-wider",
            titleVariantClasses[bgVariant]
          )}
          level={level}
        >
          {title}
        </Title>
      )}
      {children}
    </div>
  );
}
