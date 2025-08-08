'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({ href, children }: { href: string; children: React.ReactNode }){
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${active ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="pt-4">
      <div className="container h-14 grid place-items-center">
        <nav className="inline-flex items-center gap-1 rounded-full border bg-white/80 backdrop-blur px-1 py-1 shadow-sm">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
        </nav>
      </div>
    </header>
  )
}
