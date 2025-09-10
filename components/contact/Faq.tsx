'use client';
import { useState } from 'react';
import type { FaqSection } from '@/types/contact';
import FadeIn from "@/components/animation/fadeIn";

export default function Faq({ data }: { data: FaqSection }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-4 md:px-24 py-16 mx-auto w-full">
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8'>
        <FadeIn delay={0.1}>
          <h2  className="flex-2 text-2xl md:text-5xl font-semibold mb-2 text-Primary">{data.title}</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p  className="flex-1 text-Dark mb-6">{data.desc}</p>
        </FadeIn>
      </div>
      {data.card.map((item: any, i: number) => (
        <FadeIn delay={0.2 + i * 0.2} key={i}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full text-left py-4 flex justify-between items-center border-b border-gray"
          >
            <h3 className="text-xl text-Primary">{item.question}</h3>
            <span>{active === i ? '-' : '+'}</span>
          </button>
          {active === i && (
            <p className="pb-4 text-base text-Dark">{item.answer}</p>
          )}
        </FadeIn>
      ))}
    </section>
  );
}
