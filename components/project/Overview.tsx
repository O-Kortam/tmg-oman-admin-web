
import Link from "next/link";
import Image from "next/image";
import { OverviewSection } from "@/types/project";
import FadeIn from "@/components/animation/fadeIn";

export default function Overview({ data }: { data: OverviewSection }) {
  return (
    <section className="p-4 py-16 md:p-24 gap-8 flex w-full justify-center items-center flex-col md:flex-row">
      <div className="flex flex-col w-full h-full justify-center items-start ">

        <FadeIn delay={0.1}>
          <h2 className="text-base text-Dark font-semibold mb-2">
            {data?.subtitle}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="text-2xl md:text-5xl text-Primary font-semibold mb-4">
            {data?.title}
          </h3>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-medium text-Dark font-medium mb-4">
            {data?.desc}
          </p>
        </FadeIn>

        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <FadeIn delay={0.6}>
            <Link
              href={data.pdf?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-Primary/10 text-Primary px-4 py-2 rounded"
            >
              {data?.btnText}
            </Link>
          </FadeIn>
          <FadeIn delay={0.8}>
            <Link
               href={data?.btnLink}
              className="bg-Primary/10 text-Primary px-4 py-2 rounded"
            >
               {data?.btnText2}
            </Link>
          </FadeIn>
        </div>
      </div>
      <div className="flex gap-4 w-full flex-col md:flex-row ">
        {data?.img?.map((item: any, i: number) => (
          <div  key={i} className={` md:h-[60vh] w-full ${i === 0 ? "md:w-4/12" : i === 1 ? "md:w-8/12" : "w-auto"
            }`}>
          <FadeIn delay={0.1 + i * 0.2} >
            <Image

              src={item?.url}
              alt="image"
              width={800}
              height={800}
              className="w-full h-full object-cover rounded-lg object-cover md:h-[60vh] w-full"
            />
          </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
