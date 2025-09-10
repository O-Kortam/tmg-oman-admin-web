import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import Features from "@/components/project/Features";
import UnitTypes from "@/components/project/UnitTypes";
import Gallery from "@/components/shared/Gallery";
import Info from "@/components/project/Info";
import Banner from "@/components/shared/banner";
import ContactUs from "@/components/shared/contact";
import { getContactDropdowns } from "@/services/getContact";

const projectServices: Record<string, () => Promise<any>> = {
  "the-coastal-project": () => import("@/services/getProjectOne"),
  "the-residential-project": () => import("@/services/getProjectTwo"),
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}) {
  const { lang, project } = await params;

  const serviceModule = await projectServices[project]();

  const projectData = await serviceModule.getProjectBanner?.(lang) ?? null;
  const heroData = await serviceModule.getHeroData?.(lang) ?? null;
  const infoData = await serviceModule.getInfoProject?.(lang) ?? null;
  const aboutData = await serviceModule.getAboutProject?.(lang) ?? null;
  const featuresData = await serviceModule.getFeaturesProject?.(lang) ?? null;
  const galleryData = await serviceModule.getProjectGalleryData?.(lang) ?? null;
  const unitsData = await serviceModule.getUnitsProject?.(lang) ?? null;
  const contactDropdowns = await getContactDropdowns(lang);

  return (
    <>
      <Hero data={heroData?.hero} />
      <Overview data={infoData?.info} />
      <Info data={aboutData?.about} />
      <Features data={featuresData?.features} />
      <Banner data={projectData?.banner} />
      <UnitTypes data={unitsData?.units} projectSlug={project} />
      <Gallery data={galleryData?.gallery} />
      <ContactUs data={contactDropdowns} defaultProject={project}/>
    </>
  );
}
