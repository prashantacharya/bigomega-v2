import {
  AcademicCapIcon,
  CakeIcon,
  LibraryIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid';
import { motion } from 'framer-motion'; // Import motion

const data = [
  {
    date: 'March, 1998',
    title: 'Born in Kathmandu, Nepal',
    description:
      'I was born in Kathmandu, the capital city of Nepal. I spent most of my childhood in Sunsari which lies in the eastern part of Nepal.',
    icon: <CakeIcon className="h-7 w-7 text-primary-normal" />,
  },

  {
    date: 'June, 2016',
    title: 'Completed High School',
    description:
      'I did my schooling in Itahari and Kathmandu. I completed my highschool from Kathmandu in 2016. After that, I started studying Bachelors in Computer Science in Tribuvan University in Nepal.',
    icon: <LibraryIcon className="h-7 w-7 text-primary-normal" />,
  },
  {
    date: 'September, 2020',
    title: 'Worked at Leapfrog Technology',
    description:
      'In the midst of the COVID pandemic, I was offered an opportunity to join Leapfrog technology as an intern. Later, I was offered a job as a Software Engineer.',
    icon: <OfficeBuildingIcon className="h-7 w-7 text-primary-normal" />,
  },
  {
    date: 'September, 2022',
    title: 'Complete Undergraduate Studies',
    description: 'I completed my undergraduate studies in Kathmandu, Nepal.',
    icon: <AcademicCapIcon className="h-7 w-7 text-primary-normal" />,
  },
  {
    date: 'March, 2023',
    title: 'Joined Optible AI',
    description:
      'I joined Optible AI where I worked as a software engineer and built cool projects on top of AI.',
    icon: <OfficeBuildingIcon className="h-7 w-7 text-primary-normal" />,
  },
  {
    date: 'August, 2024',
    title: 'Joined Graduate School',
    description:
      'I joined Miami University at Oxford, Ohio to pursue my masters degree in Computer Science.',
    icon: <AcademicCapIcon className="h-7 w-7 text-primary-normal" />,
  },
  {
    date: 'August, 2024',
    title: 'Started working as a Research Assistant',
    description:
      'I started working as a Research Assistant at Miami University under the guidance of Dr. James Walden.',
    icon: <OfficeBuildingIcon className="h-7 w-7 text-primary-normal" />,
  },
];

// Animation variants for a fade-in and slide-up effect
const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }, // Fade in and move to original position
};

const Timeline = () => {
  return (
    <section className="bg-section py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-primary-normal uppercase">
          My Life&apos;s Timeline
        </h2>

        {/* You can optionally wrap the entire timeline in a motion div if you want the title to also animate */}
        {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}> */}

        <div className="timeline">
          {data.map((item, index) => (
            <motion.div // Wrap each timeline event with motion.div
              className="timeline__event w-[70vw] md:w-[50vw] timeline__event--type1" // Removed existing animation classes
              key={item.date}
              variants={timelineItemVariants} // Apply the animation variants
              initial="hidden" // Set initial state
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is visible, only once
              transition={{ delay: index * 0.1 }} // Stagger delay based on index
            >
              <div className="md:flex items-center">
                <div className="timeline-icon-shadow p-[44px] md:mx-10 md:rounded-full bg-normal flex align-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="timeline__event__date text-md">{item.date}</div>
              <div className="timeline__event__content bg-normal dark:text-white">
                <div className="timeline__event__title text-sm md:text-xl">
                  {item.title}
                </div>
                <div className="timeline__event__description">
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Timeline;
