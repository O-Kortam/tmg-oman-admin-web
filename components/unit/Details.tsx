import Image from "next/image";
import { unitInfoData } from "@/types/unit";
import FadeIn from "@/components/animation/fadeIn";
import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";

export default function Details({
  data,
  lang,
}: {
  data?: unitInfoData;
  lang: string;
}) {
  const t = useTranslation(lang);

  if (!data) return null;

  return (
    <section className="w-full flex flex-col md:flex-row gap-12 py-16 px-4 md:px-24">
      {/* Unit Info Grid */}
      <div className="flex flex-col items-start gap-6 text-Dark w-full md:w-10/12">
        <h2 className="text-2xl font-bold text-Primary animate-[fadeUp_0.6s_ease-out_forwards]">
          {t.property.detailsTitle}
        </h2>

        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 text-Primary font-medium text-sm md:text-md mt-4">
     
          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/bed.svg" width={20} height={20} alt="bed" className="w-6 md:w-10 h-6 md:h-10" />
            <p>{data.bed} {t.property.beds}</p>
          </div>

          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/bath.svg" width={20} height={20} alt="bath" className="w-6 md:w-10 h-6 md:h-10" />
            <p>{data.bath} {t.property.baths} </p>
          </div>

          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/size.svg" width={20} height={20} alt="area" className="w-6 md:w-10 h-6 md:h-10" />
            <p>{t.property.area} {data.area} m²</p>
          </div>

          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/type.svg" width={20} height={20} alt="type" className="w-6 md:w-10 h-6 md:h-10" />
            <p>{t.property.unitType} {data.type}</p>
          </div>

          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/phase.svg" width={20} height={20} alt="phase" className="w-6 md:w-10 h-6 md:h-10" />
            <p>{t.property.phase} {data.phase}</p>
          </div>

          <div className="w-full flex-col flex border border-Secondary/40 rounded-xl p-2 py-4 md:p-10 md:px-2 gap-2 items-center justify-center">
            <Image src="/assets/icons/finishing.svg" width={20} height={20} alt="finish" className="w-6 md:w-10 h-6 md:h-10" />
            <p> {data.finishing} {t.property.finish}</p>
                    
          </div>

        </div>
      </div>

      {/* Side Section */}
      <div className="flex flex-col items-start gap-4 md:gap-6 text-Dark bg-gray/5 md:p-6 rounded">
        <h3 className="text-xl md:text-2xl font-bold text-Primary animate-[fadeUp_0.6s_ease-out_forwards]">
          {t.property.callToActionTitle}
        </h3>

        <p className="text-base text-Dark/80 animate-[fadeUp_0.6s_ease-out_forwards]">
          {t.property.callToActionDesc}
        </p>

        <div className="flex  gap-4 md:mt-4 w-full">
          <Link
            href={t.property.registerLink}
            className="bg-Primary text-white px-4 py-2 rounded text-center w-full"
          >
            {t.property.registerText}
          </Link>

          <Link
            href={"#"}
            target="_blank"
            className="bg-Primary/10 text-Primary px-4 py-2 rounded text-center w-full"
          >
            {t.property.downloadText}
          </Link>
        </div>
      </div>
    </section>
  );
}
