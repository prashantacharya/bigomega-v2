import Head from 'next/head';
import Wrapper from '../../components/Wrapper';
import PostList, { type PostListItem } from '../../components/PostList';
import { getSortedPostsData } from '../../utils/posts';

const Blogs = ({ blogs }: { blogs: PostListItem[] }) => {
  return (
    <Wrapper>
      <Head>
        <title>Blogs · Prashant Acharya</title>
      </Head>
      <div className="container pt-16 sm:pt-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Notes on JavaScript, the web, and whatever I&apos;m learning at the
          moment.
        </p>
        <div className="mt-12">
          <PostList posts={blogs} />
        </div>
      </div>
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const blogs: PostListItem[] = getSortedPostsData().map((post: any) => ({
    title: post.title,
    date: post.date,
    subtitle: post.subtitle ?? null,
    href: `/blogs/${post.id}`,
  }));

  return { props: { blogs } };
};

export default Blogs;
