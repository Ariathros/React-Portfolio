import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const gameProjects = [
  {
    category: 'game',
    title: 'Shatter Engine',
    description: 'A physics-based puzzle game built with React Three Fiber where players manipulate gravity to shatter crystalline structures across 50+ levels. Real-time particle systems and dynamic lighting.',
    stack: ['React', 'Three.js', 'Cannon.js', 'GLSL', 'WebGL'],
    year: 2024,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/35477de78_generated_1836d5d3.png',
    metrics: [
      { label: 'Active Players', value: '12K+' },
      { label: 'Levels', value: '50+' },
      { label: 'FPS Target', value: '60' },
      { label: 'Physics Objects', value: '500+' },
    ],
  },
  {
    category: 'game',
    title: 'Neon Arena',
    description: 'Multiplayer browser-based battle arena with real-time WebSocket communication, ECS architecture, and procedurally generated arenas. Supports up to 16 concurrent players.',
    stack: ['React', 'Socket.io', 'Node.js', 'Canvas API', 'Redis'],
    year: 2023,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/13f5f7b0f_generated_24a2cad4.png',
    metrics: [
      { label: 'Concurrent Users', value: '16' },
      { label: 'Latency', value: '<30ms' },
      { label: 'Maps Generated', value: '∞' },
      { label: 'Rating', value: '4.8/5' },
    ],
  },
  {
    category: 'game',
    title: 'Void Runner',
    description: 'An infinite runner with procedural terrain generation and WebGPU-accelerated rendering. Features adaptive difficulty and a leaderboard system powered by a serverless backend.',
    stack: ['React', 'WebGPU', 'Zustand', 'Supabase', 'WASM'],
    year: 2023,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/b8367021e_generated_a0619fee.png',
    metrics: [
      { label: 'Downloads', value: '8K+' },
      { label: 'Avg Session', value: '14min' },
      { label: 'Render Pipeline', value: 'WebGPU' },
      { label: 'Bundle Size', value: '420KB' },
    ],
  },
];

const webProjects = [
  {
    category: 'web',
    title: 'Flux Commerce',
    description: 'A headless e-commerce platform with server-side rendering, dynamic product filtering, and a custom CMS. Handles 100K+ SKUs with sub-second search powered by Algolia.',
    stack: ['React', 'Next.js', 'TypeScript', 'Algolia', 'Stripe'],
    year: 2024,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/f7251abc1_generated_d2e346da.png',
    metrics: [
      { label: 'SKUs', value: '100K+' },
      { label: 'Load Time', value: '0.8s' },
      { label: 'Conversion', value: '+34%' },
      { label: 'Lighthouse', value: '98' },
    ],
  },
  {
    category: 'web',
    title: 'Synapse SaaS',
    description: 'A collaborative project management platform with real-time document editing, Kanban boards, and role-based access control serving 500+ teams globally.',
    stack: ['React', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    year: 2024,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/15705b4d4_generated_48aaec60.png',
    metrics: [
      { label: 'Active Teams', value: '500+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'API Latency', value: '45ms' },
      { label: 'Daily Edits', value: '50K+' },
    ],
  },
  {
    category: 'web',
    title: 'Meridian CMS',
    description: 'A developer-first content management system with a visual block editor, API-first architecture, and multi-tenant support. Used by 200+ content creators.',
    stack: ['React', 'Node.js', 'MongoDB', 'Redis', 'Cloudflare'],
    year: 2023,
    image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/4e47c07d4_generated_da8fd34d.png',
    metrics: [
      { label: 'Creators', value: '200+' },
      { label: 'Content Blocks', value: '40+' },
      { label: 'API Calls/day', value: '2M' },
      { label: 'CDN Hit Rate', value: '97%' },
    ],
  },
];

// const dataProjects = [
//   {
//     category: 'data',
//     title: 'Cortex Analytics',
//     description: 'An enterprise-grade analytics dashboard processing 10M+ events daily. Features real-time stream processing, custom visualization engine, and ML-powered anomaly detection.',
//     stack: ['React', 'D3.js', 'Apache Kafka', 'Python', 'TensorFlow'],
//     year: 2024,
//     image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/a25d6eef8_generated_4ec5c5ff.png',
//     metrics: [
//       { label: 'Events/Day', value: '10M+' },
//       { label: 'Dashboards', value: '300+' },
//       { label: 'Query Speed', value: '<2s' },
//       { label: 'Accuracy', value: '99.2%' },
//     ],
//   },
//   {
//     category: 'data',
//     title: 'Neural Pipeline',
//     description: 'A visual ETL pipeline builder for data engineers. Drag-and-drop interface for constructing complex data transformations with real-time preview and automated testing.',
//     stack: ['React', 'Apache Spark', 'Airflow', 'Snowflake', 'dbt'],
//     year: 2023,
//     image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/96636cdaa_generated_67d1b458.png',
//     metrics: [
//       { label: 'Pipelines Built', value: '1.2K' },
//       { label: 'Data Processed', value: '50TB' },
//       { label: 'Avg Build Time', value: '3min' },
//       { label: 'Error Rate', value: '0.1%' },
//     ],
//   },
//   {
//     category: 'data',
//     title: 'Prism Insights',
//     description: 'A self-service BI tool with natural language querying. Users ask questions in plain English and receive interactive visualizations backed by a semantic data layer.',
//     stack: ['React', 'OpenAI', 'BigQuery', 'Recharts', 'FastAPI'],
//     year: 2023,
//     image: 'https://media.base44.com/images/public/6a1588d21d674fde09b11a61/3301ee29a_generated_e8b71e46.png',
//     metrics: [
//       { label: 'NLQ Accuracy', value: '94%' },
//       { label: 'Queries/Day', value: '25K' },
//       { label: 'Viz Types', value: '30+' },
//       { label: 'Users', value: '5K+' },
//     ],
//   },
// ];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Game Dev */}
        <div className="mb-32">
          <SectionHeader
            label="001 — Game Development"
            title="Interactive Worlds"
            colorClass="text-crimson"
            accentBorder="border-crimson"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                colorClass="text-crimson"
                glowClass="hover:glow-crimson"
                borderColor="border-crimson/30"
              />
            ))}
          </div>
        </div>

        {/* Web Dev */}
        <div className="mb-32">
          <SectionHeader
            label="002 — Web Development"
            title="Scalable Platforms"
            colorClass="text-cyan"
            accentBorder="border-cyan"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                colorClass="text-cyan"
                glowClass="hover:glow-cyan"
                borderColor="border-cyan/30"
              />
            ))}
          </div>
        </div>

        {/* Data Analytics */}
        {/* <div>
          <SectionHeader
            label="003 — Big Data Analytics"
            title="Intelligent Systems"
            colorClass="text-violet"
            accentBorder="border-violet"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataProjects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                colorClass="text-violet"
                glowClass="hover:glow-violet"
                borderColor="border-violet/30"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}