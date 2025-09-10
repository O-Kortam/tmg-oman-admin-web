import { BannerProps } from "@/types/shared";
import FadeIn from "@/components/animation/fadeIn";

export default function Banner({ data, variant = "dark" }: BannerProps) {  const isLight = variant === "light";

  return (
    <section
      className={`w-full py-24 px-4 md:px-24 flex flex-col items-start md:items-center gap-4 text-start md:text-center ${
        isLight ? "bg-white" : "bg-Primary"
      }`}
    >
       <FadeIn delay={0.2}>
      <p
        className={`text-sm md:text-base font-semibold ${
          isLight ? "text-Dark" : "text-white"
        }`}
      >
        {data?.subtitle}
      </p>
      </FadeIn>
       <FadeIn delay={0.4}>
      <h2
        className={`text-3xl md:text-5xl font-semibold leading-tight  ${
          isLight ? "text-Primary" : "text-Secondary"
        }`}
      >
        {data?.title}
      </h2>
      </FadeIn>
    </section>
  );
}
