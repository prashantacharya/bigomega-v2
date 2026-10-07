import { createContext, useCallback, useSyncExternalStore } from 'react';

export const ThemeContext = createContext<null | {
  toggleTheme: () => void;
  theme: string;
}>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

// The `dark` class on <html> is the source of truth. pages/_document sets it
// before first paint from localStorage or the system preference, so the page
// background (including overscroll) follows the theme with no flash.
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'default';

const getServerSnapshot = () => 'default';

const ThemeProvider = (props: ThemeProviderProps) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next = getSnapshot() === 'dark' ? 'default' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {}
    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
