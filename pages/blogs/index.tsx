import Head from 'next/head';
import Image from 'next/image';
import Wrapper from '../../components/Wrapper';
import config from '../../constants/config';
import { formattedBlogDate } from '../../utils/date';
import { getSortedPostsData } from '../../utils/posts';

interface BlogPageProps {
  allPostsData: any;
}

const Blogs = (props: BlogPageProps) => {
  const { allPostsData } = props;

  return (
    <Wrapper>
      <Head>
        <title>Blogs - BigOmega</title>
      </Head>
      <article className="container mx-auto bg-normal">
        <div className="my-10 grid content-stretch gap-16 grid-cols-1 md:grid-cols-3">
          {allPostsData.map((post: any) => (
            <BlogCard blog={post} key={post.id} />
          ))}
        </div>
      </article>
    </Wrapper>
  );
};

const BlogCard = (props: { blog: any }) => {
  const { blog } = props;

  return (
    <div
      className="bg-normal dark:bg-section rounded-lg shadow-lg"
      key={blog.id}
    >
      <div className="flex items-center justify-center">
        {blog.thumbnail ? (
          <Image
            height="200"
            width="400"
            src={blog.thumbnail}
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
          href={`${config.BLOG_URL}${blog.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="text-xl text-primary-normal hover:text-primary-darker font-bold cursor-pointer">
            {blog.title}
          </h3>
        </a>
        <p className="my-2 text-sm text-secondary-normal font-semibold">
          {formattedBlogDate(blog.date)}
        </p>
        <p className="dark:text-white">{blog?.subtitle}</p>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blogs;
