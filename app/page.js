import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Specialized Senior Care: A Complete Guide',
    excerpt: 'Specialized senior care is a higher level of professional home care designed for older adults with complex medical conditions. Learn what makes it different, who it\'s for, and what families can expect.',
    href: '/blog/specialized-care',
    img: '/5 (2) (1).png',
    alt: 'Professional caregiver providing specialized care to an elderly senior',
    category: 'Specialized Care',
    readTime: 'read',
    date: 'March 2026',
  },
  {
    title: '24-Hour Home Care for Seniors: Everything You Need to Know',
    excerpt: 'Around-the-clock professional care ensures your loved one is always safe and supported. Discover who needs 24-hour care, what\'s included, and how it differs from live-in care.',
    href: '/blog/24-hour-care',
    img: '/a.png',
    alt: 'Caregiver providing attentive overnight care to a senior at home',
    category: '24-Hour Care',
    readTime: '7 min read',
    date: 'March 2025',
  },
  {
    title: 'End-of-Life Care: Compassion, Dignity & Support for Families',
    excerpt: 'End-of-life care focuses on comfort, dignity, and quality of life — not treatment. Learn about the four pillars of end-of-life care and how it supports both seniors and their families.',
    href: '/blog/end-of-life-care',
    img: '/inf3.png',
    alt: 'Compassionate caregiver providing comfort to an elderly person',
    category: 'End-of-Life Care',
    readTime: '9 min read',
    date: 'March 2025',
  },
  {
    title: 'In-Facility Care: One-on-One Support Inside Care Facilities',
    excerpt: 'Even in the best care facilities, seniors can benefit from a dedicated private caregiver. Learn how in-facility care works and why it makes such a meaningful difference.',
    href: '/blog/in-facility-care',
    img: '/inf5.png',
    alt: 'Private caregiver providing one-on-one support to a senior in an assisted living facility',
    category: 'In-Facility Care',
    readTime: '7 min read',
    date: 'March 2025',
  },
  {
    title: 'Post-Hospital Care: Helping Seniors Recover Safely at Home',
    excerpt: '1 in 5 seniors are readmitted within 30 days of discharge. Learn how post-hospital care bridges the gap between hospital and home — preventing setbacks and supporting safe recovery.',
    href: '/blog/post-hospital-care',
    img: '/7 (2).png',
    alt: 'Senior recovering safely at home after hospital discharge with caregiver support',
    category: 'Post-Hospital Care',
    readTime: '8 min read',
    date: 'March 2025',
  },
]

export default function HomePage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-tag text-accent border-accent">Senior Care Resources</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
            Expert Guides on Specialized Senior Care
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed max-w-2xl mx-auto">
            In-depth articles to help families understand their options, make informed decisions, and find the right level of care for their loved ones.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <span className="section-tag">Featured Article</span>
        <Link href={featured.href} className="group mt-4 grid md:grid-cols-2 gap-10 items-center bg-warm rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
          <div className="relative h-72 md:h-full min-h-[300px]">
            <Image src={featured.img} alt={featured.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8">
            <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
              {featured.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors leading-snug">
              {featured.title}
            </h2>
            <p className="text-muted font-sans leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs font-sans text-muted">
              <span>📅 {featured.date}</span>
              <span>⏱ {featured.readTime}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Rest of posts */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <span className="section-tag">All Articles</span>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rest.map((post) => (
            <Link key={post.href} href={post.href} className="group bg-white border border-warm-dark rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-48">
                <Image src={post.img} alt={post.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-white text-xs font-sans font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted font-sans text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs font-sans text-muted">
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
