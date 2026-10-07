import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => themeContext?.toggleTheme()}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeSwitch;
