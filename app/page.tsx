import CTA from '@/components/CTA'
import QnA from '@/components/QnA'

export default function Page() {
  return (
    <>
      <section className="relative">
        <div className="container mt-28 grid gap-6">
          <h1 className="hero-title text-center">I'm Filip, web designer and <span className="text-gradient">SwiftUI dev.</span></h1>
          <p className="hero-subtitle text-center max-w-2xl mx-auto">A web designer with more than 5 years of work.</p>
          <div className="flex flex-col items-center gap-4 mt-2">
            <span className="pill"><span className="pill-dot"/> I'm available.</span>
            <a className="button-outline" href="mailto:hello@bukovinafilip.com">Email Me</a>
          </div>
        </div>
        <div className="hero-swoosh" aria-hidden="true" />
      </section>

      <section className="container my-28 text-center">
        <h2 className="hero-title text-4xl md:text-6xl font-semibold tracking-tight">
          Discover how I revamped <span className="text-gradient">branding</span> in companies.
        </h2>
      </section>

      <QnA />

      <section className="container my-16">
        <div className="rounded-[32px] gradient-surface p-10 text-center border shadow-sm">
          <h2 className="text-4xl font-semibold">connect <span className="lowercase">now.</span></h2>
          <p className="mt-3 text-neutral-600">does your website need an upgrade? let's connect.</p>
          <div className="mt-6 flex justify-center">
            <a className="button" href="mailto:hello@bukovinafilip.com">Email Me</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-neutral-600">
            <a href="https://herohero.co" target="_blank" rel="noreferrer" className="footer-link">Herohero</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:filip@bukovinafilip.com" className="footer-link">filip@bukovinafilip.com</a>
            <span>©2025 filip bukovina</span>
          </div>
        </div>
      </section>
    </>
  )
}
