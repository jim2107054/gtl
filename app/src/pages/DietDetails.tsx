import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Beaker, Shield, FlaskConical, Users, Leaf, Globe } from 'lucide-react';
import { dietProcessSteps, dietBenefits } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

const benefitIcons = [Beaker, Shield, FlaskConical, Users, Leaf, Globe];

export default function DietDetails() {
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
      <section className="bg-gradient-to-br from-[#E8F5E9] to-[#F5F5F5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#999999] mb-4">
            <Link to="/" className="text-[#4CAF50] hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="text-[#4CAF50] hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span>DIET Details</span>
          </nav>
          <span className="inline-block text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50] bg-[#4CAF50]/10 px-3 py-1 rounded">DIET TECHNOLOGY</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3">Distinctive Innovative Enhanced Tobacco</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-xl">Advanced science delivering reduced-risk tobacco products with the potential to significantly lower harmful compound levels.</p>
        </div>
      </section>

      {/* What is DIET */}
      <section className="bg-white py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">THE TECHNOLOGY</p>
              <h2 className="animate-in text-3xl font-semibold mt-2">What is DIET?</h2>
              <p className="animate-in text-[#1A1A1A] mt-6 leading-relaxed">
                DIET (Distinctive Innovative Enhanced Tobacco) is JTI's proprietary technology that reduces the levels of harmful and potentially harmful constituents (HPHCs) in tobacco while maintaining the sensory characteristics that adult consumers value.
              </p>
              <p className="animate-in text-[#1A1A1A] mt-4 leading-relaxed">
                Developed by our team of over 200 scientists at the Global Research Center in Geneva, DIET represents a significant advancement in tobacco harm reduction. The technology applies a unique processing method that selectively targets and reduces specific harmful compounds.
              </p>
              <p className="animate-in text-[#1A1A1A] mt-4 leading-relaxed">
                DIET products have been validated through extensive scientific studies, with results published in peer-reviewed journals. The technology is fully compliant with evolving regulatory frameworks for reduced-risk products worldwide.
              </p>
            </div>
            <div className="animate-in rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop" alt="Lab" className="w-full h-[350px] lg:h-[450px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* DIET Process */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">THE PROCESS</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">The DIET Process</h2>
          <div className="mt-12 relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#E0E0E0] lg:-translate-x-px" />
            {dietProcessSteps.map((step, i) => (
              <div key={i} className={`relative flex items-start mb-10 last:mb-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="absolute left-6 lg:left-1/2 w-10 h-10 bg-[#4CAF50] rounded-full border-3 border-white shadow-md z-10 -translate-x-1/2 flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">KEY BENEFITS</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">Why DIET Matters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dietBenefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="bg-[#F5F5F5] rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mt-5">{b.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">TECHNICAL DATA</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">Technical Specifications</h2>
          <div className="mt-10 bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="text-left text-white px-6 py-4 font-medium">Specification</th>
                  <th className="text-left text-white px-6 py-4 font-medium">DIET Cigarette</th>
                  <th className="text-left text-white px-6 py-4 font-medium">DIET HNB</th>
                  <th className="text-left text-white px-6 py-4 font-medium">DIET Blend</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['TPM Reduction', 'Up to 90%', 'Up to 95%', 'Up to 85%'],
                  ['Nicotine Delivery', 'Maintained', 'Optimized', 'Maintained'],
                  ['CO Reduction', 'Up to 99%', 'Up to 99%', 'Up to 95%'],
                  ['HPHC Reduction', '80-95%', '90-99%', '75-90%'],
                  ['Moisture Content', '12-14%', '10-12%', '11-13%'],
                  ['Certification', 'ISO 17025', 'ISO 17025', 'ISO 17025'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-6 py-4 ${j === 0 ? 'font-medium text-[#1A1A1A]' : 'text-[#666666]'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-semibold text-white">Interested in DIET Products?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Our product specialists are ready to help you find the perfect solution.</p>
            <Link to="/contact" className="inline-block mt-8 bg-[#4CAF50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#388E3C] transition-colors">
              Submit Product Query
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
