import Image from 'next/image';
import { motion } from 'framer-motion';

import EmailIcon from '../public/icons/email.svg';
import InstagramIcon from '../public/icons/instagram.svg';
import TwitterIcon from '../public/icons/twitter.svg';
import GithubIcon from '../public/icons/github.svg';
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
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/prashant-acharya-141a36132/',
    title: 'LinkedIn',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SocialMedia = () => {
  return (
    <section className="bg-normal py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Connect with me
        </h2>

        <motion.div
          className="my-8 md:my-16 flex flex-wrap gap-8 md:gap-16 justify-center align-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {links.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              title={link.title}
              className="flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              <Image
                src={link.icon}
                alt={link.title}
                title={link.title}
                height={50}
                width={50}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
