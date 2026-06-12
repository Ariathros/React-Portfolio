import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const gameProjects = [
  {
    category: 'game',
    title: 'Descendants of Death',
    description: 'A Hack & Slash 2D Game based on ShadowFight, but with more enemies and increasing levels of waves.',
    stack: ['C#', 'JavaScript', 'Blender', 'Adobe Animate', 'Unity'],
    year: 2022,
    image: 'https://i.ibb.co/ycMrNysw/dod.png',
    metrics: [
      { label: 'Levels', value: 'Infinity+' },
      { label: 'FPS Target', value: '60' },
    ],
  },
  {
    category: 'animation',
    title: 'Jam vs. Kasu',
    description: 'A battle between a street fighter and a hired assassin.',
    stack: ['Adobe Flash'],
    year: 2019,
    image: 'https://i.ytimg.com/vi/t6eVZmFHJXY/hqdefault.jpg',
    metrics: [
      { label: 'Views', value: '64' },
      { label: 'Duration (mins)', value: '2' },
      { label: 'Creation Time (Weeks)', value: '2' },
    ],
  },
  {
    category: 'animation',
    title: 'Alphabet Collab Part',
    description: "A comedy animation in collaboration to the Alphabet Collab hosted on Hyun's Dojo",
    stack: ['Adobe Flash'],
    year: 2019,
    image: 'https://i.ytimg.com/vi/T-UrMp2HPtA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCwGss6BDW6DvFS7CXjHpqCc_GehQ',
    metrics: [
      { label: 'Views', value: '45' },
      { label: 'Duration (s)', value: '13' },
    ],
  },
];

const webProjects = [
  {
    category: 'web',
    title: 'Computer Engineering Room and Equipment Reservation System',
    description: 'The purpose of this project is to manage the services offered by the Computer Engineering Laboratory such as borrowing of equipments and room reservations.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    year: 2022,
    image: '/cpelab.png',
    metrics: [
      { label: 'Users', value: '5,000' },
    ],
  },
  {
    category: 'web',
    title: 'DataAqua: IOT-Based Smart Fish Cultivating System',
    description: 'A tool to monitor the water levels of Tilapia fish ponds and improve Tilapia mortality rate.',
    stack: ['Arduino','HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    year: 2023,
    image: '/dataaqua.jpg',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Prediction Accuracy', value: '90%' },
    ],
  },
  {
    category: 'web',
    title: 'HandyWash: Laundry Delivery Service',
    description: 'A website/app which aims to provide delivery service for customers and laundry stores.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Framer Motion'],
    year: 2023,
    image: '/laundrystore.png',
    metrics: [
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
            label="001 — Game Development and Animation"
            title="Interactive Worlds and Stories"
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