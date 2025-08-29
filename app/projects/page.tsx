import ProjectCard from '@/components/ProjectCard'
import QnA from '@/components/QnA'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'

const projects = [
  {
    kind: 'App',
    segment: 'B2C',
    title: 'KCONCERTS',
    description: 'Find a K-Pop concert nearby you.',
    href: 'https://apps.apple.com',
    image: 'https://framerusercontent.com/images/10WF4NVWYeBVdohylGRlrE561w.webp',
  },
  {
    kind: 'App',
    segment: 'Discontinued',
    title: 'Quip Social',
    description: 'Social media network app built by me. Using Firebase API and Swift.',
    href: 'https://quip.bukovinafilip.com/',
    image: 'https://framerusercontent.com/images/QpDJdFJL45TBBxqpCJHRmuB3cQ.png',
  },
  {
    kind: 'Web',
    segment: 'B2B',
    title: 'Kamenictvi Jan Bukovina',
    description: 'Web development for small company in Roudnice nad Labem. This site was made using WordPress.',
    href: 'https://kamenictvibukovina.cz',
    image: 'https://framerusercontent.com/images/FvbgTahTKk3beLIhoLTj8gpskM.png',
  },
]

export default function Page(){
  return (
    <>
      <section className="container mt-28 mb-16 grid gap-6 text-center">
        <Reveal>
          <h1 className="hero-title">
            Selected <span className="text-gradient">projects</span>
          </h1>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="hero-subtitle">
            A glimpse of design and development work.
          </p>
        </Reveal>
      </section>

      <section className="container grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.title} delayMs={idx * 80}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </section>

      <Reveal><QnA /></Reveal>
      <Reveal delayMs={80}><CTA title="connect now." subtitle="does your website need an upgrade? let's connect." /></Reveal>
    </>
  )
}
