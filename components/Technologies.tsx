import Image from 'next/image';
import GoLogo from '../public/technologies/go.svg';
import NodeLogo from '../public/technologies/node.svg';
import FigmaLogo from '../public/technologies/figma.svg';
import ReactLogo from '../public/technologies/react.svg';
import PythonLogo from '../public/technologies/python.svg';
import NextJsLogo from '../public/technologies/next-js.svg';
import TailwindLogo from '../public/technologies/tailwindcss.svg';
import JavaScriptLogo from '../public/technologies/javascript.svg';
import PostgreSQLLogo from '../public/technologies/postgresql.svg';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Technologies = () => {
  const logos = [
    { src: JavaScriptLogo, alt: 'JavaScript', title: 'JavaScript' },
    { src: NodeLogo, alt: 'Node.js', title: 'Node.JS' },
    { src: PostgreSQLLogo, alt: 'PostgreSQL', title: 'PostgreSQL' },
    { src: ReactLogo, alt: 'React.js', title: 'React.JS' },
    {
      src: NextJsLogo,
      alt: 'Next.js',
      title: 'Next.JS',
      className: 'filter dark:invert',
    },
    { src: TailwindLogo, alt: 'tailwindcss', title: 'tailwindcss' },
    { src: PythonLogo, alt: 'Python', title: 'Python' },
    { src: GoLogo, alt: 'Go', title: 'Go' },
    { src: FigmaLogo, alt: 'Figma', title: 'Figma' },
  ];

  return (
    <section className="bg-section py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Technologies I Work With
        </h2>

        <motion.div
          className="my-16 flex flex-wrap gap-8 md:gap-16 justify-center align-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {logos.map((logo, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                height={150}
                width={150}
                className={logo.className}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <a
            rel="noreferrer"
            className="text-secondary-normal ease-in-out duration-300 hover:text-secondary-darker hover:border-b border-secondary-darker pb-1"
            target="_blank"
            href="https:icons8.com"
          >
            icons by icons8
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
