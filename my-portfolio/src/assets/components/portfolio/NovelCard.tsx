import { motion } from 'framer-motion';
import { BookOpen, Star, ExternalLink, Users } from 'lucide-react';

interface Novel {
  cover: string;
  title: string;
  genre: string;
  platform: string;
  status: string;
  synopsis: string;
  tags: string[];
  rating: string | number;
  readers: string | number;
  chapters: string | number;
  url: string;
}

interface NovelCardProps {
  novel: Novel;
  index: number;
}

export default function NovelCard({ novel, index }: NovelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-violet/30 transition-all duration-500 hover:glow-violet"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Cover image */}
        <div className="relative sm:w-40 md:w-48 shrink-0 aspect-[3/4] sm:aspect-auto overflow-hidden">
          <img
            src={novel.cover}
            alt={novel.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden sm:block" />

          {/* Genre badge */}
          <div className="absolute top-3 left-3 px-2 py-1 rounded-sm bg-violet/20 border border-violet/30 backdrop-blur-sm">
            <span className="font-mono text-[9px] tracking-wider text-violet uppercase">{novel.genre}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-5 md:p-6 flex-1">
          <div>
            {/* Platform + status */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookOpen size={11} className="text-violet" />
                <span className="font-mono text-[10px] tracking-wider text-violet uppercase">{novel.platform}</span>
              </div>
              <span className={`font-mono text-[9px] tracking-wider px-2 py-0.5 rounded-sm border ${
                novel.status === 'Ongoing'
                  ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                  : 'border-violet/30 text-violet bg-violet/10'
              }`}>
                {novel.status}
              </span>
            </div>

            <h3 className="font-mono font-bold text-lg text-foreground leading-tight mb-2">{novel.title}</h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{novel.synopsis}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {novel.tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <Star size={11} className="text-amber-400 fill-amber-400" />
                <span className="font-mono text-xs text-foreground">{novel.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={11} className="text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">{novel.readers}</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">{novel.chapters} ch.</span>
            </div>

            <a
              href={novel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-wider flex items-center gap-1.5 text-violet hover:underline underline-offset-4 transition-all"
            >
              READ <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}