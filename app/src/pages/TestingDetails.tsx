import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Beaker, Eye, Bug, Wind, Timer } from 'lucide-react';
import { testingCategories, certifications } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

const testIcons = [FileText, Beaker, Eye, Bug, Wind, Timer];

const testSteps = [
  { title: 'Sample Intake', desc: 'Receiving and logging samples with unique identifiers and chain of custody documentation.' },
  { title: 'Preparation', desc: 'Sample conditioning and preparation for analysis under controlled laboratory conditions.' },
  { title: 'Analysis', desc: 'Running tests using validated analytical methods and calibrated equipment.' },
  { title: 'Quality Review', desc: 'Cross-checking results against established specifications and standards.' },
  { title: 'Documentation', desc: 'Generating detailed test reports with full traceability and audit trails.' },
  { title: 'Certification', desc: 'Issuing quality certificates and regulatory compliance documentation.' },
];

export default function TestingDetails() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll('.animate-in'),
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
          <nav className="text-sm text-[#999999] mb-4">
            <Link to="/" className="text-[#4CAF50] hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="text-[#4CAF50] hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span>Testing Details</span>
          </nav>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">QUALITY ASSURANCE</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Tobacco Testing & Quality Control</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-xl">Our comprehensive testing protocols ensure the highest standards of quality, safety, and consistency across every product.</p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">OUR APPROACH</p>
              <h2 className="animate-in text-3xl font-semibold mt-2">Traceability in Every Step</h2>
              <p className="animate-in text-[#1A1A1A] mt-6 leading-relaxed">
                From the moment raw tobacco arrives at our facilities to the final product that reaches consumers, every step of our testing process is designed to ensure uncompromising quality. Our laboratories are equipped with the latest analytical instrumentation and staffed by highly trained scientists.
              </p>
              <p className="animate-in text-[#1A1A1A] mt-4 leading-relaxed">
                We test for physical properties, chemical composition, sensory characteristics, microbiological safety, and smoke chemistry. Each test follows internationally recognized methodologies and is conducted under strict quality management systems.
              </p>
              <p className="animate-in text-[#1A1A1A] mt-4 leading-relaxed">
                Our quality data management system provides full traceability, allowing us to track every sample from intake through to final certification, ensuring complete accountability at every stage.
              </p>
            </div>
            <div className="animate-in rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop" alt="Lab" className="w-full h-[300px] lg:h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Categories */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">CAPABILITIES</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">Testing Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testingCategories.map((cat, i) => {
              const Icon = testIcons[i];
              return (
                <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <Icon className="w-10 h-10 text-[#4CAF50]" />
                  <h3 className="text-xl font-semibold mt-5">{cat.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-[#666666] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">OUR PROCESS</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">Our Testing Process</h2>
          <div className="mt-12 relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#E0E0E0] lg:-translate-x-px" />
            {testSteps.map((step, i) => (
              <div key={i} className={`relative flex items-start mb-10 last:mb-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="absolute left-6 lg:left-1/2 w-10 h-10 bg-[#4CAF50] rounded-full border-3 border-white shadow-md z-10 -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold">Accreditations</h3>
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            {certifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#E0E0E0] flex items-center justify-center text-xs font-semibold text-[#1A1A1A] hover:border-[#4CAF50] transition-colors">
                  {cert.split(' ')[0]}
                </div>
                <span className="text-sm text-[#666666]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-semibold text-white">Need Testing Information?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Our lab team is ready to answer your questions about our testing methodologies.</p>
            <Link to="/contact" className="inline-block mt-8 bg-[#4CAF50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#388E3C] transition-colors">
              Contact Our Lab Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
