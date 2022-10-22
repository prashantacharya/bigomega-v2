import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { micromark } from 'micromark';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: any = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      content: micromark(matterResult.content),
      ...matterResult.data,
    };
  });

  const publishedPosts = allPostsData.filter((post: any) => post.published);

  return publishedPosts.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostById(id: string) {
  const post = getSortedPostsData().find((post: any) => post.id === id);

  return post;
}
