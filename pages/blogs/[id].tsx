import Head from 'next/head';
import Link from 'next/link';
import Wrapper from '../../components/Wrapper';
import { formattedBlogDate } from '../../utils/date';
import { getPostById, getSortedPostsData } from '../../utils/posts';

const BlogPost = (props: any) => {
  const { post } = props;

  return (
    <Wrapper>
      <Head>
        <title>{post?.title ? `${post.title} · Prashant Acharya` : 'Blog'}</title>
      </Head>
      <article className="container pt-12 sm:pt-20">
        <Link
          href="/blogs"
          className="text-sm text-muted transition-colors hover:text-primary-normal"
        >
          ← All posts
        </Link>

        <header className="mb-12 mt-8 border-b border-line pb-10">
          {post?.date && (
            <time className="font-mono text-xs text-muted">
              {formattedBlogDate(post.date)}
            </time>
          )}
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post?.title}
          </h1>
          {post?.subtitle && (
            <p className="mt-4 text-lg text-muted">{post.subtitle}</p>
          )}
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />
      </article>
    </Wrapper>
  );
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const post = getPostById(id);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const allPostsData = getSortedPostsData();

  const paths = allPostsData.map((post: any) => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default BlogPost;
