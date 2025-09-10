import { InfoSection } from "@/types/project";
import FadeIn from "@/components/animation/fadeIn";
import Video from "../shared/Video";

export default function Info({ data }: { data: InfoSection }) {
  return (
    <section className="mx-auto px-4 md:px-24 py-16 bg-gray border-y border-zinc-800/25 flex flex-col gap-12 bg-grey">
      <Video id={data?.videoLink || ""} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto text-gray-700 text-base md:text-lg font-medium">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-5xl text-Primary font-semibold leading-14">
            {data?.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.4} >
          <p>
            {data?.descOne}
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p>
            {data?.descTwo}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
