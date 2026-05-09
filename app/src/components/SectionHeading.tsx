import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.animate-in');
    gsap.fromTo(els, 
      { y: 30, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
      }
    );
  }, []);

  return (
    <div ref={ref} className={`${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`animate-in text-xs font-medium uppercase tracking-[0.08em] ${dark ? 'text-green-400' : 'text-[#999999]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`animate-in text-3xl lg:text-4xl font-semibold mt-2 ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`animate-in text-base lg:text-lg mt-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-[#666666]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
