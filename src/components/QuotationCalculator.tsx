import React, { useState } from 'react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Calculator, MessageCircle, Check, Tag, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { openWhatsApp, buildQuoteMessage } from '../utils/whatsapp';

interface QuotationCalculatorProps {
  language: Language;
  currency: Currency;
}

export const QuotationCalculator: React.FC<QuotationCalculatorProps> = ({ language, currency }) => {
  const t = TRANSLATIONS[language].calculator;

  const [category, setCategory] = useState<'tshirts' | 'dtf' | 'stickers' | 'clothing'>('tshirts');
  const [printSize, setPrintSize] = useState<'pocket' | 'a4' | 'a3' | 'gang_meter'>('a4');
  const [quantity, setQuantity] = useState<number>(10);
  const [grade, setGrade] = useState<'standard' | 'premium' | 'heavyweight'>('premium');

  // Pricing Matrix Logic
  // Base rates in PKR
  const baseRates = {
    tshirts: { standard: 950, premium: 1250, heavyweight: 1650 },
    dtf: { standard: 450, premium: 900, heavyweight: 1800 },
    stickers: { standard: 35, premium: 45, heavyweight: 65 },
    clothing: { standard: 2200, premium: 2850, heavyweight: 3600 },
  };

  const printSizeAdders = {
    pocket: 0,
    a4: 150,
    a3: 300,
    gang_meter: 600,
  };

  // Quantity Discount Thresholds
  let discountPercent = 0;
  if (category === 'stickers') {
    if (quantity >= 500) discountPercent = 40;
    else if (quantity >= 200) discountPercent = 30;
    else if (quantity >= 100) discountPercent = 20;
    else if (quantity >= 50) discountPercent = 10;
  } else {
    if (quantity >= 250) discountPercent = 35;
    else if (quantity >= 100) discountPercent = 25;
    else if (quantity >= 50) discountPercent = 20;
    else if (quantity >= 20) discountPercent = 15;
    else if (quantity >= 10) discountPercent = 10;
    else if (quantity >= 5) discountPercent = 5;
  }

  const rawBasePKR = baseRates[category][grade] + (category === 'stickers' ? 0 : printSizeAdders[printSize]);
  const discountedUnitPKR = Math.round(rawBasePKR * (1 - discountPercent / 100));
  const totalPKR = discountedUnitPKR * quantity;

  // Conversion rate PKR to USD ~ 265
  const PKR_TO_USD = 1 / 265;
  const discountedUnitUSD = Number((discountedUnitPKR * PKR_TO_USD).toFixed(2));
  const totalUSD = Number((totalPKR * PKR_TO_USD).toFixed(2));

  // Turnaround time
  let estimatedTurnaround = language === 'ur' ? '24 تا 48 گھنٹے' : '24 - 48 Hours';
  if (quantity > 200) {
    estimatedTurnaround = language === 'ur' ? '3 تا 5 دن' : '3 - 5 Days';
  } else if (category === 'dtf' && quantity <= 20) {
    estimatedTurnaround = language === 'ur' ? 'اسی دن روانگی' : 'Same Day Dispatch';
  }

  const categoryNames = {
    tshirts: language === 'ur' ? 'کسٹم کاٹن ٹی شرٹس' : 'Custom Cotton T-Shirts',
    dtf: language === 'ur' ? 'ڈی ٹی ایف ٹرانسفر شیٹس' : 'DTF Transfer Gang Sheets',
    stickers: language === 'ur' ? 'کسٹم ونائل اسٹیکرز' : 'Custom Vinyl Stickers',
    clothing: language === 'ur' ? 'اسٹریٹ ویئر ہڈیز اور ملبوسات' : 'Streetwear Hoodies & Apparel',
  };

  const handleSendWhatsApp = () => {
    const formattedUnit = currency === 'PKR' ? `Rs. ${discountedUnitPKR.toLocaleString()}` : `$${discountedUnitUSD}`;
    const formattedTotal = currency === 'PKR' ? `Rs. ${totalPKR.toLocaleString()}` : `$${totalUSD}`;

    const quoteMsg = buildQuoteMessage({
      category: categoryNames[category],
      size: t.printSizes[printSize],
      qty: quantity,
      grade: t.materialGrades[grade],
      unitPrice: formattedUnit,
      totalPrice: formattedTotal,
      currency: currency,
      language: language,
    });

    openWhatsApp(quoteMsg);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'فوری اور شفاف تخمینہ' : 'Direct Factory Rates'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1 to 4: Inputs on Left */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {t.step1}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'tshirts', label: language === 'ur' ? 'ٹی شرٹس' : 'T-Shirts' },
                  { id: 'dtf', label: language === 'ur' ? 'ڈی ٹی ایف' : 'DTF Prints' },
                  { id: 'stickers', label: language === 'ur' ? 'اسٹیکرز' : 'Stickers' },
                  { id: 'clothing', label: language === 'ur' ? 'ہڈیز و ملبوسات' : 'Hoodies' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setCategory(item.id as any);
                      if (item.id === 'dtf') setPrintSize('gang_meter');
                    }}
                    className={`py-2.5 px-2 rounded-xl border text-center font-semibold transition-all ${
                      category === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Print Size */}
            {category !== 'stickers' && (
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  {t.step2}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(Object.keys(t.printSizes) as (keyof typeof t.printSizes)[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPrintSize(key)}
                      className={`p-3 rounded-xl border text-start transition-all ${
                        printSize === key
                          ? 'bg-amber-400/10 border-amber-400 text-amber-400 font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-medium text-white">{t.printSizes[key]}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Quantity Slider & Number Stepper */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {t.step3}
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-amber-400 font-medium">
                    {discountPercent > 0 && `${t.quantityBadge} ${discountPercent}% OFF`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={category === 'stickers' ? 25 : 1}
                  max={category === 'stickers' ? 1000 : 300}
                  step={category === 'stickers' ? 25 : 1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="flex-1 accent-amber-400 cursor-pointer"
                />
                <div className="w-24 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-center text-white font-mono font-bold text-base tabular-nums">
                  {quantity} {language === 'ur' ? 'عدد' : 'pcs'}
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 mt-2.5 text-xs">
                {(category === 'stickers' ? [25, 50, 100, 250, 500, 1000] : [1, 5, 12, 25, 50, 100, 250]).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuantity(num)}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-colors ${
                      quantity === num
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Fabric / Material Grade */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {t.step4}
              </label>
              <div className="space-y-2 text-xs">
                {(['standard', 'premium', 'heavyweight'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g)}
                    className={`w-full p-3 rounded-xl border text-start flex items-center justify-between transition-all ${
                      grade === g
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400 font-semibold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{t.materialGrades[g]}</span>
                    {grade === g && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Quotation Card & WhatsApp Checkout */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-mono bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                <Tag className="w-3 h-3" />
                <span>{currency}</span>
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              {language === 'ur' ? 'کوٹیشن کا خلاصہ' : 'Quote Breakdown'}
            </h3>

            {/* Line items */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 border-b border-slate-800 pb-6 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{language === 'ur' ? 'پراڈکٹ' : 'Selected Item'}:</span>
                <span className="font-semibold text-white">{categoryNames[category]}</span>
              </div>

              {category !== 'stickers' && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{language === 'ur' ? 'پرنٹ سائز' : 'Print Size'}:</span>
                  <span className="font-medium text-white">{t.printSizes[printSize]}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-slate-400">{language === 'ur' ? 'تعداد' : 'Quantity'}:</span>
                <span className="font-bold text-white tabular-nums">{quantity} {language === 'ur' ? 'عدد' : 'units'}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">{language === 'ur' ? 'رعایت' : 'Volume Discount'}:</span>
                <span className="font-bold text-emerald-400 tabular-nums">
                  {discountPercent > 0 ? `-${discountPercent}%` : (language === 'ur' ? 'کوئی نہیں' : 'Standard')}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400">{t.unitPrice}:</span>
                <span className="font-semibold text-amber-300 tabular-nums">
                  {currency === 'PKR' ? `Rs. ${discountedUnitPKR.toLocaleString()}` : `$${discountedUnitUSD}`}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.turnaroundTime}:</span>
                </span>
                <span className="font-medium text-slate-200">{estimatedTurnaround}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="mb-6">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                {t.totalEstimate}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 tabular-nums">
                {currency === 'PKR' ? `Rs. ${totalPKR.toLocaleString()}` : `$${totalUSD.toLocaleString()}`}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {language === 'ur' ? 'تمام ٹیکسز شامل ہیں۔ پاکستان بھر میں کیش آن ڈیلیوری دستیاب ہے۔' : 'Includes all taxes. Free sample swatches on orders over 50+ units.'}
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.sendWhatsAppQuote}</span>
            </button>

            {/* Help Callout */}
            <div className="mt-4 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{t.quoteHelp}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
