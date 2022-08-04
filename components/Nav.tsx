import Link from 'next/link';
import Image from 'next/image';
import { MenuAlt3Icon } from '@heroicons/react/solid';

import links from '../constants/links';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;
  const currentPage = pathname.split('/')[1];

  return (
    <nav className="py-5 px-3">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Image src="/logo.svg" height="55" width="200" alt="Big Omega" />

          <div className="flex justify-between items-center">
            <div className="mr-4 md:mr-10">
              <ThemeSwitch />
            </div>
            <ul className="items-center hidden md:flex">
              {links.map((link) => (
                <li className="mr-8 last:mr-0" key={link.url}>
                  <Link href={link.url} title={link.title}>
                    {link.url === `/${currentPage}` ? (
                      <span className="p-2 text-primary-normal cursor-pointer text-lg border-b-2 border-primary-background border-b-2 border-secondary-normal transition-colors ease-in-out">
                        {link.title}
                      </span>
                    ) : (
                      <span className="p-2 text-primary-normal cursor-pointer text-lg border-b-2 border-primary-background hover:text-primary-darker hover:border-b-2 hover:border-secondary-normal transition-colors ease-in-out">
                        {link.title}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center md:hidden">
              <MenuAlt3Icon className="h-6 cursor-pointer text-primary-normal hover:text-primary-darker transition ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
