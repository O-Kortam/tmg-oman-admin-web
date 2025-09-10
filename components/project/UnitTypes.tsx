"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "@/lib/useTranslation";
import { UnitTypesSection } from "@/types/project";
import { usePathname } from "next/navigation";
import FadeIn from "@/components/animation/fadeIn";
import UnitCard from "@/components/ui/unitCard";
import RangeFilters from "@/components/ui/rangeFilters";

export default function UnitTypes({ data, projectSlug }: { data: UnitTypesSection; projectSlug: string }) {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);

  const [selectedType, setSelectedType] = useState("");

  const [bedRange, setBedRange] = useState<[number, number]>([0, 10]);
  const [bathRange, setBathRange] = useState<[number, number]>([0, 10]);
  const [areaRange, setAreaRange] = useState<[number, number]>([0, 500]);
  const [showAll, setShowAll] = useState(false);

const filteredCards = useMemo(() => {
  return data.card.filter((item) => {
    const bed = item.bed ?? 0;
    const bath = item.bath ?? 0;
    const area = Number(item.area.replace(/\D/g, "")) || 0;

    const bedOk = bed >= bedRange[0] && bed <= bedRange[1];
    const bathOk = bath >= bathRange[0] && bath <= bathRange[1];
    const areaOk = area >= areaRange[0] && area <= areaRange[1];
    const typeOk = !selectedType || selectedType === "All" ? true : item.type === selectedType;

    return bedOk && bathOk && areaOk && typeOk;
  });
}, [bedRange, bathRange, areaRange, selectedType, data.card]);

  const cardsToDisplay = showAll ? filteredCards : filteredCards.slice(0, 4);

  return (
    <section className="py-16 px-4 md:px-24 bg-offWhite">
      <div className="text-center mb-8 flex flex-col lg:flex-row items-center gap-4">
        <FadeIn delay={0.2} >
          <h2 className="text-start text-2xl md:text-5xl font-semibold flex-1 text-Primary">{data?.title}</h2>
        </FadeIn>
        <FadeIn delay={0.4} >
          <p className="text-sm md:text-base text-start md:text-end flex-1">{data?.desc}</p>
        </FadeIn>
      </div>

      <RangeFilters
        types={t.filters.types || []} 
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        bedRange={bedRange}
        setBedRange={setBedRange}
        bathRange={bathRange}
        setBathRange={setBathRange}
        areaRange={areaRange}
        setAreaRange={setAreaRange}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cardsToDisplay.map((item, i) => (
          <UnitCard key={i} item={item} lang={currentLang} projectSlug={projectSlug} />
        ))}
      </div>

      <div className="text-center mt-10 flex flex-col items-center gap-4">
                <FadeIn delay={0.8}>
        {!showAll && filteredCards.length > 4 && (
          <button className="bg-Primary text-white px-4 py-2 rounded" onClick={() => setShowAll(true)}>
            {t.filters.showMore || "Show More"}
          </button>
        )}
          </FadeIn>
      </div>
    </section>
  );
}
