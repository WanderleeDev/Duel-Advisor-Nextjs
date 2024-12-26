import { DockNavigation } from "@/shared/components/DocNavigation";
import { PropsWithChildren } from "react";

export default function SectionLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen h-full">
      {children}
      <DockNavigation />
    </main>
  );
}
