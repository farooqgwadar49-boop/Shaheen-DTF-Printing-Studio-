import React, { useState } from 'react';
import { Language } from '../types';
import { MessageCircle, X, ChevronUp, Sparkles, Send } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY, openWhatsApp } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      en: 'Hi! I want to order custom DTF transfer sheets.',
      ur: 'السلام علیکم! مجھے ڈی ٹی ایف ٹرانسفر شیٹس کا آرڈر دینا ہے۔',
    },
    {
      en: 'Hello! I need a quote for custom printed t-shirts & hoodies.',
      ur: 'السلام علیکم! مجھے کسٹم ٹی شرٹس اور ہڈیز کی قیمت معلوم کرنی ہے۔',
    },
    {
      en: 'Hi! I want to print custom waterproof vinyl stickers.',
      ur: 'السلام علیکم! مجھے واٹر پروف ونائل اسٹیکرز پرنٹ کروانے ہیں۔',
    },
    {
      en: 'I have artwork ready to print. Please review file format.',
      ur: 'میرا ڈیزائن تیار ہے، براہ کرم فائل چیک کر کے پرنٹنگ کی تفصیلات دیں۔',
    },
  ];

  const handleSelectPrompt = (prompt: { en: string; ur: string }) => {
    const text = language === 'ur' ? prompt.ur : prompt.en;
    openWhatsApp(text);
    setIsOpen(false);
  };

  const directDefaultUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! میں شاہین ڈی ٹی ایف پرنٹنگ سے پرنٹنگ کے بارے میں رابطہ کر رہا ہوں۔'
      : 'Hello Shaheen DTF Printing! I would like to place an order.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-5 text-xs text-white animate-in fade-in slide-in-from-bottom-4 duration-150">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">
                  {language === 'ur' ? 'شاہین ڈی ٹی ایف ڈیسک' : 'Shaheen DTF Desk'}
                </div>
                <div className="text-[10px] text-emerald-400 font-medium">Online · {WHATSAPP_DISPLAY}</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-300 text-xs mb-3">
            {language === 'ur'
              ? 'خوش آمدید! آپ کس پروڈکٹ کے بارے میں پوچھنا چاہتے ہیں؟'
              : 'Welcome to Shaheen DTF Printing! What can we help you produce today?'}
          </p>

          <div className="space-y-1.5 mb-3">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPrompt(p)}
                className="w-full text-start p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-emerald-400/80 hover:bg-slate-950/80 text-slate-200 transition-colors flex items-center justify-between group"
              >
                <span className="line-clamp-1 text-[11px] font-medium">
                  {language === 'ur' ? p.ur : p.en}
                </span>
                <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-1.5" />
              </button>
            ))}
          </div>

          <a
            href={directDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{language === 'ur' ? 'براہ راست چیٹ شروع کریں' : 'Start WhatsApp Chat Now'}</span>
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-950/80 transition-all hover:scale-105 active:scale-95"
        aria-label="Contact Uni Print on Demand on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block">
          {language === 'ur' ? 'واٹس ایپ آرڈر' : 'Order on WhatsApp'}
        </span>
        <span className="text-[11px] font-mono hidden md:inline-block text-emerald-100">
          {WHATSAPP_DISPLAY}
        </span>
      </button>
    </div>
  );
};
