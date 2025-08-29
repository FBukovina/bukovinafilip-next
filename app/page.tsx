import QnA from '@/components/QnA'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    kind: 'App',
    title: 'KCONCERTS',
    description:
      'Find a K-Pop concert nearby you. Complete application for discovering and tracking K-Pop events with modern design.',
    href: 'https://apps.apple.com',
    image: 'https://framerusercontent.com/images/10WF4NVWYeBVdohylGRlrE561w.webp',
  },
  {
    kind: 'App',
    title: 'GoalKit',
    description:
      'Professional app translation into Czech. UI localization with focus on user experience.',
    image: 'https://framerusercontent.com/images/goalkit-placeholder.png',
  },
  {
    kind: 'Web',
    title: 'Kamenictví Jan Bukovina',
    description:
      'Web design for a small company in Roudnice nad Labem. Modern presentation of traditional craftsmanship with emphasis on quality and precision.',
    href: 'https://kamenictvibukovina.cz',
    image: 'https://framerusercontent.com/images/FvbgTahTKk3beLIhoLTj8gpskM.png',
  },
] as const

export default function Page() {
  return (
    <>
      <section className="relative min-h-screen flex items-center">
        <div className="container grid gap-6">
          <Reveal>
            <h1 className="hero-title text-center">Filip Bukovina</h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="hero-subtitle text-center max-w-2xl mx-auto">Discover how I revamp branding in companies</p>
          </Reveal>
          <Reveal delayMs={160}>
            <div className="flex justify-center">
              <a className="button" href="#projects">View My Projects</a>
            </div>
          </Reveal>
        </div>
        <div className="hero-swoosh" aria-hidden="true" />
      </section>

      <section id="projects" className="container my-24">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Portfolio</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delayMs={i * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </section>

      <QnA />

      <section className="container my-16">
        <div className="rounded-[32px] gradient-surface p-10 text-center border shadow-sm">
          <h2 className="text-4xl font-semibold">connect <span className="lowercase">now.</span></h2>
          <p className="mt-3 text-neutral-600">does your website need an upgrade? let's connect.</p>
          <div className="mt-6 flex justify-center">
            <a className="button" href="mailto:hello@bukovinafilip.com">Email Me</a>
          </div>
        </div>
      </section>
    </>
  )
}
