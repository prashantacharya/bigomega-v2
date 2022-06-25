import Wrapper from '../../components/Wrapper';
import { getPostById, getSortedPostsData } from '../../utils/posts';

const BlogPost = (props: any) => {
  const { post } = props;

  return (
    <Wrapper>
      <div className="container mx-auto blogs">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {post.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="bg-normal text-black dark:text-white"
        />
      </div>
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
