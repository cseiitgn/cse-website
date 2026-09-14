import React from 'react';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  wrapperClassName?: string;
  onlyLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  wrapperClassName = '',
  onlyLogo = false,
}) => {
  return (
    <div className={cn('', wrapperClassName)}>
      <a
        href="/"
        className={cn(
          'flex items-center gap-2.5 font-semibold tracking-tight',
          className,
        )}
      >
        <img
          src="/layout/iitgn-logo.webp"
          alt="IIT Gandhinagar"
          width="180"
          height="48"
          className="w-28 h-auto dark:bg-white dark:p-1"
        />
        {!onlyLogo && (
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold">
              Computer Science & Engineering
            </span>
            <span className="text-muted-foreground text-xs">
              IIT Gandhinagar
            </span>
          </div>
        )}
      </a>
    </div>
  );
};

export default Logo;
