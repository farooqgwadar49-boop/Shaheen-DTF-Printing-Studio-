import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MessageCircle, Calculator, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface HeroProps {
  language: Language;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCalculator }) => {
  const t = TRANSLATIONS[language].hero;

  const whatsappUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! میں شاہین ڈی ٹی ایف پرنٹنگ سے کسٹم پرنٹنگ، ٹی شرٹس یا ڈی ٹی ایف رولز کا فوری آرڈر دینا چاہتا ہوں۔'
      : 'Hello Shaheen DTF Printing! I would like to get a quote and place a custom print order.'
  );

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:py-24 border-b border-slate-900">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_print_workshop_1793754021191.jpg"
          alt="Shaheen DTF Printing Studio and DTF Printing Press"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Subtle Regional Trust / Scope Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-amber-400 text-xs font-medium backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight mb-6">
            <span className="block text-slate-100">{t.titlePrimary}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              {t.titleSecondary}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            {/* Primary WhatsApp Order CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.ctaWhatsApp}</span>
              <span className="text-xs opacity-90">({WHATSAPP_DISPLAY})</span>
            </a>

            {/* Instant Price Calculator CTA */}
            <button
              type="button"
              onClick={onOpenCalculator}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm backdrop-blur-sm transition-all hover:border-amber-400/60 hover:-translate-y-0.5"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>{t.ctaQuote}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                {t.stat1Number}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.stat1Label}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums tracking-tight">
                {t.stat2Number}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.stat2Label}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums tracking-tight">
                {t.stat3Number}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.stat3Label}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                {t.stat4Number}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.stat4Label}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
