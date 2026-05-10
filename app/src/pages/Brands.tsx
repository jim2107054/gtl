import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { brands, rrpBrands } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

function BrandModal({ brand, onClose }: { brand: typeof brands[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-8 lg:p-12 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#E0E0E0] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="flex justify-center mb-6">
          <div className="w-48 h-48 rounded-2xl overflow-hidden bg-[#F5F5F5] border border-[#E0E0E0]">
            <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-[#1A1A1A] text-center mt-2">{brand.name}</h3>
        <p className="text-[#666666] mt-4 text-center leading-relaxed">{brand.description}</p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#4CAF50]">{brand.fact}</p>
            <p className="text-xs text-[#666666] mt-1">Achievement</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#4CAF50]">{brand.founded}</p>
            <p className="text-xs text-[#666666] mt-1">Founded</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.querySelectorAll('.brand-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">OUR BRANDS</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Brands</h1>
          <p className="text-lg text-[#666666] mt-4">Creating fulfilling moments for adult consumers.</p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl overflow-hidden">
          <img src="tobacco_leaves_nature_1778404637722.png" alt="Premium Tobacco Leaves" className="w-full h-[200px] lg:h-[300px] object-cover" />
        </div>
      </div>

      {/* Brand Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">Meeting evolving needs: from tradition to innovation</h2>
          <p className="text-base text-[#1A1A1A] mt-6 leading-relaxed">
            We proudly craft and sell globally recognized brands, including Winston, Camel, Mevius and LD, along with trusted local brands that resonate with adult consumers worldwide.
          </p>
          <p className="text-sm text-[#999999] mt-4 italic">
            * Reduced-risk products are products with the potential to reduce the risks associated with smoking.
          </p>
        </div>
      </section>

      {/* Combustible Brands */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Combustible brands</h2>
          <p className="text-[#666666] mt-3 max-w-2xl leading-relaxed">
            We make and sell globally recognized tobacco brands like Winston, Camel, Mevius, and LD, as well as local brands with loyal followings all over the world.
          </p>
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {brands.map((brand, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedBrand(brand)}
                className="brand-card bg-white border border-[#E0E0E0] rounded-2xl aspect-square flex flex-col items-center justify-center p-6 hover:border-[#4CAF50] hover:shadow-md cursor-pointer transition-all duration-300 group"
              >
                <div className="w-full h-full mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-lg lg:text-xl font-bold text-[#1A1A1A] group-hover:text-[#4CAF50] transition-colors">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RRP Brands */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Reduced-Risk Products</h2>
          <p className="text-[#666666] mt-3 max-w-2xl leading-relaxed">
            Our commitment to innovation drives us to develop products with the potential to reduce risk compared to continued smoking.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {rrpBrands.map((brand, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedBrand(brand as any)}
                className="brand-card bg-white border border-[#E0E0E0] rounded-2xl aspect-square flex flex-col items-center justify-center p-6 hover:border-[#4CAF50] hover:shadow-md cursor-pointer transition-all duration-300 group"
              >
                <div className="w-full h-full mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img src={(brand as any).image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#4CAF50] transition-colors">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedBrand && <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />}
    </div>
  );
}
