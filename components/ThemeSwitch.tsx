import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  const switchTheme = () => {
    themeContext?.toggleTheme();
  };

  return (
    <button
      className="bg-primary-normal hover:bg-primary-darker ease-in-out duration-300 mt-4 p-4 text-white font-bold rounded"
      onClick={switchTheme}
    >
      SWITCH THEME
    </button>
  );
};

export default ThemeSwitch;
