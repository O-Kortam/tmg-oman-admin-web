import Image from "next/image";
import type { NumbersSection } from "@/types/about";
import FadeIn from "@/components/animation/fadeIn";

export default function Numbers({ data }: { data: NumbersSection }) {
  return (
    <section className="py-16 px-4 md:px-24 flex flex-col gap-8 items-start md:items-center bg-offWhite">
      <FadeIn delay={0.2} >
        <h2 className="text-5xl font-semibold text-Secondary">{data?.title}</h2>
      </FadeIn>
      <FadeIn delay={0.4} >
        <p className="text-base font-medium text-Dark text-start md:text-center">{data?.desc}</p>
      </FadeIn>
      <div className="grid gap-4 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {data?.card.map((item: any, idx: number) => (
          <FadeIn delay={0.1 + idx * 0.05} key={idx}>
            <div className="relative flex justify-endborder border border-Primary/20 flex flex-col justify-between p-4 aspect-4/3 rounded-lg">
              <Image
                src={item.icon?.url}
                alt={item.icon?.alternativeText || "ICON"}
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-md md:text-4xl font-semibold text-Secondary">{item?.number}</h3>
                <p className="text-sm md:text-xl font-medium text-Dark">{item?.title}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
