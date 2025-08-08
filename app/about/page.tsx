import QnA from '@/components/QnA'
import CTA from '@/components/CTA'

export default function Page(){
  return (
    <>
      <section className="container mt-16 grid gap-6">
        <h1>Developing<br/>tomorrow&apos;s<br/>ai apps and websites.</h1>
        <div className="flex gap-4">
          <a className="button" href="mailto:filip@bukovinafilip.com">Email Me</a>
        </div>
      </section>

      <section className="container my-16 grid gap-4">
        <h2>about me</h2>
        <p>I&apos;m Filip Bukovina, a dedicated web developer specializing in crafting modern websites and e-shops. With over five years of experience in the digital space, I focus on creating user-friendly and visually appealing online platforms that help businesses grow and thrive.</p>
        <p>My expertise lies in:</p>
        <ul className="list-disc list-inside text-neutral-700 space-y-2">
          <li>Designing and developing custom websites tailored to client needs.</li>
          <li>Building functional and attractive e-shops optimized for sales and smooth user experience.</li>
          <li>Utilizing cutting-edge tools and frameworks to ensure high performance and responsiveness.</li>
        </ul>
      </section>

      <section className="container my-16 grid gap-3">
        <h2>contact me</h2>
        <p>Contact me directly on <a href="mailto:filip@bukovinafilip.com">filip@bukovinafilip.com</a>.</p>
        <p>If you prefer social media, I have open messages on LinkedIn or on Herohero.</p>
      </section>

      <QnA />
      <CTA title="connect now." subtitle="does your website need an upgrade? let's connect." />
    </>
  )
}
