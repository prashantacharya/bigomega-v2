import Nav from '../components/Nav';
import Timeline from '../components/Timeline';
import { getSortedPostsData } from '../utils/posts';
import HeroSection from '../components/HeroSection';
import ThemeSwitch from '../components/ThemeSwitch';
import HomePageBlogList from '../components/HomepageBlogList';
import Technologies from '../components/Technologies';
import SocialMedia from '../components/Socialmedia';
import Footer from '../components/Footer';

const HomePage = (props: any) => {
  const { blogs } = props;

  return (
    <div className="bg-normal">
      <Nav />

      <HeroSection />

      <Timeline />

      <HomePageBlogList blogs={blogs} />

      <Technologies />

      <SocialMedia />

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      blogs: allPostsData,
    },
  };
};

export default HomePage;
