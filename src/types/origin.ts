import type { ImageMetadata } from "astro";

export interface OriginImage {
  src: ImageMetadata;
  alt: string;
}

export interface Origin {
  slug: string;
  country: string;
  region: string;
  producer: string;
  process: string;
  elevation: string;
  story: string;

  /**
   * Product slugs linked to this origin.
   */
  linkedCoffees: string[];

  image: OriginImage;

  featured?: boolean;
}
