import Hero from "@/components/home/hero";
import About from "@/components/home/About";
import CommunitiesSection from "@/components/home/Communities";
import Projects from "@/components/home/Projects";
import News from "@/components/home/News";
import ContactUs from "@/components/shared/contact";
import Features from "@/components/home/features";
import Banner from "@/components/shared/banner";
import { getHeroData } from "@/services/getHeroData";
import {
  getHomeNews,
  getHomeProjects,
  getHomeBanner,
  getHomeCommunities,
  getHomeFeatures,
  getHomeAbout,
} from "@/services/getHomeData";
import { getContactDropdowns } from "@/services/getContact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const heroData = await getHeroData(lang);
  const homeAbout = await getHomeAbout(lang);
  const homeNews = await getHomeNews(lang);
  const homeProjects = await getHomeProjects(lang);
  const homeBanner = await getHomeBanner(lang);
  const homeCommunities = await getHomeCommunities(lang);
  const homeFeatures = await getHomeFeatures(lang);
  const contactDropdowns = await getContactDropdowns(lang);
  return (
    <>
      <Hero data={heroData} />
      <About data={homeAbout?.about} />
      <Features data={homeFeatures?.features} />
      <CommunitiesSection data={homeCommunities?.communities} />
      <Banner data={homeBanner?.banner} />
      <Projects data={homeProjects?.projects} />
      <News data={homeNews?.news} />
      <ContactUs data={contactDropdowns} />
    </>
  );
}