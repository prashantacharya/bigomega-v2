import ThemeProvider from '../context/ThemeProvider';
import ThemeSwitch from '../components/ThemeSwitch';

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="text-center bg-normal p-4">
        <h1 className="text-3xl text-primary-darker font-bold">Hello world!</h1>
        <h1 className="text-3xl text-primary-normal font-bold">Hello world!</h1>
        <h1 className="text-3xl text-secondary-darker font-bold">
          Hello world!
        </h1>
        <h1 className="text-3xl text-secondary-normal font-bold">
          Hello world!
        </h1>

        <ThemeSwitch />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
