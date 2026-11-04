export const WHATSAPP_NUMBER = '923337632813';
export const WHATSAPP_DISPLAY = '+92 333 7632813';

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function buildProductOrderMessage(productName: string, quantity: number, language: 'en' | 'ur'): string {
  if (language === 'ur') {
    return `السلام علیکم! میں شاہین ڈی ٹی ایف پرنٹنگ سے "${productName}" کا آرڈر دینا چاہتا ہوں۔\nتعداد: ${quantity}\nبراہ کرم قیمت اور تیاری کا وقت بتائیں۔`;
  }
  return `Hello Shaheen DTF Printing! I would like to place an order for:\nProduct: ${productName}\nQuantity: ${quantity}\nPlease share pricing and delivery schedule.`;
}

export function buildQuoteMessage(details: {
  category: string;
  size: string;
  qty: number;
  grade: string;
  unitPrice: string;
  totalPrice: string;
  currency: string;
  language: 'en' | 'ur';
}): string {
  if (details.language === 'ur') {
    return `السلام علیکم! میں نے شاہین ڈی ٹی ایف پرنٹنگ کی ویب سائٹ سے درج ذیل کوٹیشن بنائی ہے:\n\n• پراڈکٹ: ${details.category}\n• پرنٹ سائز: ${details.size}\n• تعداد: ${details.qty} عدد\n• میٹریل گریڈ: ${details.grade}\n• فی عدد قیمت: ${details.unitPrice} ${details.currency}\n• کل تخمینہ قیمت: ${details.totalPrice} ${details.currency}\n\nبراہ کرم اس آرڈر کی تصدیق اور پروسیس کی تفصیلات بتائیں۔ شکریہ!`;
  }
  return `Hello Shaheen DTF Printing! I calculated an instant quotation on your website:\n\n• Product Category: ${details.category}\n• Print Size: ${details.size}\n• Quantity: ${details.qty} pcs\n• Material Grade: ${details.grade}\n• Unit Price: ${details.unitPrice} ${details.currency}\n• Estimated Total: ${details.totalPrice} ${details.currency}\n\nPlease confirm availability and guide me through the artwork submission process. Thank you!`;
}
