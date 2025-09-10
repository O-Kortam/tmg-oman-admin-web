"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { HeroData } from "@/types/project";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative h-full md:h-[70vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        className="h-full w-full"
      >
        {data.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <div className="relative h-[70vh] w-full">
              <Image
                src={item.img?.url}
                alt={item?.title}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                sizes="(max-width: 1920) 90vw, (max-width: 1024px) 90vw, (max-width: 768px) 90vw, 750px"
                className="object-cover absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full flex-col items-start justify-end text-start text-white px-4 py-16 md:px-24">

                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 animate-[fadeUp_0.6s_ease-out_forwards]">
                  {item?.title}
                </h1>

                <p className="w-full md:max-w-8/12 text-sm md:text-base animate-[fadeUp_1.2s_ease-out_forwards]">
                  {item?.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
