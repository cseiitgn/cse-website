'use client';

import React, { useEffect, useState } from 'react';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

type HeroSlide = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  objectPosition?: React.CSSProperties['objectPosition'];
};

const slides: HeroSlide[] = [
  {
    src: '/images/course-resources/theory-of-computing.png',
    alt: 'Foundations of computer science visual with automata, stacks, and computation diagrams',
    title: 'Theory Day 2026',
    description:
      'Foundations of Computer Science. 17 June 2026; registration is open.',
    ctaLabel: 'View Details',
    ctaHref: '/events/theory-day-2026',
  },
  {
    src: '/images/project-madhava-india-today.jpg',
    alt: 'Project Madhav hardware learning kits displayed at the AI Summit 2026',
    title:
      "Inside IIT Gandhinagar's prototype lab: Project Madhav leads innovation",
    ctaLabel: 'Read Article',
    ctaHref:
      'https://www.indiatoday.in/education-today/featurephilia/story/iit-gandhinagars-self-reliant-india-story-begins-in-classrooms-2869886-2026-02-18',
    objectPosition: 'center bottom',
  },
];

const SlideSummary = ({ slide }: { slide: HeroSlide }) => (
  <>
    <p className="text-sm font-medium text-foreground">{slide.title}</p>
    {slide.description && (
      <p className="mt-1 text-xs text-muted-foreground">{slide.description}</p>
    )}
  </>
);

interface SvgPath {
  path: string;
  height: number;
  width: number;
}

type MaskType = 'type-1' | 'type-2' | 'type-3' | 'type-4' | 'type-5';

const svgPaths: Record<MaskType, SvgPath> = {
  'type-1': {
    path: 'M0.928955 40.9769C0.928955 18.9149 18.7917 1.01844 40.8536 0.976903L289.97 0.507853C308.413 0.473128 323.521 15.1483 324.022 33.5845L324.886 65.4007C325.955 104.745 358.022 136.159 397.38 136.417L432.98 136.65C447.818 136.748 459.797 148.799 459.803 163.637L459.982 550.982C459.992 573.08 442.08 591 419.982 591H40.9289C18.8376 591 0.928955 573.091 0.928955 551V40.9769Z',
    height: 591,
    width: 460,
  },
  'type-2': {
    path: 'M0.811768 77.2118C0.811768 60.4225 14.4222 46.8121 31.2115 46.8121H180.95C192.496 46.8121 201.855 37.4527 201.855 25.9073V25.9073C201.855 11.9565 213.164 0.647217 227.115 0.647217H529.273C548.014 0.647217 563.206 15.8395 563.206 34.5802V34.5802C563.206 50.0897 575.779 62.6626 591.289 62.6626H820.388C837.177 62.6626 850.787 76.273 850.787 93.0623V350.953C850.787 367.742 837.177 381.353 820.388 381.353H366.165C349.852 381.353 336.627 368.128 336.627 351.814V351.814C336.627 335.501 323.402 322.276 307.089 322.276H31.2114C14.4222 322.276 0.811768 308.666 0.811768 291.876V77.2118Z',
    height: 381,
    width: 850,
  },
  'type-3': {
    path: 'M0.680664 112.659C0.680664 50.805 50.823 0.662672 112.677 0.662672H413.07C456.315 0.662672 497.495 19.1588 526.221 51.4846V51.4846C554.948 83.8104 596.128 102.307 639.373 102.307H711.793C752.427 102.307 790.787 83.5522 815.744 51.4846V51.4846C840.7 19.417 879.06 0.662644 919.695 0.662597L1225.01 0.66224C1286.86 0.662168 1337.01 50.8046 1337.01 112.658V652.815C1337.01 714.668 1286.86 764.811 1225.01 764.811L670 764.811H335.34H278.376C217.423 764.811 168.01 715.399 168.01 654.446V626.747C168.01 580.208 130.283 542.48 83.7437 542.48V542.48C37.8692 542.48 0.680664 505.292 0.680664 459.417V382.737V112.659Z',
    height: 889,
    width: 1340,
  },
  'type-4': {
    path: 'M0.811768 34.5451C0.811768 15.7441 16.053 0.502808 34.8541 0.502808H816.745C835.546 0.502808 850.787 15.7441 850.787 34.5452V242.977C850.787 261.778 835.546 277.019 816.745 277.019H638.293H550.537C527.035 277.019 504.789 266.407 490.001 248.141L486.211 243.46C453.263 202.765 390.688 204.378 359.881 246.717V246.717C346.027 265.756 323.901 277.019 300.355 277.019H213.306H34.8541C16.0531 277.019 0.811768 261.778 0.811768 242.977V34.5451Z',
    height: 278,
    width: 851,
  },
  'type-5': {
    path: 'M0.589399 112.279C0.589402 82.1213 25.037 57.6738 55.1946 57.6738H335.688C350.06 57.6738 361.712 46.0226 361.712 31.6502C361.712 14.2835 375.79 0.205078 393.157 0.205078H949.833C983.496 0.205078 1010.78 27.4941 1010.78 61.1568C1010.78 89.0156 1033.37 111.6 1061.23 111.6H1472.74C1502.9 111.6 1527.35 136.047 1527.35 166.205V629.438C1527.35 659.596 1502.9 684.044 1472.74 684.044H639.176C619.635 684.044 603.794 668.203 603.794 648.662C603.794 629.122 587.954 613.281 568.413 613.281H55.1945C25.0369 613.281 0.589358 588.833 0.58936 558.676L0.589399 112.279Z',
    height: 700,
    width: 1528,
  },
};

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  maskType?: MaskType;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

const MaskedDiv: React.FC<MaskedDivProps> = ({
  children,
  maskType = 'type-1',
  className = '',
  backgroundColor = 'transparent',
  size = 1,
}) => {
  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    backgroundColor,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    width: `${size * 100}%`,
    maxWidth: '100%',
    margin: '0 auto',
  };

  return (
    <section
      className={`pointer-events-none relative ${className}`}
      style={containerStyle}
    >
      {React.cloneElement(children, {
        className: `h-full w-full object-cover ${children.props.className || ''}`,
      })}
    </section>
  );
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.src;
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="container">
        {/* We're Growing banner */}
        <div className="mb-6 flex justify-start">
          <a
            href="/about/careers"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-muted-foreground/5 p-1 pr-4 text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:bg-muted-foreground/10"
          >
            <span className="flex items-center gap-3 rounded-full bg-muted-foreground/10 px-4 py-1.5">
              <span className="inline-block size-2 rounded-full bg-blue-500" />
              <span>We're Growing</span>
            </span>
            <span className="flex items-center gap-2">
              Join Us <ArrowRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mb-5 max-w-3xl lg:mb-0">
          <h1 className="text-left text-3xl font-semibold tracking-tighter">
            Computer Science &amp; Engineering
            <br />
            <span className="text-4xl md:text-5xl">@IITGN</span>
          </h1>
        </div>

        <div className="relative lg:-translate-y-4">
          <MaskedDiv maskType="type-5">
            <img
              className="h-full w-full object-cover"
              style={{ objectPosition: slides[currentIndex].objectPosition }}
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              decoding="async"
            />
          </MaskedDiv>

          {/* Top-right slide summary */}
          <div className="absolute -top-26 right-0 flex gap-6">
            <div className="hidden size-44 -translate-y-4 overflow-hidden rounded-3xl border border-border bg-muted/50 p-4 lg:flex lg:flex-col lg:justify-center xl:-translate-y-0">
              <SlideSummary slide={slides[currentIndex]} />
            </div>
          </div>

          {/* Mobile: box below the image */}
          <div className="mt-5 flex w-full gap-6 lg:hidden">
            <div className="flex h-44 w-full items-center justify-center rounded-3xl border border-border bg-muted/50 p-4">
              <div>
                <SlideSummary slide={slides[currentIndex]} />
              </div>
            </div>
          </div>

          <Button
            className="group -bottom-5 left-0 mt-3 flex items-center justify-center rounded-full bg-foreground px-6 py-2 text-background tracking-tight hover:bg-blue-500 dark:hover:bg-blue-400 hover:gap-4 lg:absolute lg:bottom-0 lg:mt-0 xl:bottom-3"
            asChild
          >
            <a
              href={slides[currentIndex].ctaHref}
              target={
                slides[currentIndex].ctaHref.startsWith('http')
                  ? '_blank'
                  : undefined
              }
              rel={
                slides[currentIndex].ctaHref.startsWith('http')
                  ? 'noreferrer'
                  : undefined
              }
            >
              {slides[currentIndex].ctaLabel}{' '}
              <ArrowRight className="size-4 -rotate-45 transition-all duration-300 ease-out group-hover:rotate-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
