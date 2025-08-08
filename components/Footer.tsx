import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="container py-12 grid gap-6">
        <div>
          <h3 className="text-2xl font-semibold">connect <span className="lowercase">now.</span></h3>
          <p className="text-neutral-600">does your website need an upgrade? let's connect.</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="mailto:hello@bukovinafilip.com" className="button">Email Me</a>
          <a href="mailto:hello@bukovinafilip.com" className="footer-link">filip@bukovinafilip.com</a>
          <a href="https://herohero.co" target="_blank" rel="noreferrer" className="footer-link">Herohero</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        </div>
        <p className="text-sm text-neutral-500">©2025 filip bukovina</p>
      </div>
    </footer>
  )
}
