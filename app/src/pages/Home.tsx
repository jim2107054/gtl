import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import InteractiveMap from '@/components/InteractiveMap';
import { impactStats, concernCards } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero Section ─── */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 })
      .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10" />
      <img 
        src="premium_tobacco_hero_1778404448515.png" 
        alt="JTI Corporate Headquarters" 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Welcome to JTI
        </h1>
        <p className="hero-subtitle text-lg sm:text-xl text-white/90 mt-6 max-w-xl mx-auto">
          This is the place to discover our culture and our business.
        </p>
      </div>
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70">
        <div className="w-px h-10 bg-white/50 relative overflow-hidden">
          <div className="w-full h-2 bg-white absolute animate-bounce top-0" />
        </div>
        <span className="text-xs text-white/70 font-medium">Scroll to explore</span>
      </div>
    </section>
  );
}

/* ─── Impact Stats ─── */
function ImpactSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStartCount(true); },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="OUR IMPACT" title="Making a Difference Globally" align="center" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
          {impactStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#4CAF50]">
                {startCount && <CountUp end={stat.number} duration={2} separator="," />}
                {stat.suffix}
              </div>
              <p className="text-sm lg:text-base text-[#666666] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Who We Are ─── */
function WhoWeAreSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.animate-in'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <section className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">WHO WE ARE</p>
          <h2 className="animate-in text-3xl lg:text-4xl font-semibold mt-2 text-[#1A1A1A]">Who is JTI?</h2>
          <p className="animate-in text-base lg:text-lg text-[#1A1A1A] mt-6 leading-relaxed">
            JTI is a modern, dynamic company, and our purpose of creating fulfilling moments for consumers, while also creating a better future, is the compass to all our activities.
          </p>
          <p className="animate-in text-base lg:text-lg text-[#1A1A1A] mt-4 leading-relaxed">
            We are committed to making our business not only the fastest growing of its kind, but also the most innovative and sustainably run.
          </p>
        </div>
        <div className="animate-in mt-12 rounded-2xl overflow-hidden">
          <img 
            src="tobacco_leaves_nature_1778404637722.png" 
            alt="Premium Tobacco Leaves" 
            className="w-full h-[300px] lg:h-[450px] object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Capacity Map ─── */
function CapacityMapSection() {

  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="GLOBAL REACH" title="Market Capture Map" description="Explore our global footprint across 130+ markets. Hover over each region to discover our market presence and key metrics." align="center" />
        <div className="mt-12">
          <InteractiveMap height="600px" />
        </div>
      </div>
    </section>
  );
}

/* ─── Brands Preview ─── */
function BrandsPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.animate-in'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <section className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">OUR BRANDS</p>
        <h2 className="animate-in text-3xl lg:text-4xl font-semibold mt-2 text-[#1A1A1A] max-w-2xl">
          Delivering exceptional consumer experiences
        </h2>
        <p className="animate-in text-base lg:text-lg text-[#666666] mt-4 max-w-xl leading-relaxed">
          We are not just keeping pace with change; we are driving it. By developing tobacco and nicotine experiences that align with the evolving preferences of consumers, we are at the forefront of shaping the future.
        </p>
        <Link to="/brands" className="animate-in block mt-10 relative rounded-2xl overflow-hidden group">
          <img 
            src="premium_tobacco_products_1778404673505.png" 
            alt="Premium Tobacco Products" 
            className="w-full h-[280px] lg:h-[400px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-2 group-hover:bg-white transition-colors">
            <span className="font-semibold text-[#1A1A1A]">Our Brands</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ─── Concerns Preview ─── */
function ConcernsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.animate-in'), 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="OUR CONCERNS" title="Our Sister Concerns" description="JTI operates through a network of specialized companies, each focused on delivering excellence in their respective fields." align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {concernCards.map((card, i) => (
            <div key={i} className="animate-in bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#4CAF50] relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#4CAF50]" />
              <h3 className="text-xl font-semibold text-[#1A1A1A]">{card.name}</h3>
              <p className="text-sm text-[#666666] mt-3 leading-relaxed">{card.description}</p>
              <div className="flex items-center gap-2 mt-4 text-[#4CAF50] text-sm font-medium">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Explore Section (Dark) ─── */
function ExploreSection() {
  const cards = [
    { title: 'Freedom to be yourself', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop' },
    { title: 'What we offer', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
    { title: 'Life at JTI', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop' },
  ];

  return (
    <section className="bg-[#1A1A1A] py-20 lg:py-28 rounded-3xl mx-4 lg:mx-8 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-400">EXPLORE JTI</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mt-2 text-white">What are you curious about today?</h2>
            <p className="text-gray-400 mt-2">Here are some suggestions to get you inspired.</p>
          </div>
        </div>
        <div className="flex gap-5 mt-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {cards.map((card, i) => (
            <div key={i} className="flex-shrink-0 w-[320px] lg:w-[380px] snap-start bg-[#2D2D2D] rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <span className="text-white font-medium">{card.title}</span>
                <div className="w-9 h-9 rounded-full bg-[#444] group-hover:bg-[#4CAF50] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Careers CTA ─── */
function CareersCTASection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-10 lg:p-16">
            <h2 className="text-3xl font-semibold text-[#1A1A1A]">Job opportunities</h2>
            <Link to="/careers" className="inline-block mt-6 bg-[#1A1A1A] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#333] transition-colors">
              Discover all
            </Link>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <img 
              src="tobacco_corporate_team_1778404763781.png" 
              alt="Professional Team at JTI" 
              className="w-full h-[250px] lg:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <div className="pt-16 lg:pt-[72px]">
      <HeroSection />
      <ImpactSection />
      <WhoWeAreSection />
      <CapacityMapSection />
      <BrandsPreviewSection />
      <ConcernsSection />
      <ExploreSection />
      <CareersCTASection />
    </div>
  );
}
