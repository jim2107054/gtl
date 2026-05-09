import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { navLinks } from '@/data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl font-bold text-[#1A1A1A]">JTI</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#4CAF50] transition-colors rounded-lg hover:bg-gray-50">
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[200px] z-50">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2.5 text-sm text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#4CAF50] bg-green-50'
                          : 'text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:text-[#4CAF50] transition-colors rounded-lg hover:bg-gray-50">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-[#4CAF50] transition-colors rounded-lg hover:bg-gray-50">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#4CAF50] transition-colors rounded-lg hover:bg-gray-50"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 overflow-y-auto lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[#1A1A1A] rounded-lg hover:bg-gray-50"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-6 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="px-4 py-2.5 text-sm text-gray-600 hover:text-[#4CAF50] rounded-lg hover:bg-gray-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 text-base font-medium rounded-lg ${
                      location.pathname === link.path
                        ? 'text-[#4CAF50] bg-green-50'
                        : 'text-[#1A1A1A] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
