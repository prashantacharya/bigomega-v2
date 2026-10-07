import Link from 'next/link';
import { formattedBlogDate } from '../utils/date';

export interface PostListItem {
  title: string;
  date: string;
  href: string;
  subtitle?: string | null;
  isExternal?: boolean;
}

const PostList = ({ posts }: { posts: PostListItem[] }) => {
  return (
    <ul className="-mx-3">
      {posts.map((post) => {
        const content = (
          <>
            <div className="min-w-0">
              <h3 className="font-medium transition-colors group-hover:text-primary-normal">
                {post.title}
              </h3>
              {post.subtitle && (
                <p className="mt-1 line-clamp-1 text-sm text-muted">
                  {post.subtitle}
                </p>
              )}
            </div>
            <time className="shrink-0 font-mono text-xs text-muted sm:pt-1">
              {formattedBlogDate(post.date)}
            </time>
          </>
        );
        const className =
          'group flex flex-col-reverse gap-1 rounded-xl px-3 py-4 transition-colors hover:bg-surface sm:flex-row sm:justify-between sm:gap-6';

        return (
          <li key={post.href}>
            {post.isExternal ? (
              <a href={post.href} target="_blank" rel="noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link href={post.href} className={className}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
