import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin } from 'lucide-react';
import { executives } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.exec-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">LEADERSHIP</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Leadership Team</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-2xl leading-relaxed">
            Meet the people guiding JTI's vision and strategy. Our leadership team brings decades of experience and a shared commitment to innovation and responsibility.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">EXECUTIVE TEAM</p>
          <h2 className="text-3xl font-semibold mt-2">Executive Leadership</h2>
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {executives.map((exec, i) => (
              <div key={i} className="exec-card bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#4CAF50] transition-all duration-300 group">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#4CAF50]/10 flex items-center justify-center text-2xl font-bold text-[#4CAF50]">
                    {exec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{exec.name}</h3>
                  <p className="text-sm text-[#4CAF50] font-medium mt-1">{exec.title}</p>
                  <p className="text-sm text-[#666666] mt-2 line-clamp-2">{exec.bio}</p>
                  <div className="mt-4">
                    <Linkedin className="w-5 h-5 text-[#999999] hover:text-[#4CAF50] cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">GOVERNANCE</p>
          <h2 className="text-3xl font-semibold mt-2">Board of Directors</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              { name: 'Hiroshi Kimura', role: 'Chairman of the Board' },
              { name: 'Eddy Pirard', role: 'Director' },
              { name: 'Takeshi Suzuki', role: 'Director' },
              { name: 'Maria Gonzalez', role: 'Independent Director' },
              { name: 'Peter Schmidt', role: 'Independent Director' },
              { name: 'Anne Dubois', role: 'Independent Director' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center text-sm font-semibold text-[#4CAF50]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-[#666666]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
