import Section from './Section';

const tools = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Go',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Figma',
];

const Technologies = () => {
  return (
    <Section title="Toolbox">
      <ul className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-primary-normal hover:text-ink"
          >
            {tool}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Technologies;
