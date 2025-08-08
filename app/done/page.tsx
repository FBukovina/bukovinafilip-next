import QnA from '@/components/QnA'
import CTA from '@/components/CTA'
import Link from 'next/link'

export default function Page(){
  return (
    <>
      <section className="container mt-16 text-center grid gap-6">
        <h1>Thank you for your purchase.</h1>
        <p>Go to Inside The Members site. Your membership will be activated up to 48 hours.</p>
        <div className="flex justify-center">
          <Link href="#" className="button">Go to Inside</Link>
        </div>
      </section>
      <QnA />
      <CTA title="connect now." subtitle="does your website need an upgrade? let's connect." />
    </>
  )
}
