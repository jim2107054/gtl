import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { concernCards } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function Concerns() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.concern-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">OUR CONCERNS</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Sister Concerns</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-2xl leading-relaxed">
            JTI operates through a network of specialized companies, each focused on delivering excellence in their respective fields.
          </p>
        </div>
      </section>

      {/* Concerns Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {concernCards.map((card, i) => (
              <div key={i} className="concern-card group bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={[
                      'tobacco_leaves_nature_1778404637722.png',
                      'premium_tobacco_hero_1778404448515.png',
                      'tobacco_manufacturing_lab_1778404779207.png',
                      'premium_tobacco_products_1778404673505.png'
                    ][i % 4]} 
                    alt={card.name} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#1A1A1A]">{card.name}</h3>
                  <p className="text-sm text-[#666666] mt-1">{card.fullName}</p>
                  <p className="text-base text-[#1A1A1A] mt-4 leading-relaxed">{card.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {card.tags.map((tag, j) => (
                      <span key={j} className="text-xs bg-[#4CAF50]/10 text-[#4CAF50] px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-5 text-[#4CAF50] text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
