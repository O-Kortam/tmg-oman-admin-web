import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NewsCard({ item }: { item: any }) {
  const { lang } = useParams();

  if (!item?.newsPage?.documentId) return null;

  return (
    <Link
      key={item.newsPage.documentId}
      href={`/${lang}/news/${item.newsPage.documentId}`}
      className="w-full group"
    >
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={item?.img?.url}
          alt={item?.title || "news image"}
          fill
          priority={false}
          quality={80}
          sizes="(max-width: 600px) 100vw, 600px"
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/90 transition-all duration-500 p-3 flex items-center gap-2">
          <Image
            src="/assets/calendar.svg"
            alt="Calendar"
            width={20}
            height={20}
            className="w-5 h-5 invert brightness-0"
          />
          <p className="text-white text-sm font-medium">{item?.date}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3
          className="text-white font-semibold text-xl relative group-hover:underline"
        >
          {item?.title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-3">{item?.desc}</p>
      </div>
    </Link>
  );
}
