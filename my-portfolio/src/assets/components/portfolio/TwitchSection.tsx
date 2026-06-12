import { motion } from 'framer-motion';
import { Tv, ExternalLink } from 'lucide-react';

const CHANNEL = 'Ariathros';

export default function TwitchSection() {
  return (
    <section id="twitch" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px border-t border-violet" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-violet">Live</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-mono font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
              Twitch Stream
            </h2>
            <a
              href={`https://twitch.tv/${CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider flex items-center gap-2 text-violet hover:underline underline-offset-4 transition-all self-start sm:self-end mb-1"
            >
              <Tv size={13} />
              twitch.tv/{CHANNEL} <ExternalLink size={11} />
            </a>
          </div>
        </motion.div>

        {/* Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-violet/20 rounded-sm overflow-hidden"
          style={{ boxShadow: '0 0 40px hsla(275,87%,53%,0.08)' }}
        >
          {/* Fake terminal bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-crimson/60" />
              <span className="w-3 h-3 rounded-full bg-cyan/60" />
              <span className="w-3 h-3 rounded-full bg-violet/60" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <Tv size={11} className="text-violet" />
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                twitch.tv/{CHANNEL.toLowerCase()} — live
              </span>
            </div>
            <span className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              <span className="font-mono text-[9px] tracking-wider text-crimson uppercase">Live</span>
            </span>
          </div>

          {/* Twitch iframe */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://player.twitch.tv/?channel=${CHANNEL}&parent=${window.location.hostname}`}
              title={`${CHANNEL} Twitch Stream`}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}