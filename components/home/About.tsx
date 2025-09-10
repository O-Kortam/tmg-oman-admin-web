import { AboutSectionData } from "@/types/home";
import Image from "next/image";
import FadeIn from "@/components/animation/fadeIn";

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <div className="px-4 py-16 md:px-24 md:py-24 bg-white flex flex-col gap-6" id="about">
      <div className="flex flex-col text-start md:text-center gap-5">

        <FadeIn delay={0.1}>
          <h2  className="text-3xl md:text-5xl font-semibold text-Primary md:mx-44">
            {data?.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} >
          <p className="text-gray-700 text-Dark text-sm md:text-lg font-medium">
            {data?.desc}
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col justify-start items-start md:items-center gap-4">
        <FadeIn delay={0.3}>
          <Image
            className="w-auto h-20 left-0 top-0"
            width={200}
            height={200}
            src="/logo.png"
            alt="TMG logo"
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-gray-700 text-start md:text-center w-full mx-auto text-Dark text-base font-medium">
            {data?.subtitle}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
