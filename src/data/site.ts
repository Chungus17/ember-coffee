export interface SiteAnnouncement {
  message: string;
  linkText: string;
  href: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  announcement: SiteAnnouncement | null;
}

export const site: SiteData = {
  name: "Ember Specialty Coffee",
  tagline: "Coffee worth slowing down for.",

  announcement: {
    message: "Free UK delivery on coffee orders over £35.",
    linkText: "Shop coffee",
    href: "/shop",
  },
};
