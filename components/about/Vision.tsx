"use client";
import { useState } from "react";
import Image from "next/image";
import { VisionProps } from "@/types/about";
import FadeIn from "@/components/animation/fadeIn";

export default function Vision({ data }: { data: VisionProps }) {
  const [activeTab, setActiveTab] = useState(0);
  const visions = data?.vision;

  return (
    <section className="w-full px-4 md:px-24 py-16 bg-Primary text-white flex flex-col gap-4 md:gap-8">
      <div className="flex justify-between w-full flex-wrap gap-4">
        <FadeIn delay={0.2}>
          <h2  className="text-5xl font-semibold text-Secondary">{data?.title}</h2>
        </FadeIn>
        <FadeIn delay={0.4} >
          <p className="w-full sm:w-80 text-base">{data?.desc}</p>
        </FadeIn>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 md:gap-8 text-lg md:text-4xl font-semibold">
        {visions.map((tab: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`transition-opacity ${activeTab === idx ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
          >
            <FadeIn delay={0.2 + idx * 0.2}>
              {tab?.title}
            </FadeIn>
          </button>
        ))}
      </div>
      <FadeIn
        delay={0.6}
      >
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
        <Image
          src={visions[activeTab].img?.url}
          alt={
            visions[activeTab].img?.alternativeText || visions[activeTab]?.title
          }
          fill
          className="object-cover transition-all duration-500 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          quality={80}
        />
        </div>
      </FadeIn>

      <FadeIn delay={0.6} >
        <p className="text-md md:text-xl font-medium max-w-4xl">
          {visions[activeTab]?.desc}
        </p>
      </FadeIn>
    </section>
  );
}
