import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  const switchTheme = () => {
    themeContext?.toggleTheme();
  };

  return (
    <button
      className="border-2 border-primary-normal hover:bg-primary-normal ease-in-out duration-300 mt-4 p-1 text-primary-normal hover:text-white text-xs rounded"
      onClick={switchTheme}
    >
      {themeContext?.theme === 'default' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeSwitch;
