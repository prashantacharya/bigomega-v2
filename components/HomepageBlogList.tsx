import Image from 'next/image';
import Link from 'next/link';
import config from '../constants/config';
import { formattedBlogDate } from '../utils/date';

interface IHomePageBlogList {
  blogs: any;
}

const HomePageBlogList = (props: IHomePageBlogList) => {
  const { blogs } = props;

  return (
    <section className="bg-normal py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Blogs
        </h2>

        <div className="my-10 grid content-stretch gap-10 grid-cols-1 md:grid-cols-3">
          {blogs.map((blog: any) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogList;
