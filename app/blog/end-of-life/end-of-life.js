import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'End-of-Life Care: Compassion, Dignity & Support for Families',
  description: 'What is end-of-life care, how does it differ from hospice, and how does it support the whole family? A compassionate guide for families navigating life\'s final chapter.',
}

const faqs = [
  { q: 'What is end-of-life care and who is it for?', a: 'End-of-life care is compassionate, non-medical support provided to seniors who are in the final stage of life due to terminal illness or advanced age-related decline. It is for anyone who wishes to spend their final days at home with dignity, comfort, and human connection rather than in a clinical setting.' },
  { q: 'When should families consider end-of-life care?', a: 'Families should consider end-of-life care when a senior has received a terminal diagnosis, when curative treatment is no longer the focus, or when daily care needs exceed what family members can realistically provide. Early introduction of end-of-life care allows families more time to adjust, plan, and be fully present.' },
  { q: 'Can end-of-life care be provided alongside hospice?', a: 'Yes — and this is one of the most effective combinations in senior care. Hospice covers medical symptom management, while end-of-life home caregivers handle personal care, companionship, and daily assistance. Together, they create a comprehensive, wraparound support system for both the senior and their family.' },
  { q: 'Is end-of-life care only for those in the final days of life?', a: 'No. End-of-life care can begin well before the final days — sometimes weeks or months in advance, depending on the senior\'s condition and the family\'s needs. Starting care earlier allows the senior to build a relationship with their caregiver and gives the family more time to settle into a supported routine.' },
]

export default function EndOfLifeCareBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm font-sans text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-dark">End-of-Life Care</span>
      </nav>

      {/* Meta */}
      <div className="mb-6">
        <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
          End-of-Life Care
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-4">
          End-of-Life Care: Compassion, Dignity & Support for Families
        </h1>
        <p className="text-muted font-sans text-lg leading-relaxed mb-4">
          Compassionate, dignified support for seniors and families navigating life's most tender final chapter — centered on comfort, not cure.
        </p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted border-t border-warm-dark pt-4">
          <span>📅 March 2025</span>
          <span>⏱ 9 min read</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 md:h-50 rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src="/end1.png"
          alt="Compassionate caregiver sitting with an elderly person providing comfort and presence"
          fill className="object-cover" priority
        />
      </div>

      {/* Content */}
      <div className="blog-body">

        <h2>What Is End-of-Life Care?</h2>
        <p>
          End-of-life care refers to the support and assistance provided to individuals in the final weeks, months, or days of life due to a terminal illness or advanced age-related decline. Its primary goal is not to cure or treat — but to comfort, dignify, and support the whole person physically, emotionally, and spiritually.
        </p>
        <p>
          Unlike hospice, which is a medical program, end-of-life care from a home care provider focuses on non-medical daily support — helping seniors maintain personal hygiene, stay comfortable at home, enjoy meaningful moments with loved ones, and feel truly cared for until the very end.
        </p>

        {/* Callout */}
        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded my-8 font-sans text-primary-dark italic leading-relaxed">
          End-of-life care is centered on quality of life, not quantity of days. It honors a person's wishes, preserves their dignity, and ensures that their final chapter is met with grace, warmth, and unwavering human presence.
        </div>

        {/* Inline image */}
        <div className="relative h-64 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/16 (1) (1).png"
            alt="Caregiver holding the hand of an elderly person in a peaceful home setting"
            fill className="object-cover"
          />
        </div>

        <h2>The Four Pillars of End-of-Life Care</h2>

        <h3>1. Physical Comfort</h3>
        <p>Assisting with personal care, positioning, hygiene, and daily routines to reduce discomfort and maintain dignity.</p>

        <h3>2. Emotional Support</h3>
        <p>Compassionate presence, active listening, and gentle companionship that eases anxiety, loneliness, and fear.</p>

        <h3>3. Family Guidance</h3>
        <p>Practical and emotional support for family members navigating grief, caregiving stress, and difficult decisions.</p>

        <h3>4. Dignity & Respect</h3>
        <p>Honoring the senior's personal wishes, values, and identity throughout every moment of care.</p>

        <h2>What End-of-Life Care Services Include</h2>
        <ul>
          {[
            'Personal care assistance including bathing, grooming, dressing, and oral hygiene',
            'Light housekeeping, laundry, and home maintenance to keep the environment calm and clean',
            'Meal preparation and feeding assistance tailored to appetite and dietary needs',
            'Medication reminders in coordination with the hospice or medical team',
            'Companionship and meaningful engagement — reading, music, conversation, reminiscing',
            'Respite relief for family caregivers who need time to rest, grieve, or attend to personal needs',
            'Coordination and communication with hospice nurses, physicians, and social workers',
            'Emotional support and a calm, steady presence during distressing or uncertain moments',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>

        {/* Inline image */}
        <div className="relative h-80 rounded-lg overflow-hidden my-20 shadow-md">
          <Image
            src="/end (1).png"
            alt="Family gathered with elderly loved one and caregiver at home during end-of-life care"
            fill className="object-cover"
          />
        </div>

        <h2>How End-of-Life Care Supports the Whole Family</h2>
        <p>
          End-of-life care is not only for the senior — it is equally for the family surrounding them. Watching a loved one decline is emotionally exhausting, and family caregivers often struggle silently with grief, burnout, and the weight of responsibility. A professional end-of-life caregiver steps in to share that burden.
        </p>
        <p>
          With a trusted caregiver handling daily care needs, families are freed to focus on what matters most — being present, saying what needs to be said, and cherishing the time that remains.
        </p>
        <p>
          Caregivers also serve as a calm, knowledgeable resource, helping families understand what to expect and how to respond with confidence and compassion.
        </p>

        <h2>End-of-Life Care vs. Hospice Care: Understanding the Difference</h2>
        <p>
          Hospice care is a medically directed program that manages pain and symptoms for individuals with a terminal prognosis — typically six months or less. It is administered by nurses, physicians, chaplains, and social workers.
        </p>
        <p>
          End-of-life home care complements hospice by providing non-medical personal and companion care — the day-to-day support that keeps a senior comfortable, clean, and emotionally supported between hospice visits. Both can — and often should — work together as part of an integrated care plan.
        </p>

      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-warm-dark pt-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </div>

      {/* Related */}
      <div className="mt-16 border-t border-warm-dark pt-12">
        <h2 className="font-display text-2xl font-bold text-primary-dark mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: 'Specialized Senior Care Guide', href: '/blog/specialized-care', img: '/sp1.png', alt: 'Professional caregiver with senior' },
            { title: 'In-Facility Care for Seniors', href: '/blog/in-facility-care', img: '/inf5.png', alt: 'Private caregiver in assisted living facility' },
          ].map((p) => (
            <Link key={p.href} href={p.href} className="group flex gap-4 items-center bg-warm rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="relative w-20 h-20 rounded flex-shrink-0 overflow-hidden">
                <Image src={p.img} alt={p.alt} fill className="object-cover" />
              </div>
              <span className="font-display font-bold text-primary-dark group-hover:text-accent transition-colors">{p.title}</span>
            </Link>
          ))}
        </div>
      </div>

    </article>
  )
}
