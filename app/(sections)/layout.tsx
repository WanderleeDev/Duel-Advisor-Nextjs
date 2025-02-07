import DockNavigation from "@/shared/components/DocNavigation";
import Title from "@/shared/Typography/Title";
import { PropsWithChildren } from "react";

export default function SectionLayout({ children }: PropsWithChildren) {
  return (
    <main className="h-full max-w-[120rem] mx-auto">
      <Title level={1} className="sr-only">
        Duel Advisor
      </Title>
      {children}
      <DockNavigation className="hidden xs:inline-flex" />
    </main>
  );
}
