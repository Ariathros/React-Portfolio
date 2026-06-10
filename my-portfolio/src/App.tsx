
import './App.css'

type Project = {
  title: string
  description: string
  url?: string
  repo?: string
}

type Novel = {
  title: string
  blurb: string
  buyLink?: string
}

const projects: Project[] = [
  {
    title: 'Personal Website',
    description: 'A responsive portfolio built with React and Vite.',
    repo: 'https://ariathros.github.io/React-Portfolio/',
  },
  {
    title: 'CPE Room and Equipment Management System',
    description: 'A web application for managing CPE rooms and equipment with a user-friendly interface.',
    repo: 'https://github.com/Ariathros/cpelab',
  },
  {
    title: 'Descendants of Death',
    description: 'A 2D action platformer game built with Unity, featuring a unique art style and challenging gameplay.',
    repo: 'https://github.com/Ariathros/DescendantsOfDeath'
  },
  {
    title: 'React JS Projects',
    description: 'A collection of small React projects and experiments.',
    repo: 'https://github.com/Ariathros/react-course',
  },
  {
    title: 'DataAqua',
    description: 'A data visualization tool for exploring and analyzing aquatic ecosystems.', 
    repo: 'https://github.com/Ariathros/data-aqua'
  }

]

const novels: Novel[] = [
  {
    title: 'Cosplay Elf from Another World',
    blurb: "Kou once made a heartfelt promise to Mimirin: to become the perfect manager who would guide her to stardom. But dreams don't always keep pace with reality. As Mimirin ascends to fame on her own, Kou is left behind, yearning for a chance to prove himself in the dazzling world of cosplay. His hope dwindles, until fate intervenes in the form of Sera, a mysterious elf transported from another world.",
    buyLink: 'https://www.webnovel.com/book/cosplay-elf-from-another-world_25451359905952405',
  },
  {
    title: "No One Believed I'm a Magic Girl!",
    blurb: "When a mysterious entity grants her the power to transform into the dazzling Magic Girl Stelara, Kei sees her chance. However, her newfound abilities come with a bizarre and inconvenient catch. The moment she catches the gaze of any member of the public, her transformation instantly unravels, leaving her powerless and potentially in a very awkward situation.",
    buyLink: "https://www.webnovel.com/book/no-one-believed-i'm-a-magic-girl!_34980622408366005",
  },
  {
    title: "Nebula: Villainess of Never-ending Beyond",
    blurb: "Saori Kitagawa, a lethal assassin from another world, wakes up within the body of Quimora, an innocent young girl. The moment she slips into Quimora's being, she inherits her memories and assumes the leadership of a secretive organization, the Veiled Syndicate, dedicated to retrieving the revival stones and killing a certain goddess, the propagator of Entropy.",
    buyLink: "https://www.webnovel.com/book/nebula-villainess-of-never-ending-beyond_30348048205871905",
  },
]

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="site-title">Jan Carlo Abalos</h1>
          <nav className="site-nav">
            <a href="#projects">Projects</a>
            <a href="#novels">Novels</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Web Developer & Author</h2>
          <p>
            I build polished, accessible front-end experiences and write novels
            that explore human themes. Browse my projects and published books
            below.
          </p>
        </section>

        <section id="projects">
          <h3>Selected Projects</h3>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <div className="card-cta">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      View Repo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="novels">
          <h3>Published Novels</h3>
          <div className="novel-list">
            {novels.map((n) => (
              <article key={n.title} className="novel">
                <div className="novel-cover">📘</div>
                <div>
                  <h4>{n.title}</h4>
                  <p>{n.blurb}</p>
                  {n.buyLink && (
                    <a href={n.buyLink} target="_blank" rel="noreferrer">
                      Buy / Read
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h3>Contact</h3>
          <p>
            Interested in working together or want to request a signed copy? Email
            me at <a href="mailto:you@example.com">ariathros@gmail.com</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Jan Carlo Abalos — Built with React + Vite</small>
        </div>
      </footer>
    </div>
  )
}

export default App
