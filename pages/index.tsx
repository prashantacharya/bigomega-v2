import Head from 'next/head';
import Nav from '../components/Nav';
import Timeline from '../components/Timeline';
import { getSortedPostsData } from '../utils/posts';
import HeroSection from '../components/HeroSection';
import HomePageBlogList from '../components/HomepageBlogList';
import Technologies from '../components/Technologies';
import SocialMedia from '../components/Socialmedia';
import Footer from '../components/Footer';

const HomePage = (props: any) => {
  const { blogs } = props;

  const homePageBlogs = blogs.slice(0, 3);

  return (
    <div className="bg-normal">
      <Head>
        <title>Home - BigOmega</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />

      <HeroSection />

      <Timeline />

      <HomePageBlogList blogs={homePageBlogs} />

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
