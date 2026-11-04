import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY, openWhatsApp } from '../utils/whatsapp';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].contact;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    // Send formatted WhatsApp inquiry directly as well
    const whatsappMsg = language === 'ur'
      ? `السلام علیکم! میری ویب سائٹ انکوائری:\nنام: ${form.name}\nفون: ${form.phone}\nموضوع: ${form.subject}\nپیغام: ${form.message}`
      : `Hello Uni Print on Demand!\nWebsite Inquiry from: ${form.name}\nPhone: ${form.phone}\nProduct/Subject: ${form.subject}\nDetails: ${form.message}`;

    setSubmitted(true);
    // Also trigger openWhatsApp after short feedback
    setTimeout(() => {
      openWhatsApp(whatsappMsg);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 1200);
  };

  const directWhatsAppUrl = createWhatsAppUrl(
    language === 'ur'
      ? 'السلام علیکم! میں یونی پرنٹ آن ڈیمانڈ سے پرنٹنگ کے بارے میں پوچھنا چاہتا ہوں۔'
      : 'Hello Uni Print on Demand! I have a question regarding custom printing.'
  );

  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Connect Card */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-950/40"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                {t.whatsappTitle}
              </h3>
              <div className="text-lg font-mono font-bold text-emerald-400 mt-1 tabular-nums">
                {WHATSAPP_DISPLAY}
              </div>
              <p className="text-xs text-emerald-200/70 mt-1">
                {t.whatsappDesc}
              </p>
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:+${WHATSAPP_DISPLAY.replace(/[^0-9]/g, '')}`}
              className="group block p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {t.phoneTitle}
              </h3>
              <div className="text-lg font-mono font-bold text-amber-400 mt-1 tabular-nums">
                {WHATSAPP_DISPLAY}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'ur' ? 'براہ راست آرڈر اور تکنیکی رہنمائی کے لیے کال کریں' : 'Call directly for immediate quotes & file preparation support'}
              </p>
            </a>

            {/* Hub & Fulfillment Info */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">{t.locationTitle}</h3>
              </div>
              <p className="text-xs text-slate-300">
                {language === 'ur'
                  ? 'گوادر پورٹ و سٹی سنٹر، بلوچستان، پاکستان۔ ملک بھر میں ڈیلیوری بذریعہ ٹی سی ایس اور ایم اینڈ پی۔'
                  : 'Gwadar Fulfillment Hub, Balochistan, Pakistan. Nationwide courier dispatch via TCS, M&P, and Daewoo Express.'}
              </p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{t.hoursDesc}</span>
              </div>
            </div>

          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">
              {language === 'ur' ? 'آن لائن انکوائری اور کوٹیشن فارم' : 'Send an Inquiry or Artwork Request'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {language === 'ur'
                ? 'فارم پر کریں، ہماری ٹیم آپ کے واٹس ایپ نمبر پر فوراً کوٹیشن اور پروف بھیجے گی۔'
                : 'Fill out this form, and our print engineers will reply with a mock proof and price breakdown.'}
            </p>

            {submitted ? (
              <div className="py-12 text-center text-emerald-400 space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto animate-bounce" />
                <div className="text-base font-bold text-white">{t.formSuccess}</div>
                <div className="text-xs text-slate-400">
                  {language === 'ur' ? 'واٹس ایپ چیٹ کھل رہی ہے...' : 'Connecting you with our WhatsApp print desk...'}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">{t.formName} *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Farooq Ahmed"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">{t.formPhone} *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 0333 7632813"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">{t.formEmail}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. farooqgwadar49@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">{t.formSubject}</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. 50 Custom Hoodies & DTF Sheets"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">{t.formMessage} *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      language === 'ur'
                        ? 'اپنے آرڈر کی تفصیلات، کپڑے کا رنگ، سائز اور مطلوبہ تعداد یہاں درج کریں...'
                        : 'Describe your artwork dimensions, t-shirt/sticker quantities, color preference, and deadline...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg shadow-amber-400/20 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.formSubmit}</span>
                  </button>

                  <span className="text-[11px] text-slate-500">
                    {language === 'ur' ? 'فوری رابطہ: +923337632813' : 'Quick reply via WhatsApp'}
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
