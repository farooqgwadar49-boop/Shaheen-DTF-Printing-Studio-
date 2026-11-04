import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Printer, ShieldCheck, Zap, Truck, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  const features = [
    {
      icon: Printer,
      title: t.feature1Title,
      desc: t.feature1Desc,
    },
    {
      icon: ShieldCheck,
      title: t.feature2Title,
      desc: t.feature2Desc,
    },
    {
      icon: Zap,
      title: t.feature3Title,
      desc: t.feature3Desc,
    },
    {
      icon: Truck,
      title: t.feature4Title,
      desc: t.feature4Desc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'شاہین ڈی ٹی ایف پرنٹنگ کا تعارف' : 'Our Craft & Facility'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-amber-300/90 font-medium">
              {t.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.storyP1}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {t.storyP2}
            </p>

            {/* Quick Badges in Natural Prose */}
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400 font-medium">
              <span>Japanese Piezo Printheads</span>
              <span aria-hidden="true">·</span>
              <span>OEKO-TEX Certified Inks</span>
              <span aria-hidden="true">·</span>
              <span>Fast Doorstep Delivery in Pakistan</span>
            </div>
          </div>

          {/* Workshop Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[16/10]">
              <img
                src="/src/assets/images/hero_print_workshop_1793754021191.jpg"
                alt="Production Lab and DTF Textile Printers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-1">
                  {language === 'ur' ? 'ورکشاپ اور تیاری' : 'Production Studio'}
                </div>
                <div className="text-sm sm:text-base font-bold">
                  {language === 'ur'
                    ? 'جدید جاپانی ڈی ٹی ایف پرنٹنگ اور ٹیکسٹائل یونٹ'
                    : 'High-Density Textile Printing & Direct-to-Film Laboratory'}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
