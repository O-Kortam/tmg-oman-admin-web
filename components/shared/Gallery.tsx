"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { GalleryData } from "@/types/project";
import FadeIn from "@/components/animation/fadeIn";
import PopIn from "@/components/animation/PopIn";

export default function Gallery({ data }: { data: GalleryData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.img.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === data.img.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 px-4 md:px-24 mx-auto bg-gray border-t border-zinc-800/25">
      <div className="text-center mb-12 flex flex-col items-center">

        <FadeIn delay={0.1}>
          <p className="text-base font-semibold">
            {data?.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} >
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-2 text-Primary">
            {data?.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base">
            {data?.desc}
          </p>
        </FadeIn>

      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {data.img.map((item: any, i: number) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-all duration-300"
            onClick={() => openModal(i)}
          >
            <PopIn delay={0.6 + i * 0.2}>
              <Image
                src={item?.url}
                alt={`Gallery ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
            </PopIn>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl z-10"
          >
            ✕
          </button>
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-3xl px-2"
          >
            ‹
          </button>
          <div className="max-w-5xl max-h-[90vh] relative w-full h-[80vh]">
            <Image
              src={data?.img[currentIndex]?.url}
              alt={`Gallery ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-3xl px-2"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
