import Wrapper from '../components/Wrapper';

const About = () => {
  return (
    <Wrapper>
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl text-primary-normal font-bold uppercase">
          About Me
        </h1>
        <div className="min-h-[70vh] w-[50%] mx-auto">
          <p className="py-10">
            I am a graduate student in Computer Science at Miami University with
            over 4 years of experience in software engineering. My expertise
            spans a wide range of technologies, including ReactJS, Node.js, Go,
            MySQL, MongoDB, TypeScript, and more. I am currently working as a
            Graduate Research Assistant at Miami University, where my research
            focuses on Large Language Models (LLMs), Software Engineering, and
            Cybersecurity.{' '}
          </p>
          <p className="py-10">
            Previously, I worked as a Software Engineer at Optible AI, where I
            led a team to develop an AI-driven grant analysis application and
            migrated a monolithic application to a microservice-based
            architecture. I also contributed to the development of a form
            builder application using React, Go, and MongoDB. At Leapfrog
            Technology, I helped create an application used by US pharmacies to
            deliver COVID vaccinations, optimizing system performance and
            reducing operational costs.
          </p>
          <p className="py-10">
            I hold a Bachelor&apos;s degree in Computer Science and Information
            Technology from Tribhuvan University, Nepal, and am currently
            pursuing my Master&apos;s degree at Miami University.
          </p>
          <a
            href="https://docs.google.com/document/d/1Y92MJqJACW1Gl4An6OpcCd67xDbtvla5EKNWOm1rs84/edit?usp=sharing"
            className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group border border-primary-normal"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-primary-normal rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-primary-light rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-primary-darker rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">View My Resume</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
