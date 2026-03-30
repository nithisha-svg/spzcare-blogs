'use client'
import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-warm-dark">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left flex justify-between items-start gap-4 group">
            <span className="font-display text-primary-dark font-semibold text-lg leading-snug group-hover:text-accent transition-colors">
              {item.q}
            </span>
            <span className="text-accent text-2xl font-light flex-shrink-0">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <p className="mt-4 text-muted font-sans text-base leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
