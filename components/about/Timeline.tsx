"use client";

import { useState } from "react";
import Image from "next/image";
import { AchievementsProps } from "@/types/about";
import FadeIn from "@/components/animation/fadeIn";

export default function Numbers({ data }: { data: AchievementsProps }) {

  const { title, desc, card } = data;
  const [activeIndex, setActiveIndex] = useState(card.length - 1);

  return (
    <section className="relative w-full px-4 md:px-24 py-16 h-[70vh] text-white flex flex-col justify-between overflow-hidden transition-all duration-700">
      {card[activeIndex]?.img && (
        <div className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 bg-black">
          <Image
            src={card[activeIndex].img?.url}
            alt={
              card[activeIndex].img?.alternativeText || "Achievement Background"
            }
            fill
            className="object-cover opacity-80"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between flex-wrap gap-4 w-full">
          <FadeIn delay={0.2} >
            <h2 className="text-2xl md:text-5xl font-bold text-Primary text-white">
              {title}
            </h2>
          </FadeIn>
          <div className="text-sm md:text-base font-semibold md:w-2/6 md:text-end">
          <FadeIn delay={0.4} >
            <p >
              {desc}
            </p>
          </FadeIn>
</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 items-start justify-between mt-16 md:mt-0">
          <div className="max-w-2xl">
            <FadeIn delay={0.2}>
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
                {card[activeIndex]?.title}
              </h3>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-sm md:text-xl font-medium">
                {card[activeIndex]?.desc}
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2 gap-4 h-full justify-end">
            {card.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-base md:text-xl font-semibold transition-opacity text-end ${idx === activeIndex
                  ? "opacity-100 underline underline-offset-4 decoration-Secondary"
                  : "opacity-50 hover:opacity-80"
                  }`}
              >
                <FadeIn delay={0.1 + idx * 0.2}>
                  {item?.date}
                </FadeIn>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
