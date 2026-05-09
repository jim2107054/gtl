import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { productDetailData } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = productDetailData[slug || ''];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelectorAll('.animate-in'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
    );
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="text-[#4CAF50] mt-4 inline-block">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#999999] mb-4">
            <Link to="/" className="text-[#4CAF50] hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="text-[#4CAF50] hover:underline">Products</Link>
            <span className="mx-2">/</span>
            <span>{product.title}</span>
          </nav>
          <span className="inline-block text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50] bg-[#4CAF50]/10 px-3 py-1 rounded">Product Category</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-3">{product.title}</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-xl">{product.tagline}</p>
        </div>
      </section>

      <div ref={sectionRef}>
        {/* Overview */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">OVERVIEW</p>
                <h2 className="animate-in text-3xl font-semibold mt-2">What is {product.title}?</h2>
                {product.overview.map((p, i) => (
                  <p key={i} className="animate-in text-base text-[#1A1A1A] mt-4 leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="animate-in rounded-2xl overflow-hidden">
                <img src={`https://source.unsplash.com/800x600/?tobacco,industrial,${slug}`} alt={product.title} className="w-full h-[300px] lg:h-[400px] object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop'; }} />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Categories */}
        <section className="bg-[#F5F5F5] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">VARIETIES</p>
            <h2 className="animate-in text-3xl font-semibold mt-2">Types of {product.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {product.subCategories.map((sub, i) => (
                <div key={i} className="animate-in bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 flex items-center justify-center">
                    <Check className="w-10 h-10 text-[#4CAF50]" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{sub.title}</h3>
                    <p className="text-sm text-[#666666] mt-2 leading-relaxed">{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">KEY FEATURES</p>
            <h2 className="animate-in text-3xl font-semibold mt-2">Why Choose Our {product.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {product.features.map((f, i) => (
                <div key={i} className="animate-in flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">{f.title}</h4>
                    <p className="text-sm text-[#666666] mt-1 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs Table */}
        <section className="bg-[#F5F5F5] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="animate-in text-xs font-medium uppercase tracking-[0.08em] text-[#999999]">TECHNICAL DATA</p>
            <h2 className="animate-in text-3xl font-semibold mt-2">Technical Specifications</h2>
            <div className="animate-in mt-8 bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1A1A1A]">
                    <th className="text-left text-white px-6 py-4 text-sm font-medium">Specification</th>
                    <th className="text-left text-white px-6 py-4 text-sm font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}>
                      <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A]">{spec.name}</td>
                      <td className="px-6 py-4 text-sm text-[#666666]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-semibold text-white">Interested in {product.title}?</h2>
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
