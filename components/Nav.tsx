import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import links from '../constants/links';
import ThemeSwitch from './ThemeSwitch';

const Nav = () => {
  const { pathname } = useRouter();
  const currentPage = `/${pathname.split('/')[1]}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--background)_80%,transparent)] backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="bg-gradient-brand grid h-7 w-7 place-items-center rounded-lg text-sm text-white transition-transform group-hover:rotate-[-8deg]">
            Ω
          </span>
          <span className="hidden sm:inline">BigOmega</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={classNames(
                    'rounded-full px-3 py-1.5 text-sm transition-colors',
                    link.url === currentPage
                      ? 'text-ink font-medium'
                      : 'text-muted hover:text-ink',
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
