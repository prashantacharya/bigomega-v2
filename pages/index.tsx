import Head from 'next/head';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { LayoutGroup } from 'framer-motion';
import Wrapper from '../components/Wrapper';
import Timeline from '../components/Timeline';
import HeroSection from '../components/HeroSection';
import IntroSplash from '../components/IntroSplash';
import Technologies from '../components/Technologies';
import HomePageBlogList from '../components/HomepageBlogList';
import type { PostListItem } from '../components/PostList';
import { getSortedPostsData } from '../utils/posts';
import { hasNavigatedClientSide } from '../utils/navigation';

// pending: deciding whether to play (first paint, page covered)
// playing → leaving (name flies to hero, curtain lifts) → done
type IntroPhase = 'pending' | 'playing' | 'leaving' | 'done';

// The intro plays when the homepage is the first page of a visit (URL bar,
// external link or refresh), not when reached from another page of the site.
// Visitors who prefer reduced motion never get it.
const getIntroDecision = () =>
  hasNavigatedClientSide() ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'done'
    : 'playing';

const noopSubscribe = () => () => {};

const HomePage = ({ blogs }: { blogs: PostListItem[] }) => {
  const initialPhase = useSyncExternalStore<IntroPhase>(
    noopSubscribe,
    getIntroDecision,
    () => 'pending',
  );
  const [progress, setProgress] = useState<'leaving' | 'done' | null>(null);
  const phase: IntroPhase = progress ?? initialPhase;

  useEffect(() => {
    const playing = phase === 'playing';
    document.body.style.overflow = playing ? 'hidden' : '';
    document.documentElement.toggleAttribute('data-intro', playing);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.removeAttribute('data-intro');
    };
  }, [phase]);

  const finishIntro = useCallback(() => setProgress((p) => p ?? 'leaving'), []);
  const exitIntro = useCallback(() => setProgress('done'), []);

  return (
    <LayoutGroup>
      <Head>
        <title>Prashant Acharya</title>
        <meta
          name="description"
          content="Software engineer and CS grad student researching LLMs, software engineering and security."
        />
      </Head>

      {phase === 'pending' && <div className="fixed inset-0 z-50 bg-normal" />}
      {(phase === 'playing' || phase === 'leaving') && (
        <IntroSplash
          leaving={phase === 'leaving'}
          onFinish={finishIntro}
          onExited={exitIntro}
        />
      )}

      <Wrapper>
        <HeroSection
          revealed={phase === 'leaving' || phase === 'done'}
          nameInFlight={phase === 'leaving'}
        />
        <Timeline />
        <HomePageBlogList blogs={blogs} />
        <Technologies />
      </Wrapper>
    </LayoutGroup>
  );
};

export const getStaticProps = async () => {
  const blogs: PostListItem[] = getSortedPostsData()
    .slice(0, 4)
    .map((post: any) => ({
      title: post.title,
      date: post.date,
      subtitle: post.subtitle ?? null,
      href: `/blogs/${post.id}`,
    }));

  return { props: { blogs } };
};

export default HomePage;
