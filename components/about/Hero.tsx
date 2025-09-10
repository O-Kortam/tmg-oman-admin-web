import Image from "next/image";
import { HeroData } from "@/types/about";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="w-full h-[70vh] flex flex-col justify-end items-start gap-4 relative overflow-hidden">
      <Image
        src={data.img?.url}
        alt={data.title || "Hero Image"}
        fill
        priority
        sizes="(max-width: 1920) 90vw, 750px"
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-start justify-end text-start text-white p-3 md:p-10">
        <p className="text-white text-sm font-base mb-1 animate-[fadeUp_0.4s_ease-out_forwards]">{data?.subtitle}</p>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-2 animate-[fadeUp_0.6s_ease-out_forwards]">{data?.title}</h1>
        <p className="text-white text-sm md:text-base font-medium animate-[fadeUp_1.2s_ease-out_forwards]">{data?.desc}</p>
      </div>
    </section>
  );
}
