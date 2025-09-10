import Image from "next/image";
import { newsData } from "@/types/news";
import FadeIn from "@/components/animation/fadeIn";
import Video from "../shared/Video";

export default function Details({ data }: { data?: newsData }) {
  if (!data) return null;

  return (
    <section className="w-full flex flex-col items-start gap-6">
      <div className="flex flex-col w-full items-start text-start text-white py-16 px-4 md:px-24 gap-6">

        {data?.title && (
          <FadeIn delay={0.2} >
            <h2 className="text-Primary text-2xl md:text-4xl font-bold mb-2">{data.title}</h2>
          </FadeIn>
        )}

        {data?.descOne && (
          <FadeIn delay={0.3}>
            <p className="text-Dark text-sm md:text-base leading-relaxed">{data.descOne}</p>
          </FadeIn>
        )}

        {data?.img?.url && (
          <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
            <Image
              src={data.img.url}
              alt={data?.title || "News image"}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              quality={90}
            />
          </div>
        )}
        <div className="w-full h-full">

          <FadeIn delay={0.1}>
            <Video id={data?.videoLink || ""} />
          </FadeIn>

        </div>
        {data?.desc2 && (
          <FadeIn delay={0.4} >
            <p className="text-Dark text-sm md:text-base leading-relaxed">{data.desc2}</p>
          </FadeIn>
        )}
        {data?.desc3 && (
          <FadeIn delay={0.5}>
            <p className="text-Dark text-sm md:text-base leading-relaxed">{data.desc3}</p>
          </FadeIn>
        )}
        {data?.desc4 && (
          <FadeIn delay={0.6}>
            <p className="text-Dark text-sm md:text-base leading-relaxed">{data.desc4}</p>
          </FadeIn>
        )}

        {data?.img2 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {Array.isArray(data.img2)
              ? data.img2.map((image, idx) =>
                image?.url ? (
                  <FadeIn key={idx} delay={0.2 + idx * 0.1}>
                    <Image
                      src={image.url}
                      alt={`Extra image ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full md:h-128 object-cover rounded-lg"
                    />
                  </FadeIn>
                ) : null
              )
              : data.img2?.url && (
                <FadeIn delay={0.2}>
                  <Image
                    src={data.img2.url}
                    alt="Extra image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </FadeIn>
              )}
          </div>
        )}

      </div>
    </section>
  );
}
