import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import { Users, Leaf, Lightbulb, Shield, Globe, Zap, Award, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { coreValues } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

const valueIcons = [Users, Leaf, Lightbulb, Shield, Globe, Zap, Award, Heart];

const keyFacts = [
  { number: 45000, suffix: '+', label: 'Employees' },
  { number: 130, suffix: '+', label: 'Markets' },
  { number: 60, suffix: '+', label: 'Years of Heritage' },
  { number: 400, suffix: '+', label: 'Brands' },
];

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const factsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!factsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartCount(true); },
      { threshold: 0.15 }
    );
    observer.observe(factsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop" alt="JTI HQ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/95 via-[#F5F5F5]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">ABOUT JTI</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Purpose</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-lg">
            Creating fulfilling moments for consumers while building a better future. This is the compass that guides everything we do.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">PHILOSOPHY</p>
              <h2 className="text-3xl font-semibold mt-2">Who We Are</h2>
              <p className="text-[#1A1A1A] mt-6 leading-relaxed">
                JTI is a leading international tobacco company with operations in more than 130 countries. We are the global owner of both Winston and Camel, and we make the tobacco variant Mevius and LD. We also sell worldwide acclaimed premium cigars in key markets.
              </p>
              <p className="text-[#1A1A1A] mt-4 leading-relaxed">
                We're also at the forefront of the Reduced-Risk Product category with our Ploom heated tobacco stick, Nordic Spirit nicotine pouches and Logic vaping products.
              </p>
              <p className="text-[#1A1A1A] mt-4 leading-relaxed">
                Headquartered in Geneva, Switzerland, we employ over 45,000 people across the world. We were a part of Japan Tobacco Group of Companies until our initial public offering in 2018.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-10 border-l-4 border-[#4CAF50]">
              <p className="text-xl lg:text-2xl font-medium italic text-[#1A1A1A] leading-relaxed">
                "We are committed to making our business not only the fastest growing of its kind, but also the most innovative and sustainably run."
              </p>
              <p className="text-sm text-[#999999] mt-6">— JTI Leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="OUR VALUES" title="What Drives Us" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((val, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <Icon className="w-10 h-10 text-[#4CAF50]" />
                  <h3 className="text-lg font-semibold mt-4">{val.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">OUR MISSION</p>
          <div className="flex justify-center gap-4 mt-6">
            <span className="block w-20 h-0.5 bg-[#4CAF50]" />
            <span className="block w-20 h-0.5 bg-[#4CAF50]" />
          </div>
          <p className="text-2xl lg:text-4xl font-semibold text-white mt-8 leading-snug">
            To be the most innovative, sustainable, and fastest-growing company in our industry, creating fulfilling moments for consumers while making a positive impact on society.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <span className="block w-20 h-0.5 bg-[#4CAF50]" />
            <span className="block w-20 h-0.5 bg-[#4CAF50]" />
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-white py-20" ref={factsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFacts.map((fact, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#4CAF50]">
                  {startCount && <CountUp end={fact.number} duration={2} separator="," />}
                  {fact.suffix}
                </div>
                <p className="text-base text-[#666666] mt-2">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold">Meet Our Leadership</h2>
              <p className="text-[#666666] mt-2">Get to know the people guiding our company forward.</p>
            </div>
            <Link to="/leadership" className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#1A1A1A] hover:text-white transition-colors whitespace-nowrap">
              View Leadership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
