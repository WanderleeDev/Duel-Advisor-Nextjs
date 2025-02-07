import Section from "@/shared/Containers/Section";
import { PropsWithChildren } from "react";

export default function CatalogLayout({ children }: PropsWithChildren) {
  return <Section backgroundPallete="#0f172a">{children}</Section>;
}
