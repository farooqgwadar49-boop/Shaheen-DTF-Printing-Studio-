import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MessageCircle, Menu, X, Globe, Layers, ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#categories', label: t.categories },
    { href: '#gallery', label: t.gallery },
    { href: '#customizer', label: language === 'ur' ? 'ماک اپ اسٹوڈیو' : '3D Mockup' },
    { href: '#calculator', label: t.calculator },
    { href: '#about', label: t.about },
    { href: '#reviews', label: t.reviews },
    { href: '#contact', label: t.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappGeneralUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! میں شاہین ڈی ٹی ایف پرنٹنگ کے بارے میں معلومات اور آرڈر کے لیے رابطہ کر رہا ہوں۔'
      : 'Hello Shaheen DTF Printing! I am interested in placing a custom print order.'
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          
          {/* Zone 1: Brand Wordmark & Professional Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {language === 'ur' ? 'شاہین ڈی ٹی ایف' : 'Shaheen DTF'}
              </span>
              <span className="text-xs font-medium text-slate-400 -mt-1 tracking-wider uppercase">
                {language === 'ur' ? 'پرنٹنگ اسٹوڈیو' : 'Printing Studio'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language toggle, Currency, WhatsApp CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Currency Switcher */}
            <button
              type="button"
              onClick={() => onCurrencyChange(currency === 'PKR' ? 'USD' : 'PKR')}
              aria-label="Toggle currency"
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors whitespace-nowrap"
            >
              <span className={currency === 'PKR' ? 'text-amber-400' : 'text-slate-400'}>PKR</span>
              <span className="mx-1 text-slate-600">/</span>
              <span className={currency === 'USD' ? 'text-amber-400' : 'text-slate-400'}>USD</span>
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400 hover:border-slate-700 transition-colors whitespace-nowrap"
              title="Switch Language / زبان تبدیل کریں"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'اردو' : 'English'}</span>
            </button>

            {/* Primary Action Button: WhatsApp Order */}
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/40 transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.orderWhatsApp}</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.orderWhatsApp} ({WHATSAPP_DISPLAY})</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors"
            >
              <span>{t.requestQuote}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
