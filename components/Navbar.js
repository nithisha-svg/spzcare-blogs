'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const blogs = [
  { label: 'Specialized Care', href: '/blog/specialized-care' },
  { label: '24-Hour Home Care', href: '/blog/24-hour-care' },
  { label: 'End-of-Life Care', href: '/blog/end-of-life-care' },
  { label: 'In-Facility Care', href: '/blog/in-facility-care' },
  { label: 'Post-Hospital Care', href: '/blog/post-hospital-care' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white border-b border-warm-dark sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl text-primary font-bold tracking-tight">Senior Care Blog</span>
          <span className="font-sans text-xs text-accent tracking-widest uppercase">Expert Guides & Resources</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-sans font-medium text-primary-dark hover:text-accent transition-colors">Home</Link>

          {/* Dropdown — click to open, click outside to close */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm font-sans font-medium text-primary-dark hover:text-accent transition-colors flex items-center gap-1"
            >
              Blog Articles
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-warm-dark shadow-xl rounded min-w-[220px] py-2 mt-2">
                {blogs.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-sm font-sans text-primary-dark hover:bg-warm hover:text-accent transition-colors"
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className="btn-primary py-2 px-5 text-xs">All Articles</Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu — all links visible, no dropdown needed */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-warm-dark px-6 py-4 space-y-1">
          <Link href="/" className="block py-3 text-sm font-sans font-medium text-primary-dark border-b border-warm-dark" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <p className="text-xs font-sans font-semibold text-accent tracking-widest uppercase pt-3 pb-1">Blog Articles</p>
          {blogs.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="block py-3 text-sm font-sans text-primary-dark hover:text-accent border-b border-warm-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {b.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link href="/blog" className="btn-primary block text-center text-xs" onClick={() => setMenuOpen(false)}>
              All Articles
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
