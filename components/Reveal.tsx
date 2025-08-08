"use client"
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delayMs?: number
}

export default function Reveal({ children, delayMs = 0 }: Props){
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`reveal ${visible ? 'reveal-on' : ''}`}
    >
      {children}
    </div>
  )
}


