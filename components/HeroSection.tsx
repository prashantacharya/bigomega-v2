import Image from 'next/image';
import Link from 'next/link';
import type { PointerEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { NAME_CLASSES, NAME_LAYOUT_ID } from './IntroSplash';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface HeroSectionProps {
  // false while the intro is still playing over the page
  revealed: boolean;
  // true while the name is flying in from the intro, so it stays on top
  nameInFlight: boolean;
}

const HeroSection = ({ revealed, nameInFlight }: HeroSectionProps) => {
  // The parallax itself is CSS scroll-driven animation (see .hero-* in
  // globals.css), so it runs on the compositor in step with scrolling.
  // Moving the content would trap the flying name below the intro curtain,
  // so the foreground layer only joins in once the name has landed.
  const contentParallax = revealed && !nameInFlight;

  // Pointer parallax on top of the scroll one: each background layer drifts
  // toward the mouse by its own amount. It lives on inner elements because the
  // scroll animation already owns the transform of .hero-glow and .hero-glyph.
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 60, damping: 20 };
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);
  const glowX = useTransform(x, [-1, 1], [-12, 12]);
  const glowY = useTransform(y, [-1, 1], [-12, 12]);
  const glyphX = useTransform(x, [-1, 1], [-28, 28]);
  const glyphY = useTransform(y, [-1, 1], [-28, 28]);
  const glyphRotate = useTransform(x, [-1, 1], [-3, 3]);

  // Mouse only: touch has no hover, so a tap would just jolt the layers.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!revealed || reduceMotion || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className="hero relative"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* Background layers. Clipped horizontally only, so nothing causes
          sideways scroll; they fade out as they move instead of being cut off
          (a mask over moving layers would force a repaint every frame). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-x-clip"
      >
        {/* Radial gradients instead of blur filters: same soft glow, no
            expensive filter to recompute. */}
        <div className="hero-glow absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{ x: glowX, y: glowY }}
          >
            <div className="absolute -left-56 -top-20 h-[36rem] w-[36rem] bg-[radial-gradient(closest-side,var(--theme-primary),transparent)] opacity-[0.16] dark:opacity-[0.22]" />
            <div className="absolute -right-48 top-24 h-[40rem] w-[40rem] bg-[radial-gradient(closest-side,var(--theme-secondary),transparent)] opacity-[0.18] dark:opacity-[0.14]" />
            <div className="absolute right-[10%] top-8 h-[24rem] w-[24rem] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--theme-primary),var(--theme-secondary)),transparent)] opacity-[0.12]" />
          </motion.div>
        </div>
        <div className="hero-glyph absolute -right-24 -top-8 select-none sm:right-[-4rem] lg:right-[calc(50%-36rem)]">
          <motion.div style={{ x: glyphX, y: glyphY, rotate: glyphRotate }}>
            <motion.span
              className="relative block text-[26rem] font-semibold leading-none sm:text-[36rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: revealed ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              {/* Soft gradient fill under a crisp outline */}
              <span className="text-gradient absolute inset-0 opacity-[0.12] dark:opacity-[0.18]">
                Ω
              </span>
              <span className="relative text-transparent [-webkit-text-stroke:1.5px_var(--line)]">
                Ω
              </span>
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div
        className={`container relative pb-20 pt-16 sm:pt-24 ${
          contentParallax ? 'hero-content' : ''
        }`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate={revealed ? 'visible' : 'hidden'}
        >
          <motion.div variants={item} className="mb-8 flex items-center gap-4">
            <div className="bg-gradient-brand rounded-full p-[2px]">
              <Image
                src="/my-image.png"
                width={64}
                height={64}
                className="rounded-full border-2 border-[var(--background)]"
                alt="Prashant Acharya"
                preload
              />
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-normal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-normal" />
              </span>
              Research Assistant · Miami University
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-2 font-mono text-sm text-muted"
          >
            hi, I&apos;m
          </motion.p>
        </motion.div>

        {revealed ? (
          <motion.h1
            layoutId={NAME_LAYOUT_ID}
            className={`${NAME_CLASSES} relative ${nameInFlight ? 'z-[60]' : ''}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            Prashant Acharya
          </motion.h1>
        ) : (
          <h1 className={`${NAME_CLASSES} invisible`}>Prashant Acharya</h1>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate={revealed ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            A software engineer and Computer Science grad student. I research{' '}
            <span className="text-ink">large language models</span>,{' '}
            <span className="text-ink">software engineering</span> and{' '}
            <span className="text-ink">security</span>, after four years of
            shipping products with JavaScript, Python and Go.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-normal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-darker"
            >
              More about me
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
