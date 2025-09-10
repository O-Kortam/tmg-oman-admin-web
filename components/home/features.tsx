"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { LegacySectionData } from "@/types/home";
import Image from "next/image";
import FadeIn from "@/components/animation/fadeIn";

export default function LegacySection({ data }: { data: LegacySectionData }) {
  return (
    <section className="bg-Primary text-white  py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-24">
        <FadeIn delay={0.2} >
          <h2 className="flex-1 text-3xl md:text-5xl font-semibold text-Secondary">
            {data?.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} >
          <p className="flex-1 text-sm md:text-end md:text-base text-white/80">
            {data?.desc}
          </p>
        </FadeIn>
      </div>

      <div className="mt-12 relative -mx-8 md:-mx-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4.5}
          spaceBetween={16}
          centeredSlides={false}
          speed={2000}
          className="pl-8"
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 4.5,
            },
          }}
        >
          {data?.card.map((item: any, i: number) => (
            <SwiperSlide key={i} className="max-w-sm">

              <div className="relative h-64 md:h-84 rounded-lg overflow-hidden flex flex-col justify-between items-start md:items-center text-start md:text-center p-4 md:p-6 animate-[fadeUp_0.6s_ease-out_forwards]">
                <Image
                  src={item.img?.url || "/fallback.jpg"}
                  alt={item?.title || "Background"}
                  fill
                  sizes="(max-width: 600px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col items-start md:items-center justify-between md:justify-center h-full">
                  <Image
                    src={item?.icon?.url || "/fallback-icon.png"}
                    alt={item?.title}
                    width={80}
                    height={80}
                    className="mb-4 w-12 h-12 md:w-16 md:h-16"
                  />
                  <h3 className="text-base md:text-lg font-semibold">{item?.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
