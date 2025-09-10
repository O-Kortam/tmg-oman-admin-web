import Image from "next/image";
import { newsHeroData } from "@/types/news";

export default function Hero({ data }: { data: newsHeroData }) {
  return (
    <section className="w-full h-[70vh] flex flex-col justify-end items-start gap-4 relative overflow-hidden">
      <Image
        src={data?.img?.url}
        alt={data?.title || "News image"}
        fill
        priority
        sizes="(max-width: 1920) 90vw, (max-width: 1024px) 90vw, (max-width: 768px) 90vw, 750px"
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-start justify-end text-start text-white px-4 py-16 md:px-24">
        <p className="text-white text-sm font-base mb-1 animate-[fadeUp_0.6s_ease-out_forwards]">
          {data?.date}
        </p>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-2 animate-[fadeUp_1.0s_ease-out_forwards]">
          {data?.title}
        </h1>
      </div>
    </section>
  );
}
