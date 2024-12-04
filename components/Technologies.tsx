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

const Technologies = () => {
  return (
    <section className="bg-section py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          Technologies I Work With
        </h2>

        <div className="my-16 flex flex-wrap gap-8 md:gap-16 justify-center align-center">
          <Image
            src={JavaScriptLogo}
            alt="JavaScript"
            title="JavaScript"
            height={150}
            width={150}
          />

          <Image
            src={NodeLogo}
            alt="Node.js"
            title="Node.JS"
            height={150}
            width={150}
          />

          <Image
            src={PostgreSQLLogo}
            alt="PostgreSQL"
            title="PostgreSQL"
            height={150}
            width={150}
          />

          <Image
            src={ReactLogo}
            alt="Node.js"
            title="React.JS"
            height={150}
            width={150}
          />

          <Image
            className="filter dark:invert"
            src={NextJsLogo}
            alt="Next.js"
            title="Next.JS"
            height={150}
            width={150}
          />

          <Image
            src={TailwindLogo}
            alt="tailwindcss"
            title="tailwindcss"
            height={150}
            width={150}
          />

          <Image
            src={PythonLogo}
            alt="Python"
            title="Python"
            height={150}
            width={150}
          />

          <Image src={GoLogo} alt="Go" title="Go" height={150} width={150} />

          <Image
            src={FigmaLogo}
            alt="Figma"
            title="Figma"
            height={150}
            width={150}
          />
        </div>

        <div className="text-center">
          <a
            rel="noreferrer"
            className="text-secondary-normal ease-in-out duration-300 hover:text-secondary-darker hover:border-b border-secondary-darker pb-1"
            target="_blank"
            href="https://icons8.com"
          >
            icons by icons8
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
