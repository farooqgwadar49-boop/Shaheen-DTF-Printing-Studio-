import React, { useState } from 'react';
import { Product, Language, Currency } from '../types';
import { X, MessageCircle, Check, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { openWhatsApp, buildProductOrderMessage } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onGoToCalculator: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  language,
  currency,
  onGoToCalculator,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(product.minQty || 1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Default');

  const name = language === 'ur' ? product.nameUr : product.nameEn;
  const description = language === 'ur' ? product.descriptionUr : product.descriptionEn;
  const features = language === 'ur' ? product.featuresUr : product.featuresEn;
  const turnaround = language === 'ur' ? product.turnaroundUr : product.turnaroundEn;

  const unitPrice = currency === 'PKR' ? product.pricePKR : product.priceUSD;
  const totalPrice = unitPrice * quantity;

  const handleOrderWhatsApp = () => {
    const details = `${name} (Qty: ${quantity}, Size: ${selectedSize}, Color: ${selectedColor})`;
    const msg = buildProductOrderMessage(details, quantity, language);
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-slate-950 min-h-[260px] md:min-h-full">
          <img
            src={product.image}
            alt={name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
              {product.category} · {language === 'ur' ? 'پریمیم پرنٹنگ' : 'Commercial Quality'}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {name}
            </h3>

            <div className="text-lg font-extrabold text-amber-400 mb-4 tabular-nums">
              {currency === 'PKR' ? `Rs. ${product.pricePKR.toLocaleString()}` : `$${product.priceUSD.toFixed(2)}`}
              <span className="text-xs text-slate-400 font-normal ml-1">
                {language === 'ur' ? '/ فی عدد' : '/ unit'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                {language === 'ur' ? 'نمایاں خصوصیات' : 'Product Specifications'}:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size options if available */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                  {language === 'ur' ? 'سائز منتخب کریں' : 'Select Size'}:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-colors ${
                        selectedSize === s
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="flex items-center gap-4 mb-4 pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-400">
                {language === 'ur' ? 'تعداد' : 'Quantity'}:
              </span>
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(product.minQty || 1, quantity - 1))}
                  className="px-2.5 py-0.5 text-slate-300 hover:text-white font-bold"
                >
                  -
                </button>
                <span className="px-3 text-xs font-mono font-bold text-white tabular-nums">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-0.5 text-slate-300 hover:text-white font-bold"
                >
                  +
                </button>
              </div>
              <div className="text-xs text-slate-400">
                {language === 'ur' ? 'کل رقم' : 'Estimated Subtotal'}:{' '}
                <span className="font-bold text-amber-400 tabular-nums">
                  {currency === 'PKR' ? `Rs. ${totalPrice.toLocaleString()}` : `$${totalPrice.toFixed(2)}`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'ur' ? 'تیاری کا وقت' : 'Turnaround'}: {turnaround}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={handleOrderWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{language === 'ur' ? 'یہ آئٹم واٹس ایپ پر آرڈر کریں' : 'Order This via WhatsApp (+923337632813)'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onGoToCalculator();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <span>{language === 'ur' ? 'مکمل کوٹیشن کیلکولیٹر میں دیکھیں' : 'Calculate Custom Bulk Quote'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
