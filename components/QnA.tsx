"use client"
import { useState } from 'react'

const DATA = [
  {
    q: 'How much does it cost?',
    a: 'Price depends on project scope and complexity. After initial consultation, I provide detailed custom quote tailored to your needs.',
  },
  {
    q: "What if I don't like the design?",
    a: "Every project includes several free revision rounds. We work together until we're both satisfied with the result.",
  },
  {
    q: 'Can I get a refund?',
    a: "If we can't reach a satisfactory solution, I offer fair refund policy. Details are discussed before starting each project.",
  },
  {
    q: 'How can you reach me?',
    a: 'Fastest contact is via email or social media. I usually respond within 24 hours.',
  },
]

export default function QnA(){
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section className="container my-24" id="qa">
      <h2 className="text-4xl font-semibold text-center">Q &amp; A.</h2>
      <ul className="mt-8 grid gap-4 max-w-3xl mx-auto">
        {DATA.map(({q, a}, i) => (
          <li key={q} className="border rounded-xl overflow-hidden bg-white/30 backdrop-blur">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between text-left p-5 hover:bg-white/40"
              aria-expanded={open === i}
            >
              <span className="font-medium">{q}</span>
              <span className="text-xl text-neutral-500">{open === i ? '−' : '+'}</span>
            </button>
            <div
              className={`px-5 pb-5 text-neutral-700 transition-all duration-300 ${
                open === i ? 'max-h-40' : 'max-h-0 overflow-hidden'
              }`}
            >
              {a}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
