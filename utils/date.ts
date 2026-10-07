import { format } from 'date-fns';

export const formattedBlogDate = (date: string): string => {
  const blogDate = new Date(date);

  return format(blogDate, 'MMM d, yyyy');
};
