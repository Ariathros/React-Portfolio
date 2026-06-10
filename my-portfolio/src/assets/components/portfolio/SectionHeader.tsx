import { motion } from 'framer-motion';

type SectionHeaderProps = {
  label: string;
  title: string;
  colorClass?: string;
  accentBorder?: string;
};

export default function SectionHeader({ label, title, colorClass = 'text-primary', accentBorder = 'border-primary' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-px ${accentBorder} border-t`} />
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${colorClass}`}>{label}</span>
      </div>
      <h2 className="font-mono font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}