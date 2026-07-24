import fazendaAuroraImage from "../assets/images/products/fazenda-aurora.jpg";
import geraHighlandsImage from "../assets/images/products/gera-highlands.jpg";
import slowHours from "../assets/images/products/slow-hours.jpg";
import solDeNarinoImage from "../assets/images/products/sol-de-narino.jpg";

import type { Product } from "../types/product";

export const products: Product[] = [
  {
    slug: "sol-de-narino",
    name: "Sol de Nariño",

    country: "Colombia",
    region: "Nariño",
    producer: "Smallholder lots from Buesaco",

    process: "Washed",
    altitude: "1,850–2,050 masl",

    roast: "light",

    tastingNotes: ["Red apple", "Panela", "Orange blossom"],

    price: 1650,
    currency: "GBP",

    image: {
      src: solDeNarinoImage,
      alt: "Ember Sol de Nariño coffee bag photographed in warm sunlight on a cream stone surface.",
    },

    availability: "available",
    featured: true,
  },

  {
    slug: "gera-highlands",
    name: "Gera Highlands",

    country: "Ethiopia",
    region: "Jimma",
    producer: "Gera smallholder community",

    process: "Natural",
    altitude: "1,900–2,100 masl",

    roast: "light",

    tastingNotes: ["Blueberry", "Jasmine", "Cocoa nib"],

    price: 1750,
    currency: "GBP",

    image: {
      src: geraHighlandsImage,
      alt: "Ember Gera Highlands coffee bag beside a ceramic cup on an oat-coloured surface.",
    },

    availability: "low-stock",
    featured: true,
  },

  {
    slug: "fazenda-aurora",
    name: "Fazenda Aurora",

    country: "Brazil",
    region: "Minas Gerais",
    producer: "Fazenda Aurora",

    process: "Pulped natural",
    altitude: "1,150–1,300 masl",

    roast: "medium",

    tastingNotes: ["Milk chocolate", "Hazelnut", "Golden raisin"],

    price: 1550,
    currency: "GBP",

    image: {
      src: fazendaAuroraImage,
      alt: "Ember Fazenda Aurora coffee bag with roasted coffee and soft directional shadows.",
    },

    availability: "available",
    featured: true,
  },

  {
    slug: "slow-hours",
    name: "Slow Hours",

    country: "Kenya",
    region: "Nyeri County",
    producer: "Smallholder cooperative lots",

    process: "Washed",
    altitude: "1,700–1,950 masl",

    roast: "medium",

    tastingNotes: ["Blackcurrant", "Brown sugar", "Grapefruit"],

    price: 1800,
    currency: "GBP",

    image: {
      src: slowHours,
      alt: "Slow Hours coffee bag displayed against a deep cocoa background with warm side lighting.",
    },

    availability: "coming-soon",
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);
