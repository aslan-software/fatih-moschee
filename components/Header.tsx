import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Über uns', href: '#about' },
    { name: 'Gebetszeiten', href: '#prayer-times' },
    { name: 'Aktivitäten', href: '#activities' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-emerald-900/95 backdrop-blur-sm text-white shadow-md">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-emerald-950 text-xs text-emerald-100/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} /> Mülheim an der Ruhr</span>
          <span className="flex items-center gap-1"><Phone size={14} /> +49 123 456789</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Mail size={14} /> info@fatih-moschee-mh.de</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-emerald-900 font-bold text-xl">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide text-white">Fatih Moschee</span>
              <span className="text-xs text-amber-400 tracking-wider uppercase">DITIB Mülheim</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-900 border-t border-emerald-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-800 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
