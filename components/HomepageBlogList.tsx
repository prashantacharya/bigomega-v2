import Link from 'next/link';
import { formattedBlogDate } from '../utils/date';

interface IHomePageBlogList {
  blogs: any;
}

const HomePageBlogList = (props: IHomePageBlogList) => {
  const { blogs } = props;
  console.log(blogs);

  return (
    <section className="bg-normal py-10">
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Blogs
        </h2>

        <div className="my-10 grid gap-10 grid-cols-1 md:grid-cols-3">
          {blogs.map((blog: any) => (
            <div key={blog.id} className="grid-item">
              <div className="bg-normal dark:bg-section rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <div className="flex-1 p-4">
                    <Link href={`/blogs/${blog.id}`}>
                      <h3 className="mb-4 text-xl text-primary-normal hover:text-primary-darker font-bold cursor-pointer">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-secondary-normal font-semibold">
                      {formattedBlogDate(blog.date)}
                    </p>
                    <p className="mt-4 dark:text-white">{blog?.subtitle}</p>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogList;
