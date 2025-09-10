import Hero from "@/components/unit/Hero";
import Details from "@/components/unit/Details";
import UnitGallery from "@/components/unit/Gallery";
import FloorPlan from "@/components/unit/FloorPlan";
import {
  getUnitHero,
  getUnitDetails,
  getUnitGallery,
  getFloorPlan,
} from "@/services/getUnit";
import { notFound } from "next/navigation";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ lang: string; projectName: string; id: string }>;
}) {
  const { lang, id } = await params;
  if (!id) return notFound();

  const [unitHero, unitDetails, unitGallery, floorPlan] = await Promise.all([
    getUnitHero(id, lang),
    getUnitDetails(id, lang),
    getUnitGallery(id, lang),
    getFloorPlan(id, lang),
  ]);

  return (
    <>
      <Hero data={unitHero?.hero} />
      <Details data={unitDetails?.info} lang={lang} />
      <UnitGallery data={unitGallery?.gallery} />
      <FloorPlan data={floorPlan?.floorPlan} />
    </>
  );
}
