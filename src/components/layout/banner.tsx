'use client';

import { useEffect, useState } from 'react';

import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const useBannerVisibility = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const bannerDismissed = localStorage.getItem('banner-dismissed');
    setIsBannerVisible(bannerDismissed !== 'true');
  }, []);

  const dismissBanner = () => {
    setIsBannerVisible(false);
    localStorage.setItem('banner-dismissed', 'true');
  };

  return { isBannerVisible, dismissBanner, isClient };
};

const Banner = () => {
  const { isBannerVisible, dismissBanner, isClient } = useBannerVisibility();

  if (!isClient || !isBannerVisible) {
    return null;
  }

  return (
    <div className="bg-primary relative">
      <div className="container flex items-center justify-between gap-4 py-2.5 pr-12">
        <div className="flex flex-1 items-center justify-center gap-3 sm:gap-4">
          <span className="text-primary-foreground text-center text-sm font-medium">
            This website is under active development.
          </span>
        </div>
        <button
          onClick={dismissBanner}
          className={cn(
            'absolute top-1/2 right-4 -translate-y-1/2 rounded-sm p-1.5',
            'text-primary-foreground/70 hover:text-primary-foreground',
            'transition-all duration-200 hover:scale-110 hover:bg-white/10',
            'focus:ring-2 focus:ring-white/30 focus:outline-none',
          )}
          aria-label="Close banner"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
