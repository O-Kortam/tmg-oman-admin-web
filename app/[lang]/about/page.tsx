import Gallery from "@/components/shared/Gallery";
import Hero from "@/components/about/Hero";
import Info from "@/components/about/Info";
import Numbers from "@/components/about/Numbers";
import Timeline from "@/components/about/Timeline";
import Vision from "@/components/about/Vision";
import Banner from "@/components/shared/banner";
import ContactUs from "@/components/shared/contact";
import {
  getAboutPageData,
  getAboutVisionData,
  getAboutBannerData,
  getAboutAchievementsData,
  getAboutGalleryData,
  getAboutNumbersData,
} from "@/services/getAboutPageData";
import { getContactDropdowns } from "@/services/getContact";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const aboutData = await getAboutPageData(lang);
  const aboutDataBanner = await getAboutBannerData(lang);
  const aboutAchievementsData = await getAboutAchievementsData(lang);
  const aboutGalleryData = await getAboutGalleryData(lang);
  const aboutNumbersData = await getAboutNumbersData(lang);
  const aboutVisionData = await getAboutVisionData(lang);
  const contactDropdowns = await getContactDropdowns(lang);

  return (
    <>
      <Hero data={aboutData?.header} />
      <Info data={aboutData?.about} />
      <Numbers data={aboutNumbersData.numbers} />
      <Vision data={aboutVisionData?.info} />
      <Banner data={aboutDataBanner?.banner} variant="light" />
      <Timeline data={aboutAchievementsData?.achievements} />
      <Gallery data={aboutGalleryData?.gallery} />
      <ContactUs data={contactDropdowns} />
    </>
  );
}
