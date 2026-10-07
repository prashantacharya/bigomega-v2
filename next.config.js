// Posts whose slugs changed in the blog migration, keyed by their old
// /blogs/<id> path so existing links keep working.
const renamedPosts = {
  'error-handling-react': 'error-handling-while-making-ajax-requests-in-javascript',
  'git-github-guide': 'a-beginners-guide-to-git-and-github',
  'learning-techniques': 'techniques-for-learning-a-new-technology-or-a-new-tool',
  promises: 'promises-in-javascript',
  'react-state-tip': 'a-minor-error-we-make-while-creating-a-reacts-state',
  'state-of-cs': 'the-state-of-computer-science-in-nepal',
  'tech-conference': 'organizing-and-speaking-at-a-tech-conference',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return Object.entries(renamedPosts).map(([from, to]) => ({
      source: `/blogs/${from}`,
      destination: `/blogs/${to}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
