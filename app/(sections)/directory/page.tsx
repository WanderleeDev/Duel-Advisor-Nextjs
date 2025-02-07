import HexagonGallery from "@/shared/components/HexagonMenu/index.ts";
import BackgroundBase from "@/shared/components/BackgroundBase";
import { WarpBackground } from "@/components/ui/warp-background";
import Title from "@/shared/Typography/Title";
import { navOptions } from "@/config/constants/navigation";
import Section from "@/shared/Containers/Section";

export default function DirectoryPage() {
  return (
    <Section className="h-full" backgroundPallete="rgb(0 0 0 / 0.2)">
      <BackgroundBase>
        <WarpBackground
          className="min-h-dvh border-none"
          perspective={50}
          gridColor="none"
        >
          {""}
        </WarpBackground>
      </BackgroundBase>
      <Title level={2} className="sr-only">
        Home Directory
      </Title>
      <HexagonGallery links={navOptions} titleBase="Directory" />
    </Section>
  );
}
