import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ title, action, children }: SectionProps) => {
  return (
    <motion.section
      className="container py-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
