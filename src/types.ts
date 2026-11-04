export type Language = 'en' | 'ur';
export type Currency = 'PKR' | 'USD';

export interface Product {
  id: string;
  category: 'tshirts' | 'dtf' | 'stickers' | 'clothing';
  nameEn: string;
  nameUr: string;
  taglineEn: string;
  taglineUr: string;
  descriptionEn: string;
  descriptionUr: string;
  pricePKR: number;
  priceUSD: number;
  minQty: number;
  image: string;
  featuresEn: string[];
  featuresUr: string[];
  turnaroundEn: string;
  turnaroundUr: string;
  sizes?: string[];
  colors?: string[];
}

export interface Review {
  id: string;
  nameEn: string;
  nameUr: string;
  locationEn: string;
  locationUr: string;
  rating: number;
  date: string;
  commentEn: string;
  commentUr: string;
  itemEn: string;
  itemUr: string;
  verified: boolean;
}

export interface QuoteConfig {
  productType: 'tshirts' | 'dtf' | 'stickers' | 'hoodies';
  printSize: 'pocket' | 'a4' | 'a3' | 'gang_meter';
  quantity: number;
  materialTier: 'standard' | 'premium' | 'heavyweight';
  sides: 'single' | 'double';
  customNotes: string;
}
