import Head from 'next/head';
import Image from 'next/image';
import Wrapper from '../components/Wrapper';
import SocialMedia from '../components/Socialmedia';

const About = () => {
  return (
    <Wrapper>
      <Head>
        <title>About · Prashant Acharya</title>
      </Head>
      <div className="container pt-16 sm:pt-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About me
          </h1>
          <div className="bg-gradient-brand w-fit rounded-2xl p-[2px]">
            <Image
              src="/my-image.png"
              width={112}
              height={112}
              className="rounded-[14px]"
              alt="Prashant Acharya"
            />
          </div>
        </div>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted [&_strong]:font-medium [&_strong]:text-ink">
          <p>
            I&apos;m a software engineer and computer science researcher who
            enjoys understanding people, solving problems, and building things
            that matter. Software engineering is the tool I&apos;m most
            comfortable with, but I&apos;ve always been interested in more than
            technology. I enjoy having conversations, listening to people&apos;s
            problems, and finding ways to help, whether that means building
            software, explaining a difficult concept, or helping someone figure
            out what to do next.
          </p>

          <p>
            I&apos;ve spent the last several years building software across
            different domains. At <strong>Optible AI</strong>, I helped lead a
            team building an AI-driven grant analysis application, migrated a
            monolith to a microservice architecture, and worked on a form
            builder using React, Go and MongoDB. Before that, at{' '}
            <strong>Leapfrog Technology</strong>, I helped build an application
            used by U.S. pharmacies to deliver COVID vaccinations, while
            improving its performance and reducing operating costs.
          </p>

          <p>
            I recently graduated with a Master&apos;s in Computer Science from{' '}
            <strong>Miami University</strong>, where my research focused on{' '}
            <strong>large language models</strong>,{' '}
            <strong>software engineering</strong>
            and <strong>cybersecurity</strong>. I also hold a Bachelor&apos;s in
            Computer Science and Information Technology from Tribhuvan
            University, Nepal. I mostly work with React, TypeScript, Go,
            Node.js, PostgreSQL and MongoDB.
          </p>

          <p>
            Beyond software, I&apos;m interested in <strong>education</strong>,{' '}
            <strong>content creation</strong>, filmmaking, cars and philosophy.
            I also create videos on TikTok, where I get to experiment with
            sharing ideas, stories and things I&apos;ve learned in a more
            accessible way. Long term, I want to bring technology, education and
            content creation together to build something of my own. I don&apos;t
            know exactly what that will look like yet, but I know I want to
            become exceptionally good at something, and teach that to others.
          </p>
        </div>

        <SocialMedia className="-ml-2 mt-12" />
      </div>
    </Wrapper>
  );
};

export default About;
