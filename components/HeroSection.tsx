import Image from 'next/image';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  return (
    <main className="px-3 py-10 md:py-20">
      <div className="container mx-auto py-20">
        <div className="flex flex-col-reverse md:flex-row justify-between align-center">
          <div className="text-center md:text-left md:flex flex-col justify-center">
            <h1 className="text-center md:text-left title-name text-left text-5xl font-semibold uppercase">
              Prashant <br />
              Acharya
            </h1>

            <p className="text-2xl mt-5 w-full dark:text-white">
              I build applications using JavaScript, Python and Go.
            </p>

            <button
              onClick={() => router.push('/about')}
              className="w-[119px] mt-2 relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-normal group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white dark:bg-primary-normal  border-2 border-primary-normal group-hover:bg-primary-normal"></span>
              <span className="relative text-primary-normal group-hover:text-white dark:text-white">
                Read More
              </span>
            </button>
          </div>

          <div className="flex align-center justify-center">
            <div className="w-1/2 md:w-auto md:text-left p-1 my-10 md:my-0 flex content-center align-center rounded-full hero-image-bg">
              <Image
                src="/my-image.png"
                height="400"
                width="400"
                className="rounded-full text-center"
                alt="Prashant Acharya"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
