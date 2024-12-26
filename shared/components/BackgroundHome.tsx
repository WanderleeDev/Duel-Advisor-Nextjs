import { WarpBackground } from "@/components/ui/warp-background";

export default function BackgroundHome() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-900 to-transparent fixed inset-0 min-h-dvh w-full -z-10 ">
        {""}
      </div>
      <WarpBackground
        className="min-h-dvh border-none fixed inset-0 -z-20 pointer-events-none bg-gradient-to-b from-pink-900 to-pink-950"
        perspective={50}
        gridColor="none"
      >
        {""}
      </WarpBackground>
    </>
  );
}
