import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Upload, RotateCw, ZoomIn, ZoomOut, Check, MessageCircle, RefreshCw, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface CustomizerProps {
  language: Language;
}

export const InteractiveCustomizer: React.FC<CustomizerProps> = ({ language }) => {
  const t = TRANSLATIONS[language].customizer;

  const [productType, setProductType] = useState<'tshirt' | 'hoodie' | 'dtf' | 'sticker'>('tshirt');
  const [apparelColor, setApparelColor] = useState<'black' | 'white' | 'navy' | 'grey' | 'sand'>('black');
  const [scale, setScale] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedPresetGraphic, setSelectedPresetGraphic] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // High quality sample preset graphic prints
  const presetGraphics = [
    {
      id: 0,
      name: 'Tokyo Cyber Tiger',
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80',
      label: 'Tokyo Tiger'
    },
    {
      id: 1,
      name: 'Vintage Skull & Rose',
      url: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&auto=format&fit=crop&q=80',
      label: 'Vintage Rose'
    },
    {
      id: 2,
      name: 'Geometric Abstract',
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
      label: 'Geometric Art'
    }
  ];

  const colorStyles = {
    black: { hex: '#111827', name: t.colors.black },
    white: { hex: '#f8fafc', name: t.colors.white },
    navy: { hex: '#1e293b', name: t.colors.navy },
    grey: { hex: '#64748b', name: t.colors.grey },
    sand: { hex: '#d6c5ad', name: t.colors.sand },
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const activeGraphicUrl = uploadedImage || presetGraphics[selectedPresetGraphic].url;

  const handleOrderWhatsApp = () => {
    const productName = productType.toUpperCase();
    const colorName = colorStyles[apparelColor].name;
    const msg = language === 'ur'
      ? `السلام علیکم! میں نے شاہین ڈی ٹی ایف کے 3D ماک اپ اسٹوڈیو میں ایک ڈیزائن تیار کیا ہے۔\nپراڈکٹ: ${productName}\nرنگ: ${colorName}\nسائیڈ: ${viewSide === 'front' ? 'فرنٹ' : 'بیک'}\nبراہ کرم اس کے پرنٹ اور آرڈر کی تفصیلات بتائیں۔`
      : `Hello Shaheen DTF Printing! I created a live mockup on your website:\nProduct: ${productName}\nColor: ${colorName}\nSide: ${viewSide.toUpperCase()}\nI would like to print this design. Please advise on price and sending the high-res file!`;
    openWhatsApp(msg);
  };

  const resetAll = () => {
    setScale(100);
    setRotation(0);
    setUploadedImage(null);
    setSelectedPresetGraphic(0);
  };

  return (
    <section id="customizer" className="py-20 bg-slate-900/60 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'لائیو ماک اپ جنریٹر' : 'Real-time Print Visualizer'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Customizer Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas: Live Product Mockup Viewer */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden min-h-[460px]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* View Switcher: Front / Back */}
            {productType !== 'dtf' && productType !== 'sticker' && (
              <div className="absolute top-4 left-4 z-20 flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setViewSide('front')}
                  className={`px-3 py-1 rounded-md transition-colors ${viewSide === 'front' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  {t.front}
                </button>
                <button
                  type="button"
                  onClick={() => setViewSide('back')}
                  className={`px-3 py-1 rounded-md transition-colors ${viewSide === 'back' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  {t.back}
                </button>
              </div>
            )}

            {/* Mockup Container */}
            <div className="relative w-72 sm:w-96 aspect-square flex items-center justify-center z-10 transition-all duration-300">
              
              {/* Product Base Visual */}
              {productType === 'tshirt' && (
                <div
                  className="relative w-full h-full rounded-2xl transition-colors duration-300 shadow-xl flex items-center justify-center overflow-hidden border border-slate-800"
                  style={{ backgroundColor: colorStyles[apparelColor].hex }}
                >
                  {/* T-Shirt Neck & Seam Silhouette SVG Overlay */}
                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-overlay"
                  >
                    <path
                      d="M60 20 C70 40 130 40 140 20 L180 50 L160 85 L140 70 L140 180 L60 180 L60 70 L40 85 L20 50 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M70 20 Q100 45 130 20" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  
                  {/* Artwork Print Area on T-Shirt */}
                  <div className="relative w-40 h-48 flex items-center justify-center pointer-events-none">
                    <img
                      src={activeGraphicUrl}
                      alt="Custom Print Preview"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform"
                      style={{
                        transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
                      }}
                    />
                  </div>
                </div>
              )}

              {productType === 'hoodie' && (
                <div
                  className="relative w-full h-full rounded-2xl transition-colors duration-300 shadow-xl flex items-center justify-center overflow-hidden border border-slate-800"
                  style={{ backgroundColor: colorStyles[apparelColor].hex }}
                >
                  {/* Hoodie Silhouette SVG Overlay */}
                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-overlay"
                  >
                    <path
                      d="M50 30 C70 10 130 10 150 30 L190 65 L170 100 L150 85 L150 185 L50 185 L50 85 L30 100 L10 65 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M75 140 L125 140 L135 175 L65 175 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>

                  {/* Artwork Print Area on Hoodie */}
                  <div className="relative w-44 h-52 flex items-center justify-center pointer-events-none">
                    <img
                      src={activeGraphicUrl}
                      alt="Custom Print Preview"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform"
                      style={{
                        transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
                      }}
                    />
                  </div>
                </div>
              )}

              {productType === 'dtf' && (
                <div className="relative w-full h-full rounded-2xl bg-slate-900 border-2 border-dashed border-amber-400/40 p-4 shadow-xl flex flex-col items-center justify-center overflow-hidden">
                  <div className="text-[11px] font-mono text-amber-400/90 mb-2 tracking-widest uppercase">
                    22" x 39" DTF Gang Sheet Roll Preview
                  </div>
                  <div className="relative w-52 h-64 bg-slate-950/80 rounded-lg border border-slate-800 flex items-center justify-center p-3">
                    <img
                      src={activeGraphicUrl}
                      alt="DTF Transfer Print Preview"
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain filter brightness-110 drop-shadow-lg"
                      style={{
                        transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2">
                    Hot/Cold Peel Film with Ultra White Underbase
                  </div>
                </div>
              )}

              {productType === 'sticker' && (
                <div className="relative w-full h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="relative p-3 bg-gradient-to-tr from-amber-400/20 via-pink-500/20 to-cyan-400/20 rounded-2xl shadow-2xl border border-white/20">
                    <img
                      src={activeGraphicUrl}
                      alt="Die Cut Sticker Preview"
                      referrerPolicy="no-referrer"
                      className="w-48 h-48 object-contain filter drop-shadow-2xl"
                      style={{
                        transform: `scale(${scale / 100}) rotate(${rotation}deg)`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Controls Bar (Scale & Rotation & Reset) */}
            <div className="w-full mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 z-10">
              <div className="flex items-center gap-3">
                <span className="font-medium text-slate-300">{t.artworkSize}:</span>
                <input
                  type="range"
                  min="50"
                  max="160"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-24 sm:w-32 accent-amber-400 cursor-pointer"
                />
                <span className="tabular-nums font-mono text-slate-300">{scale}%</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRotation((prev) => (prev + 90) % 360)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
                  title="Rotate 90 degrees"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{rotation}°</span>
                </button>

                <button
                  type="button"
                  onClick={resetAll}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  title="Reset customizer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Controls & Ordering */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Choose Product Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {t.selectProduct}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'tshirt', label: language === 'ur' ? 'ٹی شرٹ' : 'Custom T-Shirt' },
                  { id: 'hoodie', label: language === 'ur' ? 'فلیس ہڈی' : 'Streetwear Hoodie' },
                  { id: 'dtf', label: language === 'ur' ? 'ڈی ٹی ایف رول' : 'DTF Gang Sheet' },
                  { id: 'sticker', label: language === 'ur' ? 'ونائل اسٹیکر' : 'Die-Cut Sticker' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProductType(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all ${
                      productType === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-400/20'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Garment Color Swatches (if t-shirt or hoodie) */}
            {(productType === 'tshirt' || productType === 'hoodie') && (
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  {t.selectColor}: <span className="text-amber-400 font-normal">{colorStyles[apparelColor].name}</span>
                </label>
                <div className="flex items-center gap-3">
                  {(Object.keys(colorStyles) as (keyof typeof colorStyles)[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setApparelColor(key)}
                      aria-label={colorStyles[key].name}
                      className={`w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                        apparelColor === key ? 'border-amber-400 scale-110 shadow-lg' : 'border-slate-700 hover:scale-105'
                      }`}
                      style={{ backgroundColor: colorStyles[key].hex }}
                    >
                      {apparelColor === key && (
                        <Check className={`w-4 h-4 ${key === 'white' || key === 'sand' ? 'text-slate-950' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Upload Artwork / Choose Sample Design */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {t.uploadLogo}
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-400/80 text-slate-200 text-xs font-semibold transition-colors"
              >
                <Upload className="w-4 h-4 text-amber-400" />
                <span>{language === 'ur' ? 'اپنا ڈیزائن منتخب کریں (PNG / JPG / SVG)' : 'Browse PNG / JPG / SVG File'}</span>
              </button>

              {uploadedImage && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{language === 'ur' ? 'کسٹم فائل کامیابی سے لوڈ ہو گئی' : 'Custom file loaded onto mockup'}</span>
                </div>
              )}
            </div>

            {/* Presets */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {t.orPickSample}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {presetGraphics.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setUploadedImage(null);
                      setSelectedPresetGraphic(preset.id);
                    }}
                    className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      !uploadedImage && selectedPresetGraphic === preset.id
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <img
                      src={preset.url}
                      alt={preset.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <span className="text-[10px] font-medium truncate w-full">{preset.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Order Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.orderThisDesign}</span>
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                {language === 'ur'
                  ? 'واٹس ایپ پر فوری تفصیلات اور ہائی ریزولوشن پرنٹنگ کی تصدیق ہوگی'
                  : 'Fast review via WhatsApp with print-ready proof provided within 1 hour'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
