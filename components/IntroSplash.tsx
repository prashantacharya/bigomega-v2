import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Shared with HeroSection so the name can fly from the splash into the hero.
export const NAME_LAYOUT_ID = 'hero-name';
export const NAME_CLASSES =
  'text-gradient text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl';

const lines = [
  { label: 'born in', text: 'Kathmandu, Nepal' },
  { label: 'shipped software at', text: 'Leapfrog & Optible AI' },
  { label: 'now researching', text: 'LLMs at Miami University' },
];

const COMMAND = 'whoami';
const TYPE_MS = 90;
const LINE_MS = 1150;
const NAME_REVEAL_MS = 900;
const START_LINES_MS = COMMAND.length * TYPE_MS + 450;
// When the name starts sweeping in; the intro then waits for "Proceed".
const NAME_AT_MS = START_LINES_MS + lines.length * LINE_MS;

// Latches to true the first time the tab is visible.
let hasBeenVisible = false;
const getHasBeenVisible = () =>
  (hasBeenVisible ||= document.visibilityState === 'visible');

const subscribeVisibility = (callback: () => void) => {
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
};

interface IntroSplashProps {
  leaving: boolean;
  onFinish: () => void; // proceed or skip: hand the name to the hero
  onExited: () => void; // curtain is gone; unmount
}

const IntroSplash = ({ leaving, onFinish, onExited }: IntroSplashProps) => {
  const [typed, setTyped] = useState(0);
  // -1 = typing the command, 0..n-1 = lines, n = name
  const [step, setStep] = useState(-1);

  // Start the clock only once the tab is visible: browsers pause animation
  // frames in background tabs, so the timeline would race ahead of the visuals.
  const visible = useSyncExternalStore(
    subscribeVisibility,
    getHasBeenVisible,
    () => false,
  );

  useEffect(() => {
    if (!visible) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= COMMAND.length; i++) {
      timers.push(setTimeout(() => setTyped(i), i * TYPE_MS));
    }
    for (let i = 0; i <= lines.length; i++) {
      timers.push(setTimeout(() => setStep(i), START_LINES_MS + i * LINE_MS));
    }
    return () => timers.forEach(clearTimeout);
  }, [visible]);

  const showName = step === lines.length && !leaving;

  // Move focus to "Proceed" once it appears, so Enter or Space continues.
  const proceedRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!showName) return;
    const timer = setTimeout(
      () => proceedRef.current?.focus({ preventScroll: true }),
      NAME_REVEAL_MS,
    );
    return () => clearTimeout(timer);
  }, [showName]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFinish();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden bg-[hsl(195,46%,5%)] text-[hsl(30,20%,94%)]"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{
        clipPath: leaving ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)',
      }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      onAnimationComplete={() => leaving && onExited()}
    >
      {/* Slow-drifting brand glow (radial gradients: no blur filter to repaint) */}
      <motion.div
        className="pointer-events-none absolute -left-1/3 top-0 h-[90vmax] w-[90vmax] bg-[radial-gradient(closest-side,hsl(354,100%,67%),transparent)] opacity-25 will-change-transform"
        animate={{ x: ['0%', '25%', '5%'], y: ['0%', '-10%', '10%'] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/4 -right-1/3 h-[80vmax] w-[80vmax] bg-[radial-gradient(closest-side,hsl(37,100%,60%),transparent)] opacity-20 will-change-transform"
        animate={{ x: ['0%', '-20%', '0%'], y: ['0%', '10%', '-5%'] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="container relative flex h-full flex-col justify-center">
        <p className="mb-6 font-mono text-sm text-[hsl(210,8%,62%)]">
          <span className="text-[hsl(354,100%,67%)]">~/prashant</span> ${' '}
          {COMMAND.slice(0, typed)}
          <motion.span
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-current"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </p>

        <div className="relative min-h-[9rem] sm:min-h-[11rem]">
          <AnimatePresence mode="wait">
            {step >= 0 && step < lines.length && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(12px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-2 font-mono text-sm text-[hsl(37,100%,60%)]">
                  {lines[step].label}
                </p>
                <p className="text-4xl font-semibold tracking-tight sm:text-6xl">
                  {lines[step].text}
                </p>
              </motion.div>
            )}

            {showName && (
              <motion.div
                key="name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p className="mb-2 font-mono text-sm text-[hsl(37,100%,60%)]">
                  hi, I&apos;m
                </p>
                <motion.h2
                  layoutId={NAME_LAYOUT_ID}
                  className={NAME_CLASSES}
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                >
                  Prashant Acharya
                </motion.h2>
                <motion.button
                  ref={proceedRef}
                  type="button"
                  onClick={onFinish}
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(354,100%,67%)] px-6 py-3 text-sm font-medium text-white outline-none transition-colors hover:bg-[hsl(354,79%,57%)] focus-visible:ring-2 focus-visible:ring-[hsl(37,100%,60%)] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(195,46%,5%)]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: NAME_REVEAL_MS / 1000,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Proceed
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress (fills until the name is in) + skip */}
      <motion.div
        className="bg-gradient-brand absolute bottom-0 left-0 h-[3px]"
        initial={{ width: '0%' }}
        animate={{ width: visible ? '100%' : '0%' }}
        transition={{
          duration: (NAME_AT_MS + NAME_REVEAL_MS) / 1000,
          ease: 'linear',
        }}
      />
      {step < lines.length && (
        <button
          type="button"
          onClick={onFinish}
          className="absolute bottom-6 right-5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
        >
          skip intro <span className="hidden sm:inline">· esc</span>
        </button>
      )}
    </motion.div>
  );
};

export default IntroSplash;
