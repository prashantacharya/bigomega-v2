import Link from 'next/link';
import Section from './Section';
import PostList, { type PostListItem } from './PostList';

const HomePageBlogList = ({ blogs }: { blogs: PostListItem[] }) => {
  return (
    <Section
      title="Recent writing"
      action={
        <Link
          href="/blogs"
          className="text-sm text-muted transition-colors hover:text-primary-normal"
        >
          All posts →
        </Link>
      }
    >
      <PostList posts={blogs} />
    </Section>
  );
};

export default HomePageBlogList;
