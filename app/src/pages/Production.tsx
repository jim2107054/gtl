import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Scale, Droplets, Scissors, FlaskConical, TestTube, Package, Truck, ShieldCheck } from 'lucide-react';
import { productionSteps } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

const stepIcons: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-6 h-6" />, Scale: <Scale className="w-6 h-6" />, Droplets: <Droplets className="w-6 h-6" />,
  Scissors: <Scissors className="w-6 h-6" />, FlaskConical: <FlaskConical className="w-6 h-6" />, TestTube: <TestTube className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />, Truck: <Truck className="w-6 h-6" />,
};

export default function Production() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flowRef.current) return;
    gsap.fromTo(flowRef.current.querySelectorAll('.flow-node'),
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: flowRef.current, start: 'top 80%', once: true } }
    );
    gsap.fromTo('.flow-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'power2.inOut',
        scrollTrigger: { trigger: flowRef.current, start: 'top 70%', once: true } }
    );
  }, []);

  useEffect(() => {
    if (!stepsRef.current) return;
    gsap.fromTo(stepsRef.current.querySelectorAll('.mfg-step'),
      { x: (i: number) => (i % 2 === 0 ? -40 : 40), opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop" alt="Production" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/95 via-[#F5F5F5]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">PRODUCTION</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Production Process</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-xl leading-relaxed">
            From leaf to product, every step in our manufacturing process is designed with precision, quality, and transparency in mind.
          </p>
        </div>
      </section>

      {/* Job Flow */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">PROCESS FLOW</p>
          <h2 className="text-3xl font-semibold mt-2">From Leaf to Product</h2>
          <div ref={flowRef} className="mt-12">
            {/* Desktop flow */}
            <div className="hidden lg:flex items-center justify-between relative">
              <div className="flow-line absolute top-1/2 left-0 right-0 h-0.5 bg-[#E0E0E0] -translate-y-1/2 origin-left" />
              {productionSteps.map((step, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="flow-node relative z-10 flex flex-col items-center group"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${activeStep === i ? 'bg-[#E8F5E9] border-[#4CAF50] text-[#4CAF50]' : 'bg-white border-[#E0E0E0] text-gray-400 group-hover:border-[#4CAF50] group-hover:text-[#4CAF50]'}`}>
                    {stepIcons[step.icon]}
                  </div>
                  <span className="text-xs font-medium mt-3 text-[#666666] text-center w-24">{step.title}</span>
                </button>
              ))}
            </div>
            {/* Mobile flow */}
            <div className="lg:hidden flex flex-col gap-6">
              {productionSteps.map((step, i) => (
                <button key={i} onClick={() => setActiveStep(activeStep === i ? null : i)} className="flex items-center gap-4 text-left">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all ${activeStep === i ? 'bg-[#E8F5E9] border-[#4CAF50] text-[#4CAF50]' : 'bg-white border-[#E0E0E0] text-gray-400'}`}>
                    {stepIcons[step.icon]}
                  </div>
                  <span className="font-medium text-[#1A1A1A]">{step.title}</span>
                </button>
              ))}
            </div>
            {/* Detail Panel */}
            {activeStep !== null && (
              <div className="mt-10 bg-[#F5F5F5] rounded-2xl p-8 animate-in fade-in">
                <h3 className="text-2xl font-semibold">{productionSteps[activeStep].title}</h3>
                <p className="text-[#666666] mt-3 leading-relaxed">{productionSteps[activeStep].description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Manufacturing Steps */}
      <section className="bg-[#F5F5F5] py-20" ref={stepsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {productionSteps.map((step, i) => (
            <div key={i} className={`mfg-step grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">STEP {i + 1}</p>
                <h3 className="text-2xl font-semibold mt-2">{step.title}</h3>
                <p className="text-base text-[#1A1A1A] mt-4 leading-relaxed">{step.description}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={`https://source.unsplash.com/800x600/?factory,industrial,${step.title}`}
                  alt={step.title}
                  className="w-full h-[250px] lg:h-[320px] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop'; }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Traceability Banner */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-12 h-12 text-[#4CAF50] mx-auto" />
          <h2 className="text-3xl font-semibold text-white mt-6">Traceability in Every Step</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Every product can be traced back through every stage of production. From the farm where the leaf was grown to the store where it was sold — complete transparency, complete accountability.
          </p>
        </div>
      </section>

      {/* DIET Deep Dive */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">SPECIAL FOCUS</p>
              <h2 className="text-3xl font-semibold mt-2">DIET: Distinctive Innovative Enhanced Tobacco</h2>
              <p className="text-[#1A1A1A] mt-4 leading-relaxed">
                Our proprietary DIET technology is integrated directly into the manufacturing process, allowing us to produce reduced-risk tobacco at scale without compromising on quality or efficiency.
              </p>
              <Link to="/products/diet-details" className="inline-block mt-6 bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#388E3C] transition-colors">
                Explore DIET Specifications
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop" alt="DIET Processing" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">SPECIAL FOCUS</p>
              <h2 className="text-3xl font-semibold mt-2">Quality Testing at Every Stage</h2>
              <p className="text-[#1A1A1A] mt-4 leading-relaxed">
                Our testing protocols are integrated at every stage of production, from raw material inspection through to finished product validation. No product leaves our facilities without passing comprehensive quality checks.
              </p>
              <Link to="/products/testing-details" className="inline-block mt-6 bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#388E3C] transition-colors">
                View Testing Details
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden lg:order-1">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop" alt="Testing Lab" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
