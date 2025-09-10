'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { BranchesSection } from '@/types/contact';
import FadeIn from "@/components/animation/fadeIn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/useTranslation";

export default function Branches({ data }: { data: BranchesSection }) {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] === "ar" ? "ar" : "en";
  const t = useTranslation(currentLang);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const branches = data?.branchInfo || [];
  const title = data?.title || '';
  const subtitle = data?.subtitle || '';

  useEffect(() => {
    fetch('/assets/icons/map.svg')
      .then(res => res.text())
      .then(svg => {
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = svg;
        }
      });
  }, []);


  useEffect(() => {
    const paths = svgContainerRef.current?.querySelectorAll('svg path') || [];
    paths.forEach(path => (path as SVGPathElement).style.fill = '#172554');

    if (activeRegion) {
      const activePath = svgContainerRef.current?.querySelector(`#${activeRegion.trim()}`);
      if (activePath) (activePath as SVGPathElement).style.fill = '#F26B52';
    }
  }, [activeRegion]);

  return (
    <section className="flex flex-col justify-between items-center px-4 py-16 md:px-24 gap-8 bg-gray-50">
      <div className='text-center mb-4'>
        <FadeIn delay={0.2} >
          <h2 className="flex-1 text-2xl md:text-5xl font-semibold mb-2 text-Primary">
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-Dark">{subtitle}
          </p></FadeIn>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-16 md:gap-0">

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 order-1 md:order-1">
          {branches.map((branch: any, i: number) => (
            <FadeIn delay={0.1 + i * 0.15} key={branch?.id}>

              <div
                onMouseEnter={() => setActiveRegion(branch?.slug?.trim())}
                onMouseLeave={() => setActiveRegion(null)}
                className="cursor-pointer transition w-full h-full border border-Primary/20 hover:border-Primary/40 p-4 rounded hover:bg-Primary/10 flex flex-col justify-between h-full w-full"
              >
                {branch.icon?.url && (
                  <Image
                    src={branch?.icon?.url || "/fallback-icon.png"}
                    alt={branch?.title || "Icon"}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold">{branch?.title}</h3>
                  <p className="text-sm text-gray-600">{branch?.desc}</p>
                </div>

                <Link
                  href={branch?.direction || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-Secondary underline"
                >
                  {t.getDirection}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex-1 flex justify-center order-2 md:order-2">
          <div ref={svgContainerRef} className="relative" />
        </div>
      </div>
    </section>
  );
}
