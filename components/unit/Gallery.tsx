"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import FadeIn from "@/components/animation/fadeIn";
import { useTranslation } from "@/lib/useTranslation";
import { UnitGalleryProps } from "@/types/unit";

export default function UnitGallery({ data }: { data: UnitGalleryProps }) {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);

  const [openImg, setOpenImg] = useState<string | null>(null);


  return (
    <section className="py-16 px-4 md:px-24 mx-auto bg-gray border-t border-zinc-800/25">
      {/* Section Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <FadeIn delay={0.1}>
          <p className="text-base font-semibold">{t.unitGallery.subtitle}</p>
        </FadeIn>

        <FadeIn
          delay={0.2}
        >
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-2 text-Primary"
          >{t.unitGallery.title}</h2>
        </FadeIn>

        <FadeIn delay={0.4} >
          <p className="text-base max-w-2xl">{t.unitGallery.description}</p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item: any, i: number) => (
          <div
            key={i}
            className="w-full cursor-pointer"
          >
            <Image
              src={item.img.url}
              alt={item.title || `Gallery Image ${item.id}`}
              width={item.img.width || 800}
              height={item.img.height || 600}
              className="w-full h-auto object-cover rounded-lg"
              onClick={() => setOpenImg(item.img.url)}
            />
            {(item.title || item.desc) && (
              <div className="p-4">
                {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
                {item.desc && <p className="text-sm mt-1 text-Dark/80">{item.desc}</p>}
              </div>
            )}
          </div>
        ))}
      </div>


      {/* Modal */}
      {openImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpenImg(null)}
        >
          <Image
            src={openImg}
            alt="Enlarged Image"
            width={1200}
            height={900}
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      )}
    </section>
  );
}
