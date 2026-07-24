import type { ImageMetadata } from "astro";

export type RoastLevel = "light" | "medium" | "dark";

export type ProductAvailability =
  | "available"
  | "low-stock"
  | "sold-out"
  | "coming-soon";

export interface ProductImage {
  src: ImageMetadata;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;

  country: string;
  region: string;
  producer?: string;

  process: string;
  altitude?: string;

  roast: RoastLevel;
  tastingNotes: string[];

  /**
   * Store prices in the smallest currency unit.
   *
   * £16.00 is represented as 1600.
   */
  price: number;
  currency: "GBP";

  image: ProductImage;
  availability: ProductAvailability;

  featured?: boolean;
}
