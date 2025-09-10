"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { FeaturesSection } from "@/types/project";
import FadeIn from "@/components/animation/fadeIn";
import PopIn from "../animation/PopIn";

export default function Features({ data }: { data: FeaturesSection }) {
  return (
    <section className="py-16 mx-auto flex flex-col gap-8">
      <div className="px-4 md:px-24 gap-2 flex flex-col">

        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-5xl font-semibold text-Primary">
            {data?.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base">
            {data?.desc}
          </p>
        </FadeIn>
      </div>

      <div className="-mx-8 md:-mx-16">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4.5}
          spaceBetween={16}
          centeredSlides={false}
          speed={1000}
          className=""
          breakpoints={{
            0: {
              slidesPerView: 1.75,
            },
            768: {
              slidesPerView: 4.5,
            },
          }}
        >
          {data.card.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <PopIn delay={0.01} >
                <div className="h-84 w-full rounded-lg w-full rounded-lg my-4 py-4 relative">
                  <Image
                    src={item?.img?.url}
                    alt={item?.title}
                    width={500}
                    height={800}
                    className="absolute inset-0 h-84 object-cover rounded-lg"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-84 rounded-lg" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">{item?.title}</h3>
                  </div>
                </div>
              </PopIn>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
