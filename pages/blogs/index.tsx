import Link from 'next/link';
import Wrapper from '../../components/Wrapper';
import { getSortedPostsData } from '../../utils/posts';

interface BlogPageProps {
  allPostsData: any;
}

const Blogs = (props: BlogPageProps) => {
  const { allPostsData } = props;

  return (
    <Wrapper>
      <article className="container mx-auto bg-normal">
        <ul>
          {allPostsData.map((post: any) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </ul>
      </article>
    </Wrapper>
  );
};

const BlogCard = (props: { post: any }) => {
  const { post } = props;

  console.log(post);

  return (
    <li className="bg-section my-4 p-4 rounded">
      <Link href={`/blogs/${post.id}`}>
        <a className="text-xl text-primary-normal hover:text-primary-darker">
          {post.title}
        </a>
      </Link>

      <p className="text-gray dark:text-white">{post.subtitle}</p>
    </li>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Blogs;
