import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Cpu, BarChart3 } from 'lucide-react';

const categoryIcons = {
  game: Layers,
  web: Cpu,
  data: BarChart3,
} as const;

type ProjectCategory = keyof typeof categoryIcons;

type ProjectMetric = {
  label: string;
  value: string | number;
};

type Project = {
  category: ProjectCategory;
  image: string;
  title: string;
  year: string | number;
  description: string;
  stack: string[];
  metrics?: ProjectMetric[];
};

type Props = {
  project: Project;
  colorClass: string;
  glowClass: string;
  borderColor: string;
};

export default function ProjectCard({ project, colorClass, glowClass, borderColor }: Props) {
  const [mounted, setMounted] = useState(false);
  const Icon = categoryIcons[project.category] || Layers;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="group relative"
      >
        <div className={`relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:border-opacity-50 ${glowClass} hover:scale-[1.01]`}>
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            
            {/* Category badge */}
            <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-background/80 backdrop-blur-sm border ${borderColor}`}>
              <Icon size={12} className={colorClass} />
              <span className={`font-mono text-[10px] tracking-wider uppercase ${colorClass}`}>
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-mono font-bold text-lg text-foreground leading-tight">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground shrink-0">
                {project.year}
              </span>
            </div>

            <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-sm bg-secondary text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mount button */}
            <button
              onClick={() => setMounted(true)}
              className={`font-mono text-xs tracking-wider flex items-center gap-2 ${colorClass} hover:underline underline-offset-4 transition-all`}
            >
              MOUNT PROJECT <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mounted project detail overlay */}
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setMounted(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl max-h-[90vh] overflow-auto bg-card border border-border rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${colorClass === 'text-crimson' ? 'bg-crimson' : colorClass === 'text-cyan' ? 'bg-cyan' : 'bg-violet'}`} />
                  <span className="font-mono text-xs tracking-wider text-muted-foreground">{project.title.toUpperCase()} — MOUNTED</span>
                </div>
                <button onClick={() => setMounted(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={18} />
                </button>
              </div>

              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover min-h-[300px]" />
                </div>

                {/* Details side */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${colorClass}`}>{project.category} PROJECT</span>
                    <h3 className="font-mono font-extrabold text-2xl md:text-3xl text-foreground mt-2">{project.title}</h3>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">// Challenge</span>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed mt-2">{project.description}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">// Tech Stack</span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.stack.map((tech) => (
                        <span key={tech} className={`font-mono text-xs px-3 py-1.5 rounded-sm border ${borderColor} ${colorClass} bg-secondary/50`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metrics && (
                    <div>
                      <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">// Metrics</span>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="bg-secondary/50 border border-border rounded-sm p-3">
                            <span className={`font-mono font-bold text-xl ${colorClass}`}>{m.value}</span>
                            <p className="font-mono text-[10px] text-muted-foreground mt-1">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Simulated data feed */}
                  <div className="bg-background border border-border rounded-sm p-4 font-mono text-[11px]">
                    <div className="text-muted-foreground mb-2">// live_data_feed.json</div>
                    <div className="text-muted-foreground/70 space-y-1">
                      <div>{'{'}</div>
                      <div className="pl-4"><span className={colorClass}>"project"</span>: "{project.title}",</div>
                      <div className="pl-4"><span className={colorClass}>"status"</span>: "deployed",</div>
                      <div className="pl-4"><span className={colorClass}>"type"</span>: "{project.category}",</div>
                      <div className="pl-4"><span className={colorClass}>"year"</span>: {project.year}</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}