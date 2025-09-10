import Image from "next/image";
import { AboutSectionData } from "@/types/about";
import FadeIn from "@/components/animation/fadeIn";

export default function Info({ data }: { data: AboutSectionData }) {
  return (
    <section className="w-full py-16 px-4 md:px-24 bg-Color-2 flex flex-col gap-4 border-b border-gray">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8 md:mb-4">
        <div className="flex flex-col gap-4 w-full">
          <FadeIn delay={0.1} >
            <p className="text-base font-semibold">
              {data?.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.2} >
            <h2 className="text-5xl font-semibold text-Primary">{data?.title}</h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.4}>
          <Image
            src="/logo.png"
            alt={data?.title || "Logo"}
            width={300}
            height={300}
            className="w-36 md:w-64 object-contain"
          />
        </FadeIn>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <FadeIn delay={0.5} >
          <p className="text-base font-medium">{data?.desc}</p></FadeIn>
        <FadeIn delay={0.6}>
          <p  className="text-base font-medium">{data?.desc2}</p></FadeIn>


      </div>
      <FadeIn delay={0.7} > <p className="text-base font-medium">{data?.desc3}</p></FadeIn>

      <FadeIn delay={0.6}>
        <Image
          src={data.img?.url}
          alt={data?.title || "Hero Image"}
          width={300}
          height={300}
          className="w-full h-84 object-cover rounded-lg"
        />
      </FadeIn>
    </section>
  );
}
