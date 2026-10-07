import Section from './Section';

// Most recent first.
const data = [
  {
    date: 'Aug 2024',
    title: 'Research Assistant, Miami University',
    description:
      'Researching LLMs, software engineering and cybersecurity under the guidance of Dr. James Walden.',
  },
  {
    date: 'Aug 2024',
    title: 'Started grad school',
    description:
      'Joined Miami University in Oxford, Ohio for a master’s in Computer Science.',
  },
  {
    date: 'Mar 2023',
    title: 'Software Engineer, Optible AI',
    description:
      'Led a team building an AI-driven grant analysis app and moved a monolith to microservices.',
  },
  {
    date: 'Sep 2022',
    title: 'Finished undergrad',
    description:
      'Graduated in Computer Science and Information Technology from Tribhuvan University.',
  },
  {
    date: 'Sep 2020',
    title: 'Software Engineer, Leapfrog Technology',
    description:
      'Joined as an intern mid-pandemic and stayed on as an engineer, building software US pharmacies used to deliver COVID vaccines.',
  },
  {
    date: 'Mar 1998',
    title: 'Born in Kathmandu',
    description: 'Grew up mostly in Sunsari, in the east of Nepal.',
  },
];

const Timeline = () => {
  return (
    <Section title="Journey">
      <ol className="relative border-l border-line">
        {data.map((item) => (
          <li
            key={item.title}
            className="group relative pb-9 pl-6 last:pb-0 sm:grid sm:grid-cols-[6.5rem_1fr] sm:gap-6 sm:pl-8"
          >
            <span className="absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full border-2 border-[var(--background)] bg-line transition-colors group-hover:bg-primary-normal group-first:bg-primary-normal" />
            <p className="font-mono text-xs leading-6 text-muted">{item.date}</p>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Timeline;
