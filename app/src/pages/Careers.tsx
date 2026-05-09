import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, MapPin, Briefcase, Clock, ChevronDown, Upload, TrendingUp, Globe, Heart, Award, FlaskConical, Users } from 'lucide-react';
import { jobs, testimonials } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [locFilter, setLocFilter] = useState('All');
  const [expFilter, setExpFilter] = useState('All');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!benefitsRef.current) return;
    gsap.fromTo(benefitsRef.current.querySelectorAll('.benefit-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: benefitsRef.current, start: 'top 80%', once: true } }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const filtered = jobs.filter(j => {
    const mSearch = !search || j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase());
    const mDept = deptFilter === 'All' || j.department === deptFilter;
    const mLoc = locFilter === 'All' || j.location === locFilter;
    const mExp = expFilter === 'All' || j.experience === expFilter;
    return mSearch && mDept && mLoc && mExp;
  });

  const departments = ['All', ...new Set(jobs.map(j => j.department))];
  const locations = ['All', ...new Set(jobs.map(j => j.location))];
  const experiences = ['All', ...new Set(jobs.map(j => j.experience))];

  const benefitIcons = [TrendingUp, Globe, Heart, Award, Users, FlaskConical];

  const benefits = [
    { title: 'Career Development', desc: 'Structured career paths, mentorship programs, and continuous learning opportunities.' },
    { title: 'Global Mobility', desc: 'Opportunities to work across 130+ markets with international assignments.' },
    { title: 'Work-Life Balance', desc: 'Flexible working arrangements, wellness programs, and generous leave policies.' },
    { title: 'Competitive Rewards', desc: 'Market-competitive salaries, performance bonuses, and comprehensive benefits.' },
    { title: 'Inclusive Culture', desc: 'A diverse and welcoming environment where everyone can be themselves.' },
    { title: 'Innovation', desc: 'Work on cutting-edge products and technologies shaping the future.' },
  ];

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="bg-[#F5F5F5] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#4CAF50]">CAREERS</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-2">Job Opportunities</h1>
              <p className="text-lg text-[#666666] mt-4 leading-relaxed">
                Join one of the world's most challenging and rewarding industries. Whether you're looking to grow, innovate or make a real impact, we're here to support your journey.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team" className="w-full h-[250px] lg:h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Our Open Positions</h2>
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <input 
                type="text" 
                placeholder="Search positions..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#F5F5F5] rounded-full text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 transition-all"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)} className="px-4 py-3 bg-[#F5F5F5] rounded-lg text-sm focus:outline-none">
                {departments.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select value={locFilter} onChange={e => setLocFilter(e.target.value)} className="px-4 py-3 bg-[#F5F5F5] rounded-lg text-sm focus:outline-none">
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <select value={expFilter} onChange={e => setExpFilter(e.target.value)} className="px-4 py-3 bg-[#F5F5F5] rounded-lg text-sm focus:outline-none">
                {experiences.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
          </div>
          <p className="text-sm text-[#999999] mt-4">Results: {filtered.length}</p>

          {/* Job Listings */}
          <div className="mt-8 space-y-3">
            {filtered.map(job => (
              <div key={job.id} className="border border-[#E0E0E0] rounded-xl hover:border-[#4CAF50] transition-colors">
                <button 
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 text-left gap-3"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[#666666]">
                      <span className="bg-[#F5F5F5] px-3 py-0.5 rounded text-xs">{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.contract}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.experience}</span>
                    </div>
                  </div>
                  <span className="text-sm text-[#4CAF50] font-medium whitespace-nowrap flex items-center gap-1">
                    {expandedJob === job.id ? 'Close' : 'View Details'} <ChevronDown className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                  </span>
                </button>
                {expandedJob === job.id && (
                  <div className="px-5 pb-6 border-t border-[#E0E0E0]">
                    <p className="text-[#1A1A1A] mt-4 leading-relaxed">{job.description}</p>
                    <div className="mt-6 p-6 bg-[#F5F5F5] rounded-xl border-2 border-dashed border-[#E0E0E0]">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-[#999999] mx-auto" />
                        <p className="text-sm text-[#999999] mt-3">Drag and drop your resume here, or click to browse</p>
                        <p className="text-xs text-[#999999] mt-1">PDF, DOC, DOCX up to 5MB</p>
                        <button className="mt-4 bg-[#4CAF50] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#388E3C] transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why JTI */}
      <section className="bg-[#F5F5F5] py-20" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">WHY JTI</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="benefit-card bg-white rounded-2xl p-8">
                  <Icon className="w-10 h-10 text-[#4CAF50]" />
                  <h3 className="text-xl font-semibold mt-5">{b.title}</h3>
                  <p className="text-sm text-[#666666] mt-2 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="min-h-[200px]">
            <p className="text-xl lg:text-2xl font-medium italic text-[#1A1A1A] leading-relaxed transition-opacity duration-500">
              "{testimonials[testimonialIdx].quote}"
            </p>
            <div className="mt-6">
              <p className="font-medium">{testimonials[testimonialIdx].name}</p>
              <p className="text-sm text-[#666666]">{testimonials[testimonialIdx].title}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setTestimonialIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? 'bg-[#4CAF50]' : 'bg-[#E0E0E0]'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
