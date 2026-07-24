export interface HomeHeroData {
  eyebrow: string;
  title: string;
  copy: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  imageAlt: string;
}

export interface RitualStatementData {
  eyebrow: string;
  statement: string;
  supportingCopy: string;
}

export const homeHero: HomeHeroData = {
  eyebrow: 'Ember Specialty Coffee',
  title: 'Coffee worth slowing down for.',
  copy:
    'Thoughtfully sourced and carefully roasted coffee, selected around the flavours you enjoy and the way you brew.',
  primaryAction: {
    label: 'Shop coffee',
    href: '/shop',
  },
  secondaryAction: {
    label: 'Find your roast',
    href: '/find-your-roast',
  },
  imageAlt:
    'Freshly brewed coffee beside Ember coffee packaging in warm morning light.',
};

export const ritualStatement: RitualStatementData = {
  eyebrow: 'Ritual over routine',

  statement:
    'Better coffee begins when you give it a little more attention.',

  supportingCopy:
    'A few quiet minutes, good water and a coffee chosen for the way you like to drink it.',
};