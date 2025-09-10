import Image from "next/image";
import { HotlineSection } from "@/types/contact";
import FadeIn from "@/components/animation/fadeIn";

export default function Hotline({ data }: { data: HotlineSection }) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-sky-950 text-white px-4 md:px-24 py-16 gap-8">
      <div className="flex flex-2 flex-col gap-2 justify-center items-center text-center">
        <FadeIn delay={0.2}>
          <Image
            src="/logo.png"
            alt="TMG Oman"
            width={300}
            height={300}
            className="w-44 object-contain mb-4"
          /></FadeIn>
        <FadeIn delay={0.3}>
          <h3  className="text-sm md:text-base">{data.subtitle}</h3>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h2  className="text-3xl md:text-5xl text-Secondary font-bold mb-4">
          {data.title}
        </h2>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p  className="text-sm md:text-base">
            {data.titleOne} {data.descOne}{" "}
          </p>
        </FadeIn>

        <FadeIn delay={0.6} >
          <p className="text-sm md:text-base">
            {data.titleTwo} {data.descTwo}{" "}
          </p>
        </FadeIn>

      </div>
      <FadeIn delay={0.6}>
        <Image
          src={data?.img?.url}
          width={600}
          height={600}
          alt="TMG Oman"
           className="rounded-lg flex flex-1 w-full"
        />
      </FadeIn>
    </section>
  );
}
