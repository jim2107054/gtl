import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { productCategories } from '@/data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', inquiryType: 'General Inquiry', productInterest: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">CONTACT US</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Contact Us</h1>
          <p className="text-lg text-[#666666] mt-4 max-w-2xl mx-auto leading-relaxed">
            Your questions and feedback are important to us. They help us to improve our services and provide you with better experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a href="#contact-form" className="text-lg font-medium text-[#1A1A1A] underline hover:text-[#4CAF50] transition-colors">General Inquiries</a>
            <a href="#contact-form" className="text-lg font-medium text-[#1A1A1A] underline hover:text-[#4CAF50] transition-colors">Product Feedback</a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-[#E8F5E9] rounded-2xl p-10 text-center">
              <CheckCircle className="w-12 h-12 text-[#4CAF50] mx-auto" />
              <p className="text-lg font-medium text-[#1A1A1A] mt-4">Thank you for reaching out! We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input required type="text" placeholder="First name" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm" />
                <input required type="text" placeholder="Last name" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input required type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm" />
                <input type="tel" placeholder="+1 234 567 890" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <select value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm">
                  {['General Inquiry', 'Product Query', 'Media Request', 'Investor Relations', 'Partnership'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <select value={formData.productInterest} onChange={e => setFormData({...formData, productInterest: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm">
                  <option value="">Select Product Interest (optional)</option>
                  {productCategories.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                </select>
              </div>
              <input required type="text" placeholder="How can we help?" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm" />
              <textarea required placeholder="Your message..." rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3.5 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-[#4CAF50] focus:outline-none transition-colors text-sm resize-y" />
              <div className="flex justify-end">
                <button type="submit" className="bg-[#4CAF50] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#388E3C] transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Office Info */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">JTI SA</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4CAF50] mt-0.5" />
                    <div className="text-sm">
                      <p>Rue Kazem-Radjavi 8</p>
                      <p>1202 Geneva, Switzerland</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#4CAF50]" />
                    <p className="text-sm">+41 22 703 07 77</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#4CAF50]" />
                    <a href="mailto:info@jti.com" className="text-sm text-[#4CAF50] hover:underline">info@jti.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#4CAF50] mt-0.5" />
                    <div className="text-sm">
                      <p>Monday – Friday</p>
                      <p className="text-[#666666]">08:30 – 17:30 CET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden bg-white h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="text-center text-[#999999]">
                  <MapPin className="w-12 h-12 mx-auto text-[#4CAF50]" />
                  <p className="mt-3 font-medium">JTI Headquarters</p>
                  <p className="text-sm mt-1">Rue Kazem-Radjavi 8, Geneva</p>
                  <p className="text-xs mt-4">Map integration available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Looking for a Career?</h3>
              <p className="text-[#666666] mt-1">Check out our open positions and join the team.</p>
            </div>
            <Link to="/careers" className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 rounded-lg font-semibold hover:bg-[#1A1A1A] hover:text-white transition-colors whitespace-nowrap">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
