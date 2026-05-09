import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/siteData';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white">JTI</Link>
            <div className="mt-4 text-sm text-gray-400 leading-relaxed">
              <p>JTI SA</p>
              <p>Rue Kazem-Radjavi 8</p>
              <p>1202 Geneva</p>
              <p className="mt-2">P: +41 22 703 07 77</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Our Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Business */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Our Business</h4>
            <ul className="space-y-2.5">
              {footerLinks.business.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; 2025 JTI. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-1"></span>
            Green Mode Available
          </div>
        </div>
      </div>
    </footer>
  );
}
