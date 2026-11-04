import React from 'react';
import { Language, Currency, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowUpRight, MessageCircle, Shield, Check } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface CategoriesSectionProps {
  language: Language;
  currency: Currency;
  onSelectCategory: (categoryKey: string) => void;
  onOpenProductModal: (product: Product) => void;
  products: Product[];
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  language,
  currency,
  onSelectCategory,
  onOpenProductModal,
  products,
}) => {
  const t = TRANSLATIONS[language].categoriesSection;

  const categories = [
    {
      id: 'tshirts',
      title: t.tshirtsTitle,
      description: t.tshirtsDesc,
      image: '/src/assets/images/product_custom_tshirts_1793754021957.jpg',
      pricePKR: 950,
      priceUSD: 3.6,
      unitEn: 'per piece',
      unitUr: 'فی ٹی شرٹ',
      specsEn: ['100% Combed Cotton', 'Bio-Washed', '1440 DPI DTF Print'],
      specsUr: ['100% کومبڈ کاٹن', 'بایو واشڈ فیبرک', '1440 ڈی پی آئی پرنٹ'],
      sampleProductId: 'prod-tshirt-heavyweight'
    },
    {
      id: 'dtf',
      title: t.dtfTitle,
      description: t.dtfDesc,
      image: '/src/assets/images/product_dtf_transfers_1793754022228.jpg',
      pricePKR: 450,
      priceUSD: 1.7,
      unitEn: 'per sheet/meter',
      unitUr: 'فی شیٹ / میٹر',
      specsEn: ['22" Industrial Roll', 'Hot/Cold Peel Film', 'Stretch TPU Powder'],
      specsUr: ['22 انچ رول چوڑائی', 'ہاٹ و کولڈ پیل', 'لچکدار ٹی پی یو پاؤڈر'],
      sampleProductId: 'prod-dtf-gang-meter'
    },
    {
      id: 'stickers',
      title: t.stickersTitle,
      description: t.stickersDesc,
      image: '/src/assets/images/product_custom_stickers_1793754023618.jpg',
      pricePKR: 35,
      priceUSD: 0.15,
      unitEn: 'per sticker (bulk)',
      unitUr: 'فی اسٹیکر (تھوک)',
      specsEn: ['Waterproof & Dishwasher Safe', 'UV Protected Matte/Gloss', 'Laser Cut Any Shape'],
      specsUr: ['100% واٹر پروف', 'دھوپ سے محفوظ لیمینیشن', 'ہر سائز میں ڈائی کٹنگ'],
      sampleProductId: 'prod-stickers-diecut'
    },
    {
      id: 'clothing',
      title: t.clothingTitle,
      description: t.clothingDesc,
      image: '/src/assets/images/product_apparel_hoodies_1793754023144.jpg',
      pricePKR: 2950,
      priceUSD: 11.2,
      unitEn: 'per hoodie',
      unitUr: 'فی ہڈی',
      specsEn: ['350 GSM Heavy Fleece', 'Double-Lined Hood', 'Front/Back/Sleeve Prints'],
      specsUr: ['350 جی ایس ایم فلیس', 'ڈبل لائن ہوڈ', 'فرنٹ و بیک پرنٹ'],
      sampleProductId: 'prod-clothing-hoodie'
    }
  ];

  const handleCardClick = (cat: typeof categories[0]) => {
    const matched = products.find((p) => p.id === cat.sampleProductId);
    if (matched) {
      onOpenProductModal(matched);
    } else {
      onSelectCategory(cat.id);
    }
  };

  return (
    <section id="categories" className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <Shield className="w-4 h-4" />
            <span>{language === 'ur' ? '100% کوالٹی اور فیبرک گارنٹی' : '100% Quality & Wash Tested Guarantee'}</span>
          </div>
        </div>

        {/* 4 Core Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const displayPrice = currency === 'PKR' ? `Rs. ${cat.pricePKR.toLocaleString()}` : `$${cat.priceUSD.toFixed(2)}`;
            const displayUnit = language === 'ur' ? cat.unitUr : cat.unitEn;
            const specs = language === 'ur' ? cat.specsUr : cat.specsEn;

            const whatsappUrl = createWhatsAppUrl(
              language === 'ur'
                ? `السلام علیکم! مجھے یونی پرنٹ آن ڈیمانڈ سے "${cat.title}" کے بارے میں معلومات اور آرڈر درکار ہے۔`
                : `Hello! I would like to order or ask about "${cat.title}" from Uni Print on Demand.`
            );

            return (
              <div
                key={cat.id}
                className="group relative flex flex-col bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-200"
              >
                {/* Product Category Visual */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer" onClick={() => handleCardClick(cat)}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Price Tag in Image Corner */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="text-slate-300">{t.startingFrom}</span>
                    <span className="font-extrabold text-amber-400 text-sm tabular-nums">
                      {displayPrice} <span className="text-[10px] text-slate-300 font-normal">/ {displayUnit}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleCardClick(cat)}
                      className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{cat.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2">
                      {cat.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                      {specs.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCardClick(cat)}
                      className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors text-center"
                    >
                      {t.explore}
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors"
                      title={language === 'ur' ? 'واٹس ایپ پر پوچھیں' : 'Order on WhatsApp'}
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
