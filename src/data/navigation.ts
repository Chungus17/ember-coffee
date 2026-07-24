export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationGroup {
  title: string;
  links: NavigationItem[];
}

export const primaryNavigation: NavigationItem[] = [
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Subscriptions',
    href: '/subscriptions',
  },
  {
    label: 'Origins',
    href: '/origins',
  },
  {
    label: 'Brewing',
    href: '/brewing',
  },
  {
    label: 'Story',
    href: '/our-story',
  },
];

export const footerNavigation: NavigationGroup[] = [
  {
    title: 'Shop',
    links: [
      {
        label: 'All coffee',
        href: '/shop',
      },
      {
        label: 'Single origins',
        href: '/shop?collection=single-origin',
      },
      {
        label: 'Signature blends',
        href: '/shop?collection=blends',
      },
      {
        label: 'Subscriptions',
        href: '/subscriptions',
      },
      {
        label: 'Monthly drop',
        href: '/monthly-drop',
      },
    ],
  },
  {
    title: 'Learn',
    links: [
      {
        label: 'Find your roast',
        href: '/find-your-roast',
      },
      {
        label: 'Origins',
        href: '/origins',
      },
      {
        label: 'Brewing guides',
        href: '/brewing',
      },
      {
        label: 'Journal',
        href: '/journal',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'Our story',
        href: '/our-story',
      },
      {
        label: 'Sustainability',
        href: '/sustainability',
      },
      {
        label: 'Sourcing approach',
        href: '/origins',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'Contact',
        href: '/contact',
      },
      {
        label: 'Delivery and returns',
        href: '/delivery-and-returns',
      },
      {
        label: 'Frequently asked questions',
        href: '/faq',
      },
      {
        label: 'Account',
        href: '/account',
      },
    ],
  },
];

export const policyNavigation: NavigationItem[] = [
  {
    label: 'Privacy',
    href: '/privacy',
  },
  {
    label: 'Terms',
    href: '/terms',
  },
  {
    label: 'Cookies',
    href: '/cookies',
  },
  {
    label: 'Accessibility',
    href: '/accessibility',
  },
];

export const socialNavigation: NavigationItem[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    external: true,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/',
    external: true,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    external: true,
  },
];