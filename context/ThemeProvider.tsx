import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<null | {
  toggleTheme: () => void;
}>(null);

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('default');

  useEffect(() => {
    const value = localStorage.getItem('theme');

    if (value) setTheme(value);
  }, []);

  const saveTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
  };

  const setAppTheme = (theme: string) => {
    setTheme(theme);
    saveTheme(theme);
  };

  const toggleTheme = () => {
    if (theme === 'dark') setAppTheme('default');
    if (theme === 'default') setAppTheme('dark');
  };

  const appTheme = theme === 'dark' ? 'theme-dark dark' : 'theme-default';

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div className={`${appTheme} bg-primary`}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
