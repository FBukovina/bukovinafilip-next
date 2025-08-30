'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
        active ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-100'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-4 z-50">
      <div className="container grid place-items-center">
        <nav
          aria-label="Main navigation"
          className="inline-flex items-center gap-1 rounded-full border bg-white/80 backdrop-blur px-1 py-1 shadow-sm transition-all duration-300"
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
        </nav>
      </div>
    </header>
  )
}
