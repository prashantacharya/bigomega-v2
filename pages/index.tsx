import Nav from '../components/Nav';
import Timeline from '../components/Timeline';
import HeroSection from '../components/HeroSection';
import ThemeSwitch from '../components/ThemeSwitch';

const HomePage = () => {
  return (
    <div className="bg-normal">
      <Nav />

      <HeroSection />

      <Timeline />

      <div className="mt-10">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default HomePage;
