'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link href={href} className={`px-3 py-2 rounded-lg ${active ? 'bg-neutral-100' : ''}`}>
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold">filip bukovina</Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </nav>
      </div>
    </header>
  )
}
