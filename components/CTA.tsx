export default function CTA({ title, subtitle }:{ title: string, subtitle?: string }){
  return (
    <section className="container my-16 text-center">
      <h2 className="text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-neutral-600">{subtitle}</p>}
      <div className="mt-6 flex justify-center gap-4">
        <a className="button" href="mailto:hello@bukovinafilip.com">Email Me</a>
        <a className="button" href="https://calendly.com" target="_blank" rel="noreferrer">Book a Call</a>
      </div>
    </section>
  )
}
