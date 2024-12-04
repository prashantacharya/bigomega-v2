import { z } from 'zod';
import Head from 'next/head';
import Image from 'next/image';
import config from '../../constants/config';
import { getAllPosts } from '../../lib/client';
import Wrapper from '../../components/Wrapper';
import { getSortedPostsData } from '../../utils/posts';
import { AllPostsDataSchema, PostSchema } from '../../lib/schema';
import { formattedBlogDate } from '../../utils/date';

interface BlogPageProps {
  allPostsData: any;
  hashNodePosts: z.infer<typeof AllPostsDataSchema>;
}

const Blogs = (props: BlogPageProps) => {
  const { hashNodePosts } = props;

  return (
    <Wrapper>
      <Head>
        <title>Blogs - BigOmega</title>
      </Head>
      <article className="container mx-auto bg-normal">
        <div className="my-10 grid content-stretch gap-16 grid-cols-1 md:grid-cols-3">
          {/*allPostsData.map((post: any) => (
            <BlogCard blog={post} key={post.id} />
          )) */}

          {hashNodePosts.publication.posts.edges.map((post) => (
            <BlogCard blog={post.node} key={post.node.slug} />
          ))}
        </div>
      </article>
    </Wrapper>
  );
};

const BlogCard = (props: { blog: z.infer<typeof PostSchema> }) => {
  const { blog } = props;

  return (
    <div
      className="bg-normal dark:bg-section rounded-lg shadow-lg"
      key={blog.slug}
    >
      <div className="flex items-center justify-center">
        {blog.coverImage && blog?.coverImage?.url ? (
          <Image
            height="200"
            width="400"
            src={blog.coverImage.url}
            alt={blog.title}
          />
        ) : (
          <Image
            height="200"
            width="400"
            src="/blog-list-placeholder.png"
            alt=""
          />
        )}
      </div>

      <div className="p-4">
        <a
          href={`${config.BLOG_URL}/${blog.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="text-xl text-primary-normal hover:text-primary-darker font-bold cursor-pointer">
            {blog.title}
          </h3>
        </a>
        <p className="my-2 text-sm text-secondary-normal font-semibold">
          {formattedBlogDate(blog.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const hashNodePosts = await getAllPosts();

  return {
    props: {
      allPostsData,
      hashNodePosts: hashNodePosts,
    },
  };
};

export default Blogs;
