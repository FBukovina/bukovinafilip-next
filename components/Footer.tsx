export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 text-center text-sm text-neutral-600">
        <p>© {year} Filip Bukovina. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/bukovinafilip"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bukovinafilip"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
