export type SocialLink = {
  label: string;
  href: string;
  icon: 'linkedin' | 'github';
};

export const profile = {
  name: 'Valentina Lorca',
  location: 'Remote | Madrid, Spain',
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/valentinalorcap/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/valentinalorcap',
    icon: 'github',
  },
];
