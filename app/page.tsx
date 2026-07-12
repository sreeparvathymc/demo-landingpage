import Image from "next/image";
import Banner from "./components/Sessions/BannerSection/Banner";
import WorkFlow from "./components/Sessions/WorkflowSection/WorkFlow";
import PrevieSection from "./components/Sessions/PlatformPreview/PrevieSection";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />

        <WorkFlow />

        <PrevieSection />
      </main>
    </div>
  );
}
