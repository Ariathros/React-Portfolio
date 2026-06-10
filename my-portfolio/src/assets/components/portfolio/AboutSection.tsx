import { motion } from 'framer-motion';

const skills = [
  { name: 'React / Next.js', level: 96 },
  { name: 'TypeScript', level: 92 },
  { name: 'Three.js / WebGL', level: 85 },
  { name: 'Node.js', level: 90 },
  { name: 'Python / Data Engineering', level: 82 },
  { name: 'AWS / Cloud Infrastructure', level: 78 },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '15+', label: 'Enterprise Clients' },
  { value: '99.5%', label: 'Uptime Average' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px border-t border-primary" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">About</span>
            </div>
            <h2 className="font-mono font-extrabold text-4xl md:text-5xl tracking-tight text-foreground mb-8">
              The Developer
            </h2>

            <div className="space-y-5 font-inter text-base text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack React developer who operates at the intersection of
                three worlds: <span className="text-crimson font-medium">game development</span>,{' '}
                <span className="text-cyan font-medium">web engineering</span>, and{' '}
                <span className="text-violet font-medium">big data analytics</span>.
              </p>
              <p>
                My approach is systems-first. I architect scalable foundations that handle
                millions of events, render at 60fps, and deliver pixel-perfect interfaces.
                Every project starts with the data model and ends with the user experience.
              </p>
              <p>
                When I'm not shipping production code, I'm exploring WebGPU, contributing
                to open-source visualization libraries, and writing about the future of
                interactive data experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <span className="font-mono font-extrabold text-2xl text-foreground">{s.value}</span>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1 uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card border border-border rounded-sm p-6 md:p-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-crimson" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan" />
                <div className="w-2.5 h-2.5 rounded-full bg-violet" />
                <span className="font-mono text-[10px] text-muted-foreground ml-3 tracking-wider">skills.config</span>
              </div>

              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan via-violet to-crimson"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}