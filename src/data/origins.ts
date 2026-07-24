import type { Origin } from "../types/origin";

import narinoColombia from "../assets/images/origins/narino-colombia.jpg";
import geraEthiopia from "../assets/images/origins/gera-ethiopia.jpg";
import minasGeraisBrazil from "../assets/images/origins/minas-gerais-brazil.jpg";
import nyeriKenya from "../assets/images/origins/nyeri-kenya.jpg";

export const origins: Origin[] = [
  {
    slug: "narino-colombia",

    country: "Colombia",
    region: "Nariño",
    producer: "Smallholder growers around Buesaco",
    process: "Washed",
    elevation: "1,850–2,050 masl",

    story:
      "High-elevation farms around Buesaco experience cool nights and slower cherry development. Small lots are washed and dried carefully before being combined into a bright, structured regional selection.",

    linkedCoffees: ["sol-de-narino"],

    image: {
      src: narinoColombia,
      alt: "Steep green coffee-growing hills in Nariño, Colombia, under soft morning light.",
    },

    featured: true,
  },

  {
    slug: "gera-ethiopia",

    country: "Ethiopia",
    region: "Gera, Jimma",
    producer: "Smallholder farmers from the Gera community",
    process: "Natural",
    elevation: "1,900–2,100 masl",

    story:
      "Coffee cherries from small forest-edge farms are selected at peak ripeness and dried whole on raised beds. The extended natural process develops berry sweetness while preserving the floral character associated with the region.",

    linkedCoffees: ["gera-highlands"],

    image: {
      src: geraEthiopia,
      alt: "Raised coffee drying beds surrounded by green highland vegetation in Ethiopia.",
    },

    featured: true,
  },

  {
    slug: "minas-gerais-brazil",

    country: "Brazil",
    region: "Minas Gerais",
    producer: "Fazenda Aurora",
    process: "Pulped natural",
    elevation: "1,150–1,300 masl",

    story:
      "At Fazenda Aurora, ripe cherries are depulped while some fruit remains around the seed. Slow patio drying encourages rounded sweetness and a balanced profile suited to espresso and everyday filter brewing.",

    linkedCoffees: ["fazenda-aurora"],

    image: {
      src: minasGeraisBrazil,
      alt: "Coffee drying on a broad patio at a farm in Minas Gerais, Brazil.",
    },

    featured: true,
  },

  {
    slug: "nyeri-kenya",

    country: "Kenya",
    region: "Nyeri County",
    producer: "Smallholder cooperative lots",
    process: "Washed",
    elevation: "1,700–1,950 masl",

    story:
      "Smallholders deliver ripe cherries to a local washing station, where the coffee is sorted, fermented and washed before drying on raised tables. The process produces a clean cup with concentrated fruit and bright acidity.",

    linkedCoffees: ["nyeri-ember"],

    image: {
      src: nyeriKenya,
      alt: "Coffee cherries being sorted at a washing station in Nyeri County, Kenya.",
    },

    featured: true,
  },
];

export const featuredOrigins = origins.filter((origin) => origin.featured);
