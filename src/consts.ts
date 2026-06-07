export const SITE_TITLE = 'CSE @ IIT Gandhinagar';
export const SITE_DESCRIPTION =
  'Department of Computer Science and Engineering at the Indian Institute of Technology Gandhinagar';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | CSE @ IITGN',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'IIT Gandhinagar',
    'IITGN',
    'Computer Science',
    'CSE',
    'Engineering',
    'Research',
    'Education',
  ],
  authors: [{ name: 'IIT Gandhinagar' }],
  creator: 'IIT Gandhinagar',
  publisher: 'IIT Gandhinagar',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'CSE @ IITGN',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Computer Science and Engineering, IIT Gandhinagar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.jpg'],
    creator: '@cse_iitgn',
  },
};
