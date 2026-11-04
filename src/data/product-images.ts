import asins from './product-asins.json';

export interface ProductImageData {
  url: string;
  width: number;
  height: number;
}

const BY_NAME = asins as Record<string, { asin: string; image?: ProductImageData }>;

/**
 * The Amazon listing photo for a product with a verified ASIN, keyed by product name
 * (the same join key as the link pipeline). Products without one get null, so a card
 * never shows a photo of a listing that might not be the product it describes.
 */
export const productImage = (name: string): ProductImageData | null => BY_NAME[name]?.image ?? null;
