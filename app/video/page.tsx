import QnA from '@/components/QnA'
import CTA from '@/components/CTA'

export default function Page(){
  return (
    <>
      <section className="container mt-16 text-center grid gap-6">
        <h1>Stream here.</h1>
        <p>Stream the video.</p>
      </section>
      <QnA />
      <CTA title="connect now." subtitle="does your website need an upgrade? let's connect." />
    </>
  )
}
