import ProjectCard from '@/components/ProjectCard'
import QnA from '@/components/QnA'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'

export default function Page(){
  return (
    <>
      <section className="container mt-16 grid gap-6">
        <Reveal><h2>Discover how I revamped branding</h2></Reveal>
        <Reveal delayMs={80}><p className="text-neutral-600">in companies.</p></Reveal>
        <Reveal delayMs={160}>
          <div className="flex gap-4">
            <a className="button" href="mailto:hello@bukovinafilip.com">Email Me</a>
          </div>
        </Reveal>
      </section>

      <section className="container my-10 grid gap-8">
        <Reveal>
          <ProjectCard
          kind="App"
          segment="B2C"
          title="KCONCERTS"
          description="Find a K-Pop concert nearby you."
          href="https://apps.apple.com"
          image="https://framerusercontent.com/images/10WF4NVWYeBVdohylGRlrE561w.webp"
        />
        </Reveal>
        <Reveal delayMs={80}>
          <ProjectCard
          kind="App"
          segment="Discontinued"
          title="Quip Social"
          description="Social media network app built by me. Using Firebase API and Swift."
          href="https://quip.bukovinafilip.com/"
          image="https://framerusercontent.com/images/QpDJdFJL45TBBxqpCJHRmuB3cQ.png"
        />
        </Reveal>
        <Reveal delayMs={160}>
          <ProjectCard
          kind="Web"
          segment="B2B"
          title="Kamenictvi Jan Bukovina"
          description="Web development for small company in Roudnice nad Labem. This site was made using WordPress."
          href="https://kamenictvibukovina.cz"
          image="https://framerusercontent.com/images/FvbgTahTKk3beLIhoLTj8gpskM.png"
        />
        </Reveal>
      </section>

      <Reveal><QnA /></Reveal>
      <Reveal delayMs={80}><CTA title="connect now." subtitle="does your website need an upgrade? let's connect." /></Reveal>
    </>
  )
}
