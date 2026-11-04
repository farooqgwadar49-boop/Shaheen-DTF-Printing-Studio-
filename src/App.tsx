import React, { useState, useEffect } from 'react';
import { Language, Currency, Product } from './types';
import { PRODUCTS, REVIEWS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { InteractiveCustomizer } from './components/InteractiveCustomizer';
import { QuotationCalculator } from './components/QuotationCalculator';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from './utils/whatsapp';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('PKR');
  const [reviews, setReviews] = useState(REVIEWS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync document RTL direction when switching between English and Urdu
  useEffect(() => {
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHero = (categoryKey: string) => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddReview = (newRev: any) => {
    setReviews([newRev, ...reviews]);
  };

  const topBannerWhatsAppUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! مجھے شاہین ڈی ٹی ایف سے مفت سیمپل سویچ اور بلک آرڈر کی معلومات درکار ہیں۔'
      : 'Hello Shaheen DTF Printing! I am inquiring about sample swatches and bulk print orders.'
  );

  return (
    <div
      dir={language === 'ur' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans"
    >
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-2 px-4 text-xs font-semibold text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>
          {language === 'ur'
            ? 'پورے پاکستان میں تیز ترسیل · 10 پیس سے زائد پر خصوصی ہول سیل رعایت · فوری واٹس ایپ آرڈر:'
            : 'Nationwide Delivery in Pakistan · Volume Discounts from 10+ Units · WhatsApp:'}
        </span>
        <a
          href={topBannerWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-mono font-bold hover:text-white transition-colors"
        >
          {WHATSAPP_DISPLAY}
        </a>
      </div>

      {/* Primary Navigation Bar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenQuote={handleOpenCalculator}
      />

      <main className="flex-1">
        {/* Hero Section with Large Attractive Banner */}
        <Hero
          language={language}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Product Categories (T-shirts, DTF, Stickers, Clothing) */}
        <CategoriesSection
          language={language}
          currency={currency}
          onSelectCategory={handleSelectCategoryFromHero}
          onOpenProductModal={setSelectedProduct}
          products={PRODUCTS}
        />

        {/* Interactive 3D Mockup Studio & Customizer */}
        <InteractiveCustomizer
          language={language}
        />

        {/* Product Prices & Instant Quotation Section */}
        <QuotationCalculator
          language={language}
          currency={currency}
        />

        {/* Sample Gallery with Filterable Categories */}
        <GallerySection
          language={language}
          currency={currency}
          products={PRODUCTS}
          onOpenProductModal={setSelectedProduct}
        />

        {/* About Us Section */}
        <AboutSection
          language={language}
        />

        {/* Customer Reviews Section */}
        <ReviewsSection
          language={language}
          reviews={reviews}
          onAddReview={handleAddReview}
        />

        {/* Contact Us Section with Direct WhatsApp */}
        <ContactSection
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp
        language={language}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          language={language}
          currency={currency}
          onGoToCalculator={handleOpenCalculator}
        />
      )}
    </div>
  );
}
