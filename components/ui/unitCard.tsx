import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

export default function UnitCard({ item, lang, projectSlug }: { item: any; lang: string; projectSlug: string; }) {
  const t = useTranslation(lang);

  if (!item?.unitPage?.documentId) return null;

  return (
    <Link
      key={item.unitPage.documentId}
      href={`/${lang}/projects/${projectSlug}/units/${item.unitPage.documentId}`}
      className="block overflow-hidden transition group"
    >
      {item.img?.url && (
        <Image
          src={item.img.url}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}

      <div className="px-2 py-3 flex flex-col gap-2">
        <h3 className="font-semibold text-Dark mt-1 group-hover:underline">{item.title}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-Dark">
      
            <div className="flex gap-1 items-center">
              <Image
                src="/assets/icons/bed.svg"
                width={16}
                height={16}
                alt="bed"
                className="w-4 h-4"
              />
              <p>
                {t.property.beds} {item?.bed}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <Image
                src="/assets/icons/bath.svg"
                width={16}
                height={16}
                alt="bath"
                className="w-4 h-4"
              />
              <p>
                {t.property.baths} {item?.bath}
              </p>
            </div>
      
            <div className="flex gap-1 items-center">
              <Image
                src="/assets/icons/size.svg"
                width={16}
                height={16}
                alt="area"
                className="w-4 h-4"
              />
              <p>
                {t.property.area} {item?.area}
              </p>
            </div>
  
            <div className="flex gap-1 items-center">
              <Image
                src="/assets/icons/finishing.svg"
                width={16}
                height={16}
                alt="finish"
                className="w-4 h-4"
              />
              <p>
                {t.property.finish} {item?.finish}
              </p>
            </div>
     
        </div>
      </div>
    </Link>
  );
}
