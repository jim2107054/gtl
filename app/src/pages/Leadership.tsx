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
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={[
                      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop',
                      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&h=1200&fit=crop'
                    ][i]} 
                    alt={exec.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{exec.name}</h3>
                  <p className="text-sm text-[#4CAF50] font-medium mt-1">{exec.title}</p>
                  <p className="text-sm text-[#666666] mt-2 line-clamp-2">{exec.bio}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Linkedin className="w-5 h-5 text-[#999999] hover:text-[#4CAF50] cursor-pointer transition-colors" />
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">OFFICIAL</span>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { name: 'Hiroshi Kimura', role: 'Chairman of the Board', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop' },
              { name: 'Eddy Pirard', role: 'Director', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop' },
              { name: 'Takeshi Suzuki', role: 'Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
              { name: 'Maria Gonzalez', role: 'Independent Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
              { name: 'Peter Schmidt', role: 'Independent Director', img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop' },
              { name: 'Anne Dubois', role: 'Independent Director', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-sm transition-all group overflow-hidden">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative border-2 border-[#E0E0E0] group-hover:border-[#4CAF50] transition-colors">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{member.name}</p>
                  <p className="text-sm text-[#4CAF50] font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
