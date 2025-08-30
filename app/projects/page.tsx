import ProjectCard from '@/components/ProjectCard'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import QnA from '@/components/QnA'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'

type BaseProject = {
  title: string
  kind: 'App' | 'Web'
  segment: string
  href: string
}

type Project =
  | (BaseProject & { description: string; image: string; featured?: false })
  | (BaseProject & { tagline: string; featured: true })

const projects: Project[] = [
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
    href: 'https://quip.bukovinafilip.com/',
    tagline: 'Discover K-Pop concerts in your country.',
    featured: true,
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
            {'featured' in project && project.featured ? (
              <FeaturedProjectCard
                title={project.title}
                kind={project.kind}
                segment={project.segment}
                href={project.href}
                tagline={project.tagline}
              />
            ) : (
              <ProjectCard
                title={project.title}
                kind={project.kind}
                segment={project.segment}
                description={project.description}
                href={project.href}
                image={project.image}
              />
            )}
          </Reveal>
        ))}
      </section>

      <Reveal><QnA /></Reveal>
      <Reveal delayMs={80}><CTA title="connect now." subtitle="does your website need an upgrade? let's connect." /></Reveal>
    </>
  )
}
