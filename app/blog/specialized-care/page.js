import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Specialized Senior Care: A Complete Guide',
    excerpt: 'Specialized senior care goes beyond standard home care — built around complex medical conditions, cognitive needs, and intensive circumstances. Learn everything you need to know.',
    href: '/blog/specialized-care',
    img: '/88.png',
    alt: 'Professional caregiver with elderly senior',
    category: 'Specialized Care',
    readTime: '8 min read',
    date: 'March 2025',
  },
  {
    title: '24-Hour Home Care for Seniors: Everything You Need to Know',
    excerpt: 'Around-the-clock professional care with rotating caregivers ensures your loved one is never alone. Learn who needs it, what\'s included, and how it compares to live-in care.',
    href: '/blog/24-hour-care',
    img: '/i.png',
    alt: 'Caregiver providing overnight care to senior',
    category: '24-Hour Care',
    readTime: '7 min read',
    date: 'March 2025',
  },
  {
    title: 'End-of-Life Care: Compassion, Dignity & Support for Families',
    excerpt: 'End-of-life care focuses on comfort and quality of life — not treatment. Discover the four pillars of end-of-life care and how it supports the whole family through life\'s final chapter.',
    href: '/blog/end-of-life-care',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    alt: 'Compassionate caregiver providing comfort to elderly person',
    category: 'End-of-Life Care',
    readTime: '9 min read',
    date: 'March 2025',
  },
  {
    title: 'In-Facility Care: One-on-One Support Inside Care Facilities',
    excerpt: 'Even in the best care facilities, seniors benefit from a dedicated private caregiver. Learn how in-facility care enhances quality of life inside assisted living, nursing homes, and more.',
    href: '/blog/in-facility-care',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Private caregiver with senior in assisted living facility',
    category: 'In-Facility Care',
    readTime: '7 min read',
    date: 'March 2025',
  },
  {
    title: 'Post-Hospital Care: Helping Seniors Recover Safely at Home',
    excerpt: '1 in 5 seniors are readmitted within 30 days of discharge. Learn how post-hospital care bridges the critical gap between hospital and home — preventing setbacks and supporting recovery.',
    href: '/blog/post-hospital-care',
    img: '/i.png',
    alt: 'Senior recovering at home after hospital with caregiver support',
    category: 'Post-Hospital Care',
    readTime: '8 min read',
    date: 'March 2025',
  },
]

export const metadata = {
  title: 'All Articles | Senior Care Blog',
  description: 'Browse all senior care blog articles — specialized care, 24-hour care, end-of-life care, in-facility care, and post-hospital care guides.',
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-warm-dark py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-tag">All Articles</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark mt-2 mb-4">
            Senior Care Blog
          </h1>
          <p className="text-muted font-sans text-lg leading-relaxed">
            In-depth guides on specialized senior care — helping families understand their options and find the right level of support.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.href} href={post.href}
              className="group bg-white border border-warm-dark rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-56">
                <Image src={post.img} alt={post.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted font-sans text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs font-sans text-muted border-t border-warm-dark pt-4">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
