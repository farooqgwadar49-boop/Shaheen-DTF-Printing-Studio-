import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-tshirt-heavyweight',
    category: 'tshirts',
    nameEn: 'Oversized Heavyweight 240 GSM Cotton T-Shirt',
    nameUr: 'اوور سائزڈ ہیوی ویٹ 240 جی ایس ایم کاٹن ٹی شرٹ',
    taglineEn: 'Streetwear drop-shoulder cut with vivid DTF printing',
    taglineUr: 'اسٹریٹ ویئر ڈراپ شولڈر کٹ اور دیرپا ڈی ٹی ایف پرنٹنگ',
    descriptionEn: 'Crafted from 100% luxury combed bio-washed cotton. Thick ribbed collar that retains shape after 50+ industrial washes. Features ultra-sharp high-definition Direct-to-Film graphic printing with zero cracking or fading.',
    descriptionUr: '100 فیصد خالص بایو واشڈ کاٹن سے تیار کردہ پریمیم ٹی شرٹ۔ جدید ڈی ٹی ایف پرنٹنگ کی بدولت رنگ کبھی پھیکے نہیں پڑتے اور دھونے پر پرنٹ خراب نہیں ہوتا۔',
    pricePKR: 1450,
    priceUSD: 5.5,
    minQty: 1,
    image: '/src/assets/images/product_custom_tshirts_1793754021957.jpg',
    featuresEn: [
      '240 GSM 100% Combed Compact Cotton',
      'High-Density DTF Print (Up to 1440 DPI)',
      'Pre-shrunk & anti-pilling fabric',
      'Available in Black, Off-White, Charcoal, Navy, Beige',
      'Drop-shoulder boxy fit'
    ],
    featuresUr: [
      '240 جی ایس ایم 100 فیصد کومبڈ کاٹن',
      'ہائی ریزولوشن 1440 ڈی پی آئی ڈی ٹی ایف پرنٹ',
      'کپڑا سکڑنے اور روئیں آنے سے محفوظ',
      'مختلف رنگوں میں دستیاب (سیاہ، سفید، نیوی، بیج)',
      'جدید اسٹریٹ ویئر ڈراپ شولڈر کٹنگ'
    ],
    turnaroundEn: '24 - 48 Hours',
    turnaroundUr: '24 تا 48 گھنٹے',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    colors: ['Jet Black', 'Pure White', 'Charcoal Grey', 'Deep Navy', 'Sand Beige']
  },
  {
    id: 'prod-tshirt-crewneck',
    category: 'tshirts',
    nameEn: 'Classic Ring-Spun 180 GSM Everyday Tee',
    nameUr: 'کلاسک 180 جی ایس ایم رِنگ اِسپن کاٹن ٹی شرٹ',
    taglineEn: 'Breathable, lightweight, ideal for brand merch & bulk events',
    taglineUr: 'ہلکی پھلکی، آرام دہ، برانڈ مرچنڈائز اور ایونٹس کے لیے بہترین',
    descriptionEn: 'The gold standard for brand merchandise, corporate uniforms, and casual wear. Silky soft hand-feel with brilliant color reproduction using water-based Japanese DTF inks.',
    descriptionUr: 'برانڈ مرچ، کارپوریٹ یونیفارم اور روزمرہ استعمال کے لیے بہترین ٹی شرٹ۔ جاپانی انکس کے ساتھ دیرپا اور نرم پرنٹنگ۔',
    pricePKR: 950,
    priceUSD: 3.6,
    minQty: 1,
    image: '/src/assets/images/product_custom_tshirts_1793754021957.jpg',
    featuresEn: [
      '180 GSM Ring-Spun Cotton',
      'Taped neck and shoulders for durability',
      'Vibrant photo-realistic transfers',
      'Single piece to 10,000+ volume pricing'
    ],
    featuresUr: [
      '180 جی ایس ایم رِنگ اسپن کاٹن',
      'مضبوط سلائی اور دیرپا کالر',
      'فوٹو ریئلسٹک پرنٹنگ کوالٹی',
      'ایک پیس سے لے کر ہزاروں پیس تک کی سہولت'
    ],
    turnaroundEn: '24 - 48 Hours',
    turnaroundUr: '24 تا 48 گھنٹے',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: ['White', 'Black', 'Heather Grey', 'Royal Blue', 'Maroon']
  },
  {
    id: 'prod-dtf-gang-meter',
    category: 'dtf',
    nameEn: 'Industrial DTF Gang Sheet (22" x 39" / 1 Meter)',
    nameUr: 'انڈسٹریل ڈی ٹی ایف گینگ شیٹ (22 انچ x 39 انچ / 1 میٹر)',
    taglineEn: 'Fit multiple designs on one roll with hot/cold instant peel',
    taglineUr: 'ایک میٹر رول پر متعدد ڈیزائنز پرنٹ کریں، ہاٹ و کولڈ پیل',
    descriptionEn: 'The ultimate cost-saving solution for print shops, apparel brands, and DIY creators. Print as many logos, chest designs, and sleeve prints as you can fit onto our 22-inch wide roll. Ultra-fine detail down to 1pt vector lines.',
    descriptionUr: 'پرنٹ شاپس اور برانڈز کے لیے سب سے سستا اور معیاری حل۔ 22 انچ چوڑے رول پر اپنے تمام ڈیزائنز اور لوگوز سیٹ کر کے پرنٹ کروائیں۔ کسی بھی کپڑے پر آسانی سے ہیٹ پریس کریں۔',
    pricePKR: 1800,
    priceUSD: 6.8,
    minQty: 1,
    image: '/src/assets/images/product_dtf_transfers_1793754022228.jpg',
    featuresEn: [
      '22 inches width x 39 inches length (1 Meter)',
      'Opaque pure white ink underbase',
      'High stretch TPU adhesive powder',
      'Applies to Cotton, Poly, Nylon, Leather, Spandex',
      'Instant hot or warm peel film'
    ],
    featuresUr: [
      '22 انچ چوڑائی x 39 انچ لمبائی (ایک میٹر مکمل)',
      'خالص سفید انک کی مضبوط بیس',
      'لچکدار ٹی پی یو پاؤڈر جو کھنچنے پر پھٹتا نہیں',
      'کاٹن، پالئیےسٹر، چمڑے اور ہر قسم کے کپڑے پر قابل استعمال',
      'ہاٹ یا وارم پیل کی سہولت'
    ],
    turnaroundEn: 'Same Day / 24 Hours',
    turnaroundUr: 'اسی دن یا 24 گھنٹے',
    sizes: ['1 Meter (22"x39")', '2 Meters', '5 Meters', '10+ Meters Roll']
  },
  {
    id: 'prod-dtf-sheets-a3',
    category: 'dtf',
    nameEn: 'Single DTF Transfer Sheets (A3 / A4 Ready-to-Press)',
    nameUr: 'سنگل ڈی ٹی ایف ٹرانسفر شیٹس (A3 / A4 ریڈی ٹو پریس)',
    taglineEn: 'No cutting required, ready for iron or heat press application',
    taglineUr: 'کاٹنے کی ضرورت نہیں، گھریلو استری یا ہیٹ پریس کے لیے تیار',
    descriptionEn: 'Single pre-cut DTF prints ready to press instantly on dark and light textiles. Perfect for sampling, single bespoke orders, and test runs.',
    descriptionUr: 'تیار شدہ ڈی ٹی ایف شیٹس جو بغیر کسی مشین کے عام ہیٹ پریس یا استری سے آسانی سے کسی بھی کپڑے پر لگائی جا سکتی ہیں۔',
    pricePKR: 450,
    priceUSD: 1.7,
    minQty: 1,
    image: '/src/assets/images/product_dtf_transfers_1793754022228.jpg',
    featuresEn: [
      'True A3 (11.7" x 16.5") or A4 (8.3" x 11.7")',
      'Works with standard heat press or household iron',
      'Wash durability rated 50+ cycles',
      'Sample packs available with free test swatch'
    ],
    featuresUr: [
      'A3 اور A4 سائز میں دستیاب',
      'ہیٹ پریس یا عام استری دونوں پر قابل استعمال',
      '50 سے زائد بار دھونے کی مضبوط گارنٹی',
      'سیمپل ٹیسٹنگ کے لیے خصوصی پیک'
    ],
    turnaroundEn: 'Same Day',
    turnaroundUr: 'اسی دن روانگی',
    sizes: ['A4 Size', 'A3 Size', 'Custom Cut']
  },
  {
    id: 'prod-stickers-diecut',
    category: 'stickers',
    nameEn: 'Custom Die-Cut Waterproof Vinyl Stickers',
    nameUr: 'کسٹم ڈائی کٹ واٹر پروف ونائل اسٹیکرز',
    taglineEn: 'Thick vinyl with UV scratch-proof laminate and custom contour cut',
    taglineUr: 'واٹر پروف، دھوپ اور خراشوں سے محفوظ پریمیم ونائل اسٹیکرز',
    descriptionEn: 'Precision contour laser cut around your exact logo or artwork shape. Printed with eco-solvent UV-resistant inks and laminated with a protective matte or glossy shield. Withstands car washes, dishwashers, and harsh weather.',
    descriptionUr: 'آپ کے لوگو یا ڈیزائن کی درست شکل میں کٹنگ۔ واٹر پروف اور سن پروف ونائل، جو گاڑیوں، لیپ ٹاپس، موبائل کور اور بوتلوں پر برسوں قائم رہتا ہے۔',
    pricePKR: 35,
    priceUSD: 0.15,
    minQty: 25,
    image: '/src/assets/images/product_custom_stickers_1793754023618.jpg',
    featuresEn: [
      'Heavyweight 6mil thick vinyl stock',
      '100% Waterproof & Dishwasher safe',
      'UV protective laminate (Matte or Gloss)',
      'Easy-peel scored backing',
      'Holographic & Metallic finish options available'
    ],
    featuresUr: [
      'مضبوط 6mil ونائل مٹیریل',
      '100 فیصد واٹر پروف اور واش ایبل',
      'دھوپ اور سکریچ سے محفوظ کوٹنگ (میٹ یا گلوس)',
      'آسانی سے اترنے والی بیکنگ',
      'ہولوگرافک اور چمکدار آپشنز بھی دستیاب'
    ],
    turnaroundEn: '24 - 48 Hours',
    turnaroundUr: '24 تا 48 گھنٹے',
    sizes: ['2x2 inch', '3x3 inch', '4x4 inch', 'Custom Dimensions']
  },
  {
    id: 'prod-stickers-holographic',
    category: 'stickers',
    nameEn: 'Rainbow Holographic & Chrome Vinyl Decals',
    nameUr: 'رینبو ہولوگرافک اور کروم ونائل اسٹیکرز',
    taglineEn: 'Eye-catching iridescent shimmer that shifts in lighting',
    taglineUr: 'روشنی میں چمکنے والا رینبو ہولوگرافک اسٹیکر',
    descriptionEn: 'Mesmerizing iridescent material that shimmers through your artwork. Unmatched visual impact for streetwear packaging, laptop decals, and artist merchandise.',
    descriptionUr: 'آنکھوں کو خیرہ کر دینے والا ہولوگرافک اسٹیکر جو برانڈز اور آرٹسٹس کے لیے کمال اثر پیدا کرتا ہے۔',
    pricePKR: 50,
    priceUSD: 0.2,
    minQty: 20,
    image: '/src/assets/images/product_custom_stickers_1793754023618.jpg',
    featuresEn: [
      'Rainbow light-reflecting metallic substrate',
      'Full color CMYK + Spot white barrier ink',
      'Outdoor rated for 3-5 years',
      'Strong residue-free acrylic adhesive'
    ],
    featuresUr: [
      'روشنی منعکس کرنے والا ہولوگرافک میٹریل',
      'مکمل رنگین پرنٹ بمعہ سفید انک بیریئر',
      'کھلی فضا میں 3 تا 5 سال کی لائف',
      'مضبوط گوند جو ہٹانے پر نشان نہیں چھوڑتی'
    ],
    turnaroundEn: '48 Hours',
    turnaroundUr: '48 گھنٹے'
  },
  {
    id: 'prod-clothing-hoodie',
    category: 'clothing',
    nameEn: 'Luxury Heavyweight 350 GSM Fleece Streetwear Hoodie',
    nameUr: 'لگژری ہیوی ویٹ 350 جی ایس ایم فلیس اسٹریٹ ویئر ہڈی',
    taglineEn: 'Thermal warm double-lined hood with kangaroo pocket & custom print',
    taglineUr: 'ڈبل ہوڈ، گرم فلیس اور کسٹم فرنٹ و بیک پرنٹنگ کے ساتھ',
    descriptionEn: 'The centerpiece of modern streetwear brands. Ultra-heavy 350 GSM cotton-poly fleece interior for plush warmth. Spacious kangaroo pocket and double-layer hood with metal eyelets.',
    descriptionUr: 'موسم سرما کے لیے بہترین اور فیشن ایبل ہڈی۔ 350 جی ایس ایم کاٹن فلیس، ڈبل ہوڈ اور شاندار فرنٹ اور بیک پرنٹنگ۔',
    pricePKR: 2950,
    priceUSD: 11.2,
    minQty: 1,
    image: '/src/assets/images/product_apparel_hoodies_1793754023144.jpg',
    featuresEn: [
      '350 GSM Heavy Cotton-Poly Fleece',
      'Front chest, back or sleeve print positions',
      'Ribbed cuffs and waistband with spandex memory',
      'Double-lined hood with custom cord toggles'
    ],
    featuresUr: [
      '350 جی ایس ایم گرم اور نرم فلیس کاٹن',
      'سامنے، پیچھے یا بازو پر پرنٹ کی سہولت',
      'مضبوط لچکدار کف اور بارڈر',
      'ڈبل لائن ہوڈ بمعہ میٹل آئی لیٹس'
    ],
    turnaroundEn: '2 - 3 Days',
    turnaroundUr: '2 تا 3 دن',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Onyx Black', 'Navy Blue', 'Forest Green', 'Heather Grey', 'Maroon']
  },
  {
    id: 'prod-clothing-polo',
    category: 'clothing',
    nameEn: 'Corporate Pique Cotton Polo Shirt',
    nameUr: 'کارپوریٹ پکے کاٹن پولو شرٹ',
    taglineEn: 'Sophisticated smart-casual look for corporate staff & teams',
    taglineUr: 'کمپنیوں اور اسٹاف کے لیے باوقار پولو شرٹ پرنٹنگ',
    descriptionEn: 'Breathable honeycomb pique knit cotton polo shirt. Clean placket with dyed-to-match buttons. Ideal for subtle chest logos and company uniform branding.',
    descriptionUr: 'کارپوریٹ دفاتر، اسکولز اور بزنس ٹیموں کے لیے آرام دہ پکے کاٹن پولو شرٹ۔ لوگو پرنٹ یا کڑھائی کے ساتھ۔',
    pricePKR: 1650,
    priceUSD: 6.2,
    minQty: 5,
    image: '/src/assets/images/product_apparel_hoodies_1793754023144.jpg',
    featuresEn: [
      '220 GSM Honeycomb Pique Cotton',
      'Formal 3-button placket and knit collar',
      'Embroidered feel DTF or high-density screen print',
      'Side vent detailing for comfort'
    ],
    featuresUr: [
      '220 جی ایس ایم ہنی کومب پکے کاٹن',
      'تین بٹنوں والا فارمل ڈیزائن',
      'ڈی ٹی ایف لوگو پرنٹنگ',
      'آرام دہ سائیڈ وینٹ کٹ'
    ],
    turnaroundEn: '2 - 3 Days',
    turnaroundUr: '2 تا 3 دن',
    sizes: ['M', 'L', 'XL', '2XL'],
    colors: ['Jet Black', 'Navy Blue', 'Bottle Green', 'White', 'Royal Blue']
  }
];

export const REVIEWS: { [key: string]: any }[] = [
  {
    id: 'rev-1',
    nameEn: 'Usman Tariq',
    nameUr: 'عثمان طارق',
    locationEn: 'Karachi, Pakistan',
    locationUr: 'کراچی، پاکستان',
    rating: 5,
    date: '3 days ago',
    commentEn: 'Ordered 150 pieces of oversized tees for our streetwear brand launch in Karachi. The DTF print clarity and fabric GSM blew our expectations away! Customer support on WhatsApp answered within 5 minutes.',
    commentUr: 'ہم نے اپنے اسٹریٹ ویئر برانڈ کے لیے 150 اوور سائزڈ شرٹس کا آرڈر دیا۔ پرنٹنگ کی صفائی اور کپڑے کی کوالٹی لاجواب ہے۔ واٹس ایپ پر 5 منٹ میں رہنمائی ملی۔',
    itemEn: 'Heavyweight Oversized T-Shirts (150 pcs)',
    itemUr: 'اوور سائزڈ ٹی شرٹس (150 عدد)',
    verified: true
  },
  {
    id: 'rev-2',
    nameEn: 'Ahmed Raza',
    nameUr: 'احمد رضا',
    locationEn: 'Gwadar, Balochistan',
    locationUr: 'گوادر، بلوچستان',
    rating: 5,
    date: '1 week ago',
    commentEn: 'Shaheen DTF Printing provided us with bulk DTF rolls and custom waterproof stickers for our logistics fleet. Rapid delivery right here in Gwadar and flawless print saturation.',
    commentUr: 'شاہین ڈی ٹی ایف پرنٹنگ نے گوادر میں ہماری لاجسٹکس کمپنی کے لیے واٹر پروف اسٹیکرز اور ڈی ٹی ایف رولز فراہم کیے۔ تیز ترسیل اور لاجواب کوالٹی۔',
    itemEn: 'Custom Vinyl Stickers & DTF Rolls',
    itemUr: 'کسٹم ونائل اسٹیکرز اور رولز',
    verified: true
  },
  {
    id: 'rev-3',
    nameEn: 'Hamza Sheikh',
    nameUr: 'حمزہ شیخ',
    locationEn: 'Lahore, Pakistan',
    locationUr: 'لاہور، پاکستان',
    rating: 5,
    date: '2 weeks ago',
    commentEn: 'The DTF gang sheet quality is the best in Pakistan. Pressed 40 hoodies with a regular heat press at 160°C and peeled warm—flawless results without any glue bleed.',
    commentUr: 'ڈی ٹی ایف گینگ شیٹس کا رزلٹ پورے پاکستان میں سب سے بہترین ہے۔ 40 ہڈیز پر پریس کیا، رزلٹ انتہائی شارپ اور رنگ چمکدار آئے۔',
    itemEn: 'DTF Gang Sheet 5 Meters',
    itemUr: 'ڈی ٹی ایف گینگ شیٹ 5 میٹر',
    verified: true
  },
  {
    id: 'rev-4',
    nameEn: 'Sarah Mansoor',
    nameUr: 'سارہ منصور',
    locationEn: 'Islamabad, Pakistan',
    locationUr: 'اسلام آباد، پاکستان',
    rating: 5,
    date: '3 weeks ago',
    commentEn: 'Ordered holographic stickers for my graphic illustration shop. The holographic rainbow shine is brilliant and completely waterproof. Will definitely be a regular client!',
    commentUr: 'میری آرٹ شاپ کے لیے ہولوگرافک اسٹیکرز بنوائے۔ روشنی میں ان کی چمک کمال ہے اور بالکل واٹر پروف ہیں۔ شکریہ شاہین ڈی ٹی ایف پرنٹنگ۔',
    itemEn: 'Holographic Die-Cut Stickers',
    itemUr: 'ہولوگرافک ڈائی کٹ اسٹیکرز',
    verified: true
  }
];
