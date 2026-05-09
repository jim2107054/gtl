import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, Beaker } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { productCategories } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.querySelectorAll('.product-card'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true } }
    );
  }, []);

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="relative bg-[#F5F5F5] min-h-[400px] lg:min-h-[500px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=600&fit=crop" 
            alt="Tobacco leaves" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="text-sm text-[#999999] mb-4">
            <Link to="/" className="text-[#4CAF50] hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Products</span>
          </nav>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">PRODUCT PORTFOLIO</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Our Products</h1>
          <p className="text-base lg:text-lg text-[#666666] mt-4 max-w-xl leading-relaxed">
            From raw tobacco leaf to precision-engineered finished products, our portfolio spans every stage of the tobacco supply chain.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="WHAT WE OFFER" 
            title="Product Categories" 
            description="Our diverse product range serves manufacturers, blenders, and consumers worldwide with uncompromising quality." 
            align="center" 
          />
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {productCategories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/products/${cat.id}`} 
                className="product-card group bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-[#4CAF50] transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">{cat.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{cat.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-[#4CAF50] text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Query CTA */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-3xl p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">Need a Custom Solution?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
              Our product specialists are ready to help you find the perfect tobacco solution for your needs. Submit a product query and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="inline-block mt-8 bg-[#4CAF50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#388E3C] transition-colors">
              Submit Product Query
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Specs Links */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/products/diet-details" className="flex items-center justify-between bg-[#F5F5F5] rounded-2xl p-8 hover:bg-[#E8F5E9] transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-5 h-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">DIET Specifications</h3>
                  <p className="text-sm text-[#666666]">Detailed technical data on DIET tobacco products</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#4CAF50] transition-colors">
                <ArrowRight className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors" />
              </div>
            </Link>
            <Link to="/products/testing-details" className="flex items-center justify-between bg-[#F5F5F5] rounded-2xl p-8 hover:bg-[#E8F5E9] transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">Testing Protocols</h3>
                  <p className="text-sm text-[#666666]">Our comprehensive tobacco testing methodology</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#4CAF50] transition-colors">
                <ArrowRight className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
