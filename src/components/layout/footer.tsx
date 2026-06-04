'use client';

import { NAV_LINKS } from './navbar';

import { EcommerceFooter2 } from '@/components/ecommerce-footer2';

const EXCLUDED_FOOTER_SECTIONS = ['Careers', 'Updates'];

const footerLinks = NAV_LINKS.filter(
  (link) => link.subitems && !EXCLUDED_FOOTER_SECTIONS.includes(link.label),
).map((link) => ({
  title: link.label,
  id: link.label.toLowerCase().replace(/\s+/g, '-'),
  items: (link.subitems ?? []).map((sub) => ({
    text: sub.label,
    link: sub.href,
    ...(sub.label === 'Patents' && { dividerAfter: true }),
  })),
}));

footerLinks.push({
  title: 'Updates',
  id: 'updates',
  items: [
    { text: 'News', link: '/updates/news' },
    { text: 'Blog', link: '/blog' },
    { text: 'Seminars', link: '/updates/seminars' },
    { text: 'Deadlines', link: '/updates/deadlines' },
    { text: 'Outreach', link: '/updates/outreach' },
    { text: 'Events', link: '/updates/events' },
  ],
});

const SOCIAL_ICONS = {
  x: {
    title: 'X',
    light:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg',
    dark: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg',
  },
  linkedin: {
    title: 'LinkedIn',
    light:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg',
    dark: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg',
  },
  youtube: {
    title: 'YouTube',
    light:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'/%3E%3Cpath d='m10 15 5-3-5-3z'/%3E%3C/svg%3E",
    dark: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'/%3E%3Cpath d='m10 15 5-3-5-3z'/%3E%3C/svg%3E",
  },
  instagram: {
    title: 'Instagram',
    light:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg',
    dark: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg',
  },
};

const RSS_ICON = {
  title: 'RSS',
  light: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 11a9 9 0 0 1 9 9'/%3E%3Cpath d='M4 4a16 16 0 0 1 16 16'/%3E%3Ccircle cx='5' cy='19' r='1'/%3E%3C/svg%3E",
  dark: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 11a9 9 0 0 1 9 9'/%3E%3Cpath d='M4 4a16 16 0 0 1 16 16'/%3E%3Ccircle cx='5' cy='19' r='1'/%3E%3C/svg%3E",
};

const socialLinks = [
  { icon: SOCIAL_ICONS.x, link: 'https://twitter.com/cse_iitgn' },
  {
    icon: SOCIAL_ICONS.linkedin,
    link: 'https://www.linkedin.com/company/cse-iitgn',
  },
  {
    icon: SOCIAL_ICONS.youtube,
    link: 'https://www.youtube.com/channel/UCPYUnvUV3CiMmkhfYME48QQ',
  },
  { icon: SOCIAL_ICONS.instagram, link: 'https://instagram.com/iit_gandhinagar' },
  { icon: RSS_ICON, link: '/rss.xml' },
];

const Footer = () => {
  return (
    <div className="border-t">
      <EcommerceFooter2
        newsletter={{
          title: 'Stay Connected',
          description:
            'Subscribe to hear about seminars, research highlights, and department news.',
        }}
        footerLinks={footerLinks}
        socialLinks={socialLinks}
        description="Department of Computer Science and Engineering, IIT Gandhinagar, Palaj, Gujarat 382355, India"
      />
      <div className="container pb-6">
        <p className="text-muted-foreground text-center text-xs">
          &copy; {new Date().getFullYear()} Department of Computer Science and
          Engineering, IIT Gandhinagar
        </p>
      </div>
    </div>
  );
};

export default Footer;
