import React, { useState } from 'react';
import { Language, Currency, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Eye, MessageCircle, ZoomIn } from 'lucide-react';
import { openWhatsApp, buildProductOrderMessage } from '../utils/whatsapp';

interface GallerySectionProps {
  language: Language;
  currency: Currency;
  products: Product[];
  onOpenProductModal: (product: Product) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  language,
  currency,
  products,
  onOpenProductModal,
}) => {
  const t = TRANSLATIONS[language].gallery;
  const [filter, setFilter] = useState<'all' | 'tshirts' | 'dtf' | 'stickers' | 'clothing'>('all');

  const filteredProducts = filter === 'all' ? products : products.filter((p) => p.category === filter);

  const filterTabs = [
    { key: 'all', label: t.all },
    { key: 'tshirts', label: t.tshirts },
    { key: 'dtf', label: t.dtf },
    { key: 'stickers', label: t.stickers },
    { key: 'clothing', label: t.clothing },
  ];

  const handleOrderProduct = (p: Product) => {
    const msg = buildProductOrderMessage(language === 'ur' ? p.nameUr : p.nameEn, 10, language);
    openWhatsApp(msg);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* Interactive Filter Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800 rounded-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab.key
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => {
            const name = language === 'ur' ? prod.nameUr : prod.nameEn;
            const tagline = language === 'ur' ? prod.taglineUr : prod.taglineEn;
            const displayPrice = currency === 'PKR' ? `Rs. ${prod.pricePKR.toLocaleString()}` : `$${prod.priceUSD.toFixed(2)}`;

            return (
              <div
                key={prod.id}
                className="group flex flex-col bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl transition-all duration-200"
              >
                {/* Visual Area */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onOpenProductModal(prod)}
                >
                  <img
                    src={prod.image}
                    alt={name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProductModal(prod);
                      }}
                      className="p-2.5 rounded-full bg-slate-900/90 text-amber-400 hover:scale-110 transition-transform shadow-lg"
                      title={t.viewDetails}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-amber-400/90 tracking-wider uppercase mb-1">
                      {prod.category}
                    </div>
                    <h3
                      onClick={() => onOpenProductModal(prod)}
                      className="font-bold text-white text-sm hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                      {tagline}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">
                        {language === 'ur' ? 'شروع از' : 'From'}
                      </div>
                      <div className="text-sm font-bold text-amber-400 tabular-nums">
                        {displayPrice}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onOpenProductModal(prod)}
                        className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                        title={t.viewDetails}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOrderProduct(prod)}
                        className="inline-flex items-center gap-1 py-1.5 px-2.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                        title={t.orderSimilar}
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">{language === 'ur' ? 'آرڈر' : 'Order'}</span>
                      </button>
                    </div>
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
