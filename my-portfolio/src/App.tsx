import AboutSection from "./assets/components/portfolio/AboutSection"
import ContactTerminal from "./assets/components/portfolio/ContactTerminal"
import Footer from "./assets/components/portfolio/Footer"
import HeroSection from "./assets/components/portfolio/HeroSection"
import Navbar from "./assets/components/portfolio/Navbar"
import NovelsSection from "./assets/components/portfolio/NovelsSection"
import ProjectsSection from "./assets/components/portfolio/ProjectsSection"
import TwitchSection from "./assets/components/portfolio/TwitchSection"

// type Project = {
//   title: string
//   description: string
//   url?: string
//   repo?: string
// }

// type Novel = {
//   title: string
//   category: string
//   blurb: string
//   buyLink?: string
// }

// // const categories = [
// //   { word: 'GAMES', color: 'text-crimson', glowClass: 'text-glow-crimson' },
// //   { word: 'WEB', color: 'text-cyan', glowClass: 'text-glow-cyan' },
// //   { word: 'DATA', color: 'text-violet', glowClass: 'text-glow-violet' },
// // ];

// // const projects: Project[] = [
// //   {
// //     title: 'Personal Website',
// //     description: 'A responsive portfolio built with React and Vite.',
// //     repo: 'https://ariathros.github.io/React-Portfolio/',
// //   },
// //   {
// //     title: 'CPE Room and Equipment Management System',
// //     description: 'A web application for managing CPE rooms and equipment with a user-friendly interface.',
// //     repo: 'https://github.com/Ariathros/cpelab',
// //   },
// //   {
// //     title: 'Descendants of Death',
// //     description: 'A 2D action platformer game built with Unity, featuring a unique art style and challenging gameplay.',
// //     repo: 'https://github.com/Ariathros/DescendantsOfDeath'
// //   },
// //   {
// //     title: 'React JS Projects',
// //     description: 'A collection of small React projects and experiments.',
// //     repo: 'https://github.com/Ariathros/react-course',
// //   },
// //   {
// //     title: 'DataAqua',
// //     description: 'A data visualization tool for exploring and analyzing aquatic ecosystems.', 
// //     repo: 'https://github.com/Ariathros/data-aqua'
// //   }

// // ]

// // const novels: Novel[] = [
// //   {
// //     title: 'Cosplay Elf from Another World',
// //     blurb: "Kou once made a heartfelt promise to Mimirin: to become the perfect manager who would guide her to stardom. But dreams don't always keep pace with reality. As Mimirin ascends to fame on her own, Kou is left behind, yearning for a chance to prove himself in the dazzling world of cosplay. His hope dwindles, until fate intervenes in the form of Sera, a mysterious elf transported from another world.",
// //     buyLink: 'https://www.webnovel.com/book/cosplay-elf-from-another-world_25451359905952405',
// //   },
// //   {
// //     title: "No One Believed I'm a Magic Girl!",
// //     blurb: "When a mysterious entity grants her the power to transform into the dazzling Magic Girl Stelara, Kei sees her chance. However, her newfound abilities come with a bizarre and inconvenient catch. The moment she catches the gaze of any member of the public, her transformation instantly unravels, leaving her powerless and potentially in a very awkward situation.",
// //     buyLink: "https://www.webnovel.com/book/no-one-believed-i'm-a-magic-girl!_34980622408366005",
// //   },
// //   {
// //     title: "Nebula: Villainess of Never-ending Beyond",
// //     blurb: "Saori Kitagawa, a lethal assassin from another world, wakes up within the body of Quimora, an innocent young girl. The moment she slips into Quimora's being, she inherits her memories and assumes the leadership of a secretive organization, the Veiled Syndicate, dedicated to retrieving the revival stones and killing a certain goddess, the propagator of Entropy.",
// //     buyLink: "https://www.webnovel.com/book/nebula-villainess-of-never-ending-beyond_30348048205871905",
// //   },
// // ]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <NovelsSection />
      <TwitchSection />
      <AboutSection />
      <ContactTerminal />
      <Footer />
    </div>
  )
}

export default App
