'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "@/components/ui/newsCard";
import { NewsSectionData } from "@/types/home";
import FadeIn from "@/components/animation/fadeIn";

export default function NewsSection({ data }: { data: NewsSectionData }) {

  return (
    <section className="bg-Primary text-white py-16 md:py-24 flex flex-col gap-4">
      <div className="w-full flex px-6 md:px-24  flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <p className="text-base font-semibold">{data?.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-secondary">{data?.title}</h2>
        </div>
        <p className="max-w-xl text-sm md:text-base font-medium text-white/80 text-center md:text-right">
          {data?.desc}</p>
      </div>

      <div className="w-full mt-12 relative ">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4.25}
          centeredSlides={false}
          spaceBetween={16}
          speed={1000}
          className="px-4"
          breakpoints={{
            0: { slidesPerView: 1.7 },
            768: { slidesPerView: 4.25 },
          }}
        >
          {data?.card?.map((item: any, i: number) => (
            <SwiperSlide key={i}>
                <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}
