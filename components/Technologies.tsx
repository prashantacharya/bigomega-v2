import Image from 'next/image';
import NodeLogo from '../public/technologies/node.svg';
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
          Technologies
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
        </div>
      </div>
    </section>
  );
};

export default Technologies;
