"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { HeroData } from "@/types/home";
import Link from "next/link";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="h-full w-full"
      >
        {data.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen w-full flex items-start md:items-center justify-start md:justify-center text-start md:text-center">
              <Image
                src={item?.img.url}
                alt={item?.title || "Hero background"}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                quality={80}
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full max-w-5xl flex-col justify-center px-4 gap-4 text-white md:items-center">
                {item?.title && (
                  <h1 className="text-4xl md:text-5xl font-bold md:leading-[1.2] animate-[fadeUp_0.6s_ease-out_forwards]">
                    {item?.title}
                  </h1>
                )}
                {item?.desc && (
                  <p className="text-base md:text-lg max-w-4xl animate-[fadeUp_1.6s_ease-out_forwards]">
                    {item?.desc}
                  </p>
                )}
                {item?.btnUrl && (
                  <Link href={item?.btnUrl} className="bg-Primary max-w-fit text-white py-3 px-6 rounded-md  text-sm md:text-base animate-[fadeUp_2.6s_ease-out_forwards] hover:underline">
                    {item?.btnText}
                  </Link>
                )}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-40 bottom-4 left-1/2 -translate-x-1/2 animate-bounce border border-white rounded-full p-2">
        <a href="#about" aria-label="Scroll down">
          <Image
            src="/assets/icons/angle-small-down.svg"
            alt="Scroll down"
            width={32}
            height={32}
            className="w-6 object-contain"
          />
        </a>
      </div>

    </section>
  );
}
