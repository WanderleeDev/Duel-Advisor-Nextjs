import { Globe } from "@/components/ui/globe";

export default function DuelSimulatorView() {
  return (
    <section className="min-h-dvh radial-center">
      <h1 className="sr-only">Duel Simulator</h1>
      <Globe className="h-[90%] w-full pointer-events-none" />
    </section>
  );
}
