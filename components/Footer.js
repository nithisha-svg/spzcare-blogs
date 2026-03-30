import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-xl font-bold mb-1">Senior Care Blog</div>
          <div className="font-sans text-xs text-accent tracking-widest uppercase mb-4">Expert Guides & Resources</div>
          <p className="text-sm text-blue-200 leading-relaxed">
            In-depth articles and guides on specialized senior care — helping families make informed, compassionate decisions.
          </p>
        </div>

        <div>
          <h4 className="font-sans font-semibold tracking-widest text-xs uppercase text-accent mb-4">Blog Articles</h4>
          <ul className="space-y-2 text-sm text-blue-200">
            {[
              { label: 'Specialized Care', href: '/blog/specialized-care' },
              { label: '24-Hour Home Care', href: '/blog/24-hour-care' },
              { label: 'End-of-Life Care', href: '/blog/end-of-life-care' },
              { label: 'In-Facility Care', href: '/blog/in-facility-care' },
              { label: 'Post-Hospital Care', href: '/blog/post-hospital-care' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold tracking-widest text-xs uppercase text-accent mb-4">About This Blog</h4>
          <p className="text-sm text-blue-200 leading-relaxed">
            This blog provides educational resources on specialized senior care topics — helping families navigate care decisions with confidence and clarity.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-light/30 py-5 text-center text-xs text-blue-300 font-sans">
        © {new Date().getFullYear()} Senior Care Blog. All rights reserved.
      </div>
    </footer>
  )
}
