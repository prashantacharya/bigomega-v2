import Image from 'next/image';

const HeroSection = () => {
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
              I am a Software Engineer, I build applications with JavaScript.
            </p>
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
