"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CommunitiesSectionData } from "@/types/home";
import FadeIn from "@/components/animation/fadeIn";
import Image from "next/image";
import Link from "next/link";

export default function Communities({ data }: { data: CommunitiesSectionData }) {
  return (
    <section className="bg-background  py-16 md:py-24 ">
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 px-4 md:px-24 ">
        <div className="flex flex-col">
          <FadeIn delay={0.1} >
            <p className="text-Dark text-base font-semibold">{data?.subtitle}</p>
          </FadeIn>
          <FadeIn delay={0.2} >
            <h2 className="text-3xl md:text-5xl font-semibold text-Primary">
              {data?.title}
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-sm md:text-base text-Dark">{data?.desc}</p>
        </FadeIn>
      </div>

      <div className="mt-12 relative -mx-8 md:-mx-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          loop={true}
          slidesPerView={1.2}
          centeredSlides={false}
          spaceBetween={16}
          speed={2000}
          className="px-4"
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.75,
            },
          }}
        >
          {data?.card.map((item: any, i: number) => (

            <SwiperSlide key={i}>
                <div className="group relative h-96 md:h-[54vh] rounded-lg overflow-hidden flex flex-col justify-end items-start text-start p-3 md:p-6 animate-[fadeUp_0.6s_ease-out_forwards]">
                  <Image
                    src={item.img?.url || "/fallback.jpg"}
                    alt={item?.title || "Background"}
                    fill
                    sizes="(max-width: 840px) 100vw, 840px"
                    className="object-cover transform transition-transform duration-500 group-hover:scale-125"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 group-hover:to-black/90 transition-all duration-500"></div>
                  <p className="relative z-10 text-sm md:text-base text-white font-medium">
                    {item?.subtitle}
                  </p>
                  <h3 className="relative z-10 text-3xl md:text-5xl text-white font-semibold md:pt-1 md:pb-4">
                    {item?.title}
                  </h3>
                  <p className="relative z-10 text-sm md:text-base text-white font-regular md:w-10/12">
                    {item?.desc}
                  </p>
                  <Link target="_blank" href={item?.link || "/"}
                    className="mt-4 bg-white/10 border border-white/20 max-w-fit text-white py-3 px-3 rounded-md text-sm relative hover:underline group-hover:underline group-hover:border-white/60 transition-all duration-500">
                    {item?.btnText || "Read More"}
                  </Link>
                </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
