import classNames from 'classnames';

// Monochrome glyphs so the icons inherit text colour in both themes.
const icons: Record<string, JSX.Element> = {
  Email: (
    <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.9.25 7.1 5.33L19.1 7H4.9Zm14.6 1.6-7.05 5.29a.75.75 0 0 1-.9 0L4.5 8.6v8.65c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25V8.6Z" />
  ),
  GitHub: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
  LinkedIn: (
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10H5.67v8.34h2.67ZM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.48v-4.57c0-2.46-1.31-3.6-3.06-3.6a2.64 2.64 0 0 0-2.4 1.32V10h-2.66v8.34h2.66v-4.6c0-1.21.23-2.39 1.73-2.39 1.48 0 1.5 1.39 1.5 2.47v4.52h2.23Z" />
  ),
  X: (
    <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.73H5.58l11.09 14.44Z" />
  ),
  Instagram: (
    <path d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.83a3.08 3.08 0 1 1 0-6.16 3.08 3.08 0 0 1 0 6.16Zm6.05-8.02a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3c-2.44 0-2.75.01-3.71.05-3.27.15-5.09 1.97-5.24 5.24C3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.15 3.27 1.97 5.09 5.24 5.24.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c3.26-.15 5.1-1.97 5.24-5.24.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.15-3.26-1.97-5.09-5.24-5.24C14.75 3.01 14.44 3 12 3Zm0 1.62c2.4 0 2.69.01 3.64.05 2.44.11 3.58 1.27 3.69 3.69.04.95.05 1.23.05 3.64s-.01 2.69-.05 3.64c-.11 2.42-1.25 3.58-3.69 3.69-.95.04-1.23.05-3.64.05s-2.69-.01-3.64-.05c-2.45-.11-3.58-1.27-3.69-3.69-.04-.95-.05-1.23-.05-3.64s.01-2.69.05-3.64c.11-2.42 1.25-3.58 3.69-3.69.95-.04 1.24-.05 3.64-.05Z" />
  ),
};

export const socialLinks = [
  { title: 'Email', href: 'mailto:dev.prashaant@gmail.com' },
  { title: 'GitHub', href: 'https://github.com/prashantacharya' },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prashant-acharya-141a36132/',
  },
  { title: 'X', href: 'https://twitter.com/dev_prashaant' },
  { title: 'Instagram', href: 'https://www.instagram.com/prashant_acharya_' },
];

const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <ul className={classNames('flex items-center gap-1', className)}>
      {socialLinks.map((link) => (
        <li key={link.title}>
          <a
            href={link.href}
            title={link.title}
            aria-label={link.title}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-primary-normal"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
              {icons[link.title]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
