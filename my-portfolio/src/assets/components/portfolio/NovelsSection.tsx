import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import NovelCard from './NovelCard';

const novels = [
  {
    title: 'Cosplay Elf from Another World',
    genre: 'Slice of Life',
    platform: 'WebNovel',
    status: 'Ongoing',
    synopsis:
      "Kou once made a heartfelt promise to Mimirin: to become the perfect manager who would guide her to stardom. But dreams don't always keep pace with reality. As Mimirin ascends to fame on her own, Kou is left behind, yearning for a chance to prove himself in the dazzling world of cosplay. His hope dwindles, until fate intervenes in the form of Sera, a mysterious elf transported from another world.",
    tags: ['Cosplay', 'Slice of Life', 'Modern Fantasy', 'Isekai'],
    rating: '5.0',
    readers: '75K',
    chapters: '37',
    url: 'https://www.webnovel.com/book/25451359905952405',
    cover: 'https://www.royalroadcdn.com/public/covers-large/134429-cosplay-elf-from-another-world.jpg',
  },
  {
    title: 'Nebula: VIllainess of Never-ending Beyond',
    genre: 'Grimdark Fantasy',
    platform: 'Royal Road',
    status: 'Ongoing',
    synopsis:
      "Saori Kitagawa, a lethal assassin from another world, wakes up within the body of Quimora, an innocent young girl. The moment she slips into Quimora's being, she inherits her memories and assumes the leadership of a secretive organization, the Veiled Syndicate, dedicated to retrieving the Resurgence Gems and killing a certain goddess, the propagator of Entropy.",
    tags: ['Portal Fantasy', 'Magic', 'Adventure', 'Mystery'],
    rating: '4.1',
    readers: '10K',
    chapters: '41',
    url: 'https://www.royalroad.com/fiction/90973',
    cover: 'https://www.royalroadcdn.com/public/volume-covers-large/90973-aaaanjevwbu-volume-1-quimoras-demise.jpg',
  },
  {
    title: "No One Believed I'm a Magic Girl!",
    genre: 'Action',
    platform: 'Scribble Hub',
    status: 'Ongoing',
    synopsis:
      "Kei Furukawa's motivations for becoming a magical girl are far from heroic: she desperately wants to capture the attention of her oblivious crush. When a mysterious entity grants her the power to transform into the dazzling Magic Girl Stelara, Kei sees her chance. However, her newfound abilities come with a bizarre and inconvenient catch. The moment she catches the gaze of any member of the public, her transformation instantly unravels, leaving her powerless and potentially in a very awkward situation",
    tags: ['Modern Fantasy', 'Supernatural', 'Sci-Fi', 'Action'],
    rating: 'Unrated',
    readers: '707',
    chapters: '2',
    url: 'https://www.scribblehub.com/series/2155470',
    cover: 'https://cdn.scribblehub.com/images/107/No-One-Believed-Im-a-Magic-Girl_2155470_1769901593.jpg',
  },
  {
    title:"Kyouhana: Transmigrated into the Worst Book and Became the Dark Lord's Bride",
    genre: 'Fantasy',
    platform: 'Royal Road',
    status: 'Ongoing',
    synopsis:
      "Sachika Fujimoto, a part-time writer and college student, dies in a bookstore murder. She never expects to wake up in a world based on the worst book ever made. Reincarnated as Veniara Ravelgrace, the soon-to-be 'Dark Lord's Bride,' she must navigate her way out through the cliché-filled fantasy romance novel full of plot holes, inconsistencies, and grammatical errors.",
    tags: ['Portal Fantasy', 'Kingdom Building', 'Reincarnation', 'Mystery'],
    rating: '4.9',
    readers: '15K',
    chapters: '42',
    url: 'https://www.royalroad.com/fiction/72351/',
    cover: 'https://www.royalroadcdn.com/public/covers-large/72351-transmigrated-into-the-worst-book-and-became.jpg',
  },
];

const platforms = ['All', 'WebNovel', 'Royal Road', 'Scribble Hub'];

export default function NovelsSection() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? novels : novels.filter((n) => n.platform === filter);

  return (
    <section id="novels" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="003 — Fiction"
          title="Published Novels"
          colorClass="text-violet"
          accentBorder="border-violet"
        />

        {/* Platform filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-sm border transition-all duration-300 ${
                filter === p
                  ? 'border-violet bg-violet/10 text-violet'
                  : 'border-border text-muted-foreground hover:border-violet/30 hover:text-foreground'
              }`}
            >
              {p}
            </button>
          ))}
        </motion.div>

        {/* Novel list */}
        <div className="flex flex-col gap-6">
          {filtered.map((novel, i) => (
            <NovelCard key={novel.title} novel={novel} index={i} />
          ))}
        </div>

        {/* Inline data overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Total Readers', value: '100k+' },
            { label: 'Chapters Written', value: '120+' },
            { label: 'Avg Rating', value: '4.8 / 5' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-violet/10 rounded-sm p-5 text-center">
              <span className="font-mono font-extrabold text-3xl text-violet">{stat.value}</span>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground mt-2 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}