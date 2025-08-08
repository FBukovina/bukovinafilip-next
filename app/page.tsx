import CTA from '@/components/CTA'
import QnA from '@/components/QnA'

export default function Page() {
  return (
    <>
      <section className="container mt-16 grid gap-6">
        <h1>I'm<br/>Filip,<br/>web designer<br/>and SwiftUI dev.</h1>
        <p className="text-xl text-neutral-700 max-w-2xl">A web designer with more than 5 years of work.</p>
        <div className="flex gap-4">
          <a className="button" href="mailto:hello@bukovinafilip.com">Email Me</a>
          <a className="button" href="https://calendly.com" target="_blank" rel="noreferrer">Book a Call</a>
        </div>
      </section>

      <section className="container my-24">
        <h2 className="mb-2">Discover how I revamped branding</h2>
        <p className="text-neutral-600">in companies.</p>
      </section>

      <QnA />
      <CTA title="connect now." subtitle="does your website need an upgrade? let's connect." />
    </>
  )
}
