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
            <li key={post.id}>
              <Link href={`/blogs/${post.id}`}>
                <a className="text-primary-normal hover:text-primary-darker">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </Wrapper>
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
