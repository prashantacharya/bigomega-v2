import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'; // Import motion

const HeroSection = () => {
  const router = useRouter();

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  // Animation variants for individual elements (text, image, button)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in and move to original position
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 }, // Start slightly to the side and hidden
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Fade in and move to original position
  };

  return (
    <main className="px-3 py-10 md:py-20">
      <motion.div // Wrap the main content div with motion
        className="container mx-auto py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between align-center">
          <div className="text-center md:text-left md:flex flex-col justify-center">
            <motion.h1 // Apply motion to the h1
              className="text-center md:text-left title-name text-left text-5xl font-semibold uppercase"
              variants={itemVariants} // Use itemVariants
            >
              Prashant <br />
              Acharya
            </motion.h1>

            <motion.p // Apply motion to the p
              className="text-2xl mt-5 w-full dark:text-white"
              variants={itemVariants} // Use itemVariants
            >
              I build applications using JavaScript, Python and Go.
            </motion.p>

            <motion.button // Apply motion to the button
              onClick={() => router.push('/about')}
              className="w-[119px] mt-2 relative inline-block px-4 py-2 font-medium group"
              variants={itemVariants} // Use itemVariants
            >
              {/* Your button spans remain the same */}
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary-normal group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white dark:bg-primary-normal border-2 border-primary-normal group-hover:bg-primary-normal"></span>
              <span className="relative text-primary-normal group-hover:text-white dark:text-white">
                Read More
              </span>
            </motion.button>
          </div>

          <div className="flex align-center justify-center">
            <motion.div // Apply motion to the image wrapper div
              className="w-1/2 md:w-auto md:text-left p-1 my-10 md:my-0 flex content-center align-center rounded-full hero-image-bg"
              variants={imageVariants} // Use imageVariants
            >
              <Image
                src="/my-image.png"
                height="400"
                width="400"
                className="rounded-full text-center"
                alt="Prashant Acharya"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default HeroSection;
