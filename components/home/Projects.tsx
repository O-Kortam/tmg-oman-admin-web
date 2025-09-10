"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectsData } from "@/types/home";
import FadeIn from "@/components/animation/fadeIn";

export default function Projects({ data }: { data: ProjectsData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || data.length === 0) return null;

  const activeProject = data[activeIndex];
  // const inactiveIndex = activeIndex === 0 ? 1 : 0;
  // const inactiveProject = data[inactiveIndex];

  return (
    <section className="px-4 md:px-24 py-24 mx-auto flex flex-col gap-8 bg-white text-Dark">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
        <div className="flex flex-col items-start gap-2 w-full">
          <FadeIn delay={0.1}>
            <p className="text-sm text-primary font-medium">
              {activeProject?.subtitle}
            </p>
          </FadeIn>

          <div className="flex flex-row gap-6 border-b border-gray-200 mt-2">
            {data?.map((project, idx) => (
              <FadeIn delay={0.2} key={idx}>
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`
            pb-2 text-lg md:text-3xl font-semibold transition 
            ${idx === activeIndex
                      ? "text-Primary border-b-2 border-Primary"
                      : "text-Primary/70 hover:text-Primary"
                    }
          `}
                >
                  {project?.title}
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              {activeProject?.desc}
            </p>
          </FadeIn>
        </div>
      </div>


      <div className="flex flex-col md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {activeProject.type?.map((type: any, index: number) => (
              <FadeIn delay={0.1 + index * 0.2} key={index}
              >
          <div className="relative group rounded-lg overflow-hidden transition h-64 md:h-[50vh]"
          >
          
               <div className="h-full">
              <Image
                src={type.img?.url}
                alt={type?.title}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              /></div>

              <div className="absolute inset-0 bg-black/50 opacity-50 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 start-4 text-white">
                <p className="text-base font-sm">{type?.subtitle}</p>
                <h3 className="text-3xl font-semibold">{type?.title}</h3>
             </div>
                    </div>
            </FadeIn>
           
   

        ))}
      </div>

      {/* CTA Button */}
      {activeProject.button && activeProject.button.url && (
        <div className="text-center mt-4">
          <a
            href={activeProject.button?.url}
            className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-primary/90 transition"
          >
            {activeProject.button?.text}
          </a>
        </div>
      )}
    </section>
  );
}
