import Image from 'next/image';

import EmailIcon from '../public/icons/email.svg';
import InstagramIcon from '../public/icons/instagram.svg';
import TwitterIcon from '../public/icons/twitter.svg';
import GithubIcon from '../public/icons/github.svg';
//import YouTubeIcon from '../public/icons/youtube.svg';
import LinkedInIcon from '../public/icons/linkedin.svg';

const links = [
  {
    icon: EmailIcon,
    href: 'mailto:dev.prashaant@gmail.com',
    title: 'Email',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/prashant_acharya_',
    title: 'Instagram',
  },
  {
    icon: TwitterIcon,
    href: 'https://twitter.com/dev_prashaant',
    title: 'Twitter',
  },
  {
    icon: GithubIcon,
    href: 'https://github.com/prashantacharya',
    title: 'Github',
  },
  //{
  //icon: YouTubeIcon,
  //href: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw',
  //title: 'YouTube',
  //},
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/prashant-acharya-141a36132/',
    title: 'LinkedIn',
  },
];

const SocialMedia = () => {
  return (
    <section className="bg-normal py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Connect with me
        </h2>

        <div className="my-8 md:my-16 flex flex-wrap gap-8 md:gap-16 justify-center align-center">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              title={link.title}
              className="flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                alt={link.title}
                title={link.title}
                height={50}
                width={50}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
