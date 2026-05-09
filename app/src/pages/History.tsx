import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineData } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    gsap.fromTo(timelineRef.current.querySelectorAll('.timeline-item'),
      { x: (i: number) => (i % 2 === 0 ? -30 : 30), opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">OUR HISTORY</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Heritage</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-2xl leading-relaxed">
            A story of growth and commitment to quality. From our founding to our position as a global leader — trace the milestones that shaped who we are today.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={timelineRef}>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#E0E0E0] lg:-translate-x-px" />
            
            {timelineData.map((item, i) => (
              <div key={i} className={`timeline-item relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#4CAF50] rounded-full border-3 border-white shadow-md z-10 -translate-x-1/2 mt-2" />
                
                {/* Content */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                  <div className="bg-[#F5F5F5] rounded-2xl p-6 hover:bg-[#E8F5E9] transition-colors cursor-default">
                    <span className="inline-block bg-[#4CAF50] text-white text-xs font-semibold px-3 py-1 rounded">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl lg:text-2xl font-medium italic text-[#1A1A1A] leading-relaxed">
            "Our heritage is our foundation. Our innovation is our future. Together, they guide us toward creating a better tomorrow for our consumers, our employees, and the world."
          </p>
          <p className="text-sm text-[#999999] mt-6">— JTI</p>
        </div>
      </section>
    </div>
  );
}
