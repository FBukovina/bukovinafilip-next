"use client"
import { useState } from 'react'

const DATA = [
  { q: 'How much does it cost?', a: 'Every project is different. After a short call I will send you a fixed price.' },
  { q: "What if I don't like the design?", a: 'We iterate in small steps so there are no surprises. You will see progress continuously.' },
  { q: 'Can I refund the design?', a: 'If the design does not meet the agreed goals, I offer a fair refund policy.' },
  { q: 'How you can reach me?', a: 'Email me at filip@bukovinafilip.com or message me on LinkedIn/Herohero.' },
  { q: 'labuLink and Quip Social', a: 'Selected projects I worked on in the past years.' },
]

function Item({ q, a }: { q: string; a: string }){
  const [open, setOpen] = useState(false)
  return (
    <li className="border rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between text-left p-5 hover:bg-neutral-50"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span className="text-xl text-neutral-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-neutral-700">
          {a}
        </div>
      )}
    </li>
  )
}

export default function QnA(){
  return (
    <section className="container my-24">
      <h2 className="text-4xl font-semibold text-center">Q &amp; A.</h2>
      <ul className="mt-8 grid gap-4 max-w-3xl mx-auto">
        {DATA.map(({q, a}) => (
          <Item key={q} q={q} a={a} />
        ))}
      </ul>
    </section>
  )
}
