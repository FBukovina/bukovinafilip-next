import QnA from '@/components/QnA'
import CTA from '@/components/CTA'

export default function Page(){
  return (
    <>
      <section className="container mt-16 grid gap-6">
        <h1>I&apos;m<br/>commited<br/>to be<br/>carbon neutral until 2030.</h1>
        <div className="flex gap-4">
          <a className="button" href="https://calendly.com" target="_blank" rel="noreferrer">Book a Call</a>
          <a className="button" href="mailto:rosyidqoim@gmail.com">Email Me</a>
        </div>
      </section>

      <section className="container my-16 grid gap-4">
        <h2>about me</h2>
        <p>Primary, I&apos;m SwiftUI developer and Web developer and product designer.</p>
        <p>I made my mark in the music industry, particularly noted for his work in creating tracks like "House Of Fun Prague" and "Rain Drops." His involvement in music reflects a creative outlet, showcasing his ability to craft engaging melodies. Beyond his musical endeavors, Filip has an online presence, where he might connect with others on platforms like social media.</p>
        <p>However, his professional activities extend into the digital realm, where he has over five years of experience as a digital product designer, focusing on crafting seamless and engaging user experiences with a particular emphasis on product design and utilizing Framer for development projects. I also work as a Swit developer and developing my own social media network called opensocial.</p>
      </section>

      <section className="container my-10">
        <h2>sharing Apple news on X</h2>
        <p className="text-sm text-neutral-500">Testimonials section placeholder.</p>
      </section>

      <QnA />
      <CTA title="connect now." subtitle="does your website need an upgrade? let's connect." />
    </>
  )
}
