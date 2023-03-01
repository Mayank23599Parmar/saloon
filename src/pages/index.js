import { ImageCard } from "@/components/global/ImageCard";
import WorkWithUS from "@/components/global/WorkWithUS";
import HomeBanner from "@/components/home-page/HomeBanner";
import HomeBecomeMember from "@/components/home-page/HomeBecomeMember";

export default function Home() {
  return (
    <>
      <main className="home-page">
        <HomeBanner />
        <ImageCard/>
        <HomeBecomeMember/>
        <WorkWithUS/>
      </main>
    </>
  )
}
