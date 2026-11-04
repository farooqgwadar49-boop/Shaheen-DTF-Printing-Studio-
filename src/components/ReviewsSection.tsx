import React, { useState } from 'react';
import { Language, Review } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Star, CheckCircle, Plus, X, MessageSquareQuote } from 'lucide-react';

interface ReviewsSectionProps {
  language: Language;
  reviews: any[];
  onAddReview: (review: any) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  language,
  reviews,
  onAddReview,
}) => {
  const t = TRANSLATIONS[language].reviews;
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    item: '',
    rating: 5,
    comment: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      nameEn: formData.name,
      nameUr: formData.name,
      locationEn: formData.location || 'Pakistan',
      locationUr: formData.location || 'پاکستان',
      rating: formData.rating,
      date: 'Just now',
      commentEn: formData.comment,
      commentUr: formData.comment,
      itemEn: formData.item || 'Custom Print Order',
      itemUr: formData.item || 'کسٹم پرنٹ آرڈر',
      verified: true,
    };

    onAddReview(newRev);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setModalOpen(false);
      setFormData({ name: '', location: '', item: '', rating: 5, comment: '' });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-900/50 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white text-xs font-bold ml-1.5 tabular-nums">4.9 / 5.0</span>
              <span className="text-slate-500 text-xs ml-1">({t.basedOn})</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              {t.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400 text-white hover:text-amber-400 text-xs font-bold transition-all shrink-0"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>{t.leaveReview}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => {
            const name = language === 'ur' ? rev.nameUr : rev.nameEn;
            const location = language === 'ur' ? rev.locationUr : rev.locationEn;
            const comment = language === 'ur' ? rev.commentUr : rev.commentEn;
            const item = language === 'ur' ? rev.itemUr : rev.itemEn;

            return (
              <div
                key={rev.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800/90 relative"
              >
                <div>
                  {/* Rating Stars & Item */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    "{comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-white flex items-center gap-1.5">
                        <span>{name}</span>
                        {rev.verified && (
                          <span title="Verified Customer">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">{location}</div>
                    </div>
                  </div>
                  <div className="mt-1.5 text-[10px] text-amber-400/90 font-medium truncate">
                    {item}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Write Review Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white mb-4">
                {t.reviewModalTitle}
              </h3>

              {submittedMessage ? (
                <div className="py-8 text-center text-emerald-400 space-y-2">
                  <CheckCircle className="w-10 h-10 mx-auto" />
                  <p className="font-semibold text-sm">{t.thankYou}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">{t.yourName}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-400"
                      placeholder="e.g. Farooq Ahmed"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">{t.yourLocation}</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-400"
                        placeholder="e.g. Gwadar / Karachi"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">{t.yourItem}</label>
                      <input
                        type="text"
                        value={formData.item}
                        onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-400"
                        placeholder="e.g. Oversized T-Shirts"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">{t.yourRating}</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">{t.yourComment}</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-amber-400 resize-none"
                      placeholder="Share your experience regarding print sharpness, fabric quality, and delivery..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                    >
                      {t.submitReview}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
