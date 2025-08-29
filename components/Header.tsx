'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function NavItem({ href, children }: { href: string; children: React.ReactNode }){
  const pathname = usePathname()
  const isAnchor = href.startsWith('#') || href.includes('#')
  const active = !isAnchor && pathname === href
  return (
    <Link
      href={href}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
        active ? 'bg-neutral-100' : 'hover:bg-neutral-50'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setShow(y > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-4 z-50">
      <div className="container grid place-items-center">
        <nav
          className={`inline-flex items-center gap-1 rounded-full border bg-white/80 backdrop-blur px-1 py-1 shadow-sm transition-all duration-300 ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Me</NavItem>
          <NavItem href="#projects">Projects</NavItem>
        </nav>
      </div>
    </header>
  )
}
