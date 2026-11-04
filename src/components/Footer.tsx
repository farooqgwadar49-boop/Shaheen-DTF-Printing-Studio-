import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Layers, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;

  const quickLinks = [
    { href: '#home', label: language === 'ur' ? 'ہوم' : 'Home' },
    { href: '#categories', label: language === 'ur' ? 'پراڈکٹ کیٹیگریز' : 'Categories' },
    { href: '#customizer', label: language === 'ur' ? '3D ماک اپ اسٹوڈیو' : '3D Mockup Studio' },
    { href: '#calculator', label: language === 'ur' ? 'قیمت کیلکولیٹر' : 'Price Calculator' },
    { href: '#gallery', label: language === 'ur' ? 'سیمپلز' : 'Sample Gallery' },
    { href: '#about', label: language === 'ur' ? 'ہمارے متعلق' : 'About Us' },
    { href: '#reviews', label: language === 'ur' ? 'گاہکوں کی آراء' : 'Reviews' },
    { href: '#contact', label: language === 'ur' ? 'رابطہ کریں' : 'Contact Us' },
  ];

  const serviceLinks = [
    { label: language === 'ur' ? 'اوور سائزڈ ٹی شرٹس پرنٹنگ' : 'Oversized T-Shirt Printing' },
    { label: language === 'ur' ? 'ڈی ٹی ایف ٹرانسفر گینگ شیٹس' : 'DTF Gang Sheet Printing' },
    { label: language === 'ur' ? 'واٹر پروف ونائل اسٹیکرز' : 'Waterproof Vinyl Stickers' },
    { label: language === 'ur' ? 'اسٹریٹ ویئر فلیس ہڈیز' : 'Streetwear Fleece Hoodies' },
    { label: language === 'ur' ? 'کارپوریٹ پولو شرٹس و یونیفارمز' : 'Corporate Polo Shirts' },
  ];

  const whatsappUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! میں شاہین ڈی ٹی ایف پرنٹنگ سے رابطہ کرنا چاہتا ہوں۔'
      : 'Hello Shaheen DTF Printing! I would like to inquire about printing services.'
  );

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-md">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {language === 'ur' ? (
                  <>شاہین ڈی ٹی ایف <span className="text-amber-400 font-normal">پرنٹنگ</span></>
                ) : (
                  <>Shaheen DTF <span className="text-amber-400 font-normal">Printing</span></>
                )}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {t.brandDesc}
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              {t.services}
            </h4>
            <ul className="space-y-2 text-slate-400">
              {serviceLinks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-400">·</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              {t.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-mono text-slate-300">{WHATSAPP_DISPLAY}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>farooqgwadar49@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Gwadar & Across Pakistan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {t.rights}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Direct-to-Film (DTF) Specialists</span>
            <span>·</span>
            <span>Made with Precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
