import HexagonGallery from "@/shared/components/HexagonMenu/index.ts";
import BackgroundBase from "@/shared/components/BackgroundBase";
import { WarpBackground } from "@/components/ui/warp-background";

export default function DirectoryPage() {
  return (
    <>
      <BackgroundBase>
        <WarpBackground
          className="min-h-dvh border-none"
          perspective={50}
          gridColor="none"
        >
          {""}
        </WarpBackground>
      </BackgroundBase>
      <h1 className="sr-only">Duels Advisor Home Menu</h1>
      <div className="bg-black/30 backdrop-blur-sm min-h-dvh pt-16">
        <HexagonGallery />
      </div>
    </>
  );
}
