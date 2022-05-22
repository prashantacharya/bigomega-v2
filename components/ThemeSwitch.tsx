import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeSwitch = () => {
  const themeContext = useContext(ThemeContext);

  const switchTheme = () => {
    themeContext?.toggleTheme();
  };

  return (
    <button
      className="bg-primary-normal hover:bg-primary-darker ease-in-out duration-300 mt-4 p-1 text-white text-xs rounded"
      onClick={switchTheme}
    >
      Switch
    </button>
  );
};

export default ThemeSwitch;
