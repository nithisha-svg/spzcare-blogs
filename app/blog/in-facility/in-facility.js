import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'In-Facility Care: One-on-One Support Inside Care Facilities',
  description: 'What is in-facility care, who benefits from it, and how does a private caregiver enhance life inside assisted living, nursing homes, and rehabilitation centers?',
}

const faqs = [
  { q: 'What is in-facility senior care?', a: 'In-facility care is when a private caregiver provides personalized, supplemental support to a senior living in an assisted living community, nursing home, memory care unit, or rehabilitation center. The caregiver works alongside facility staff to deliver one-on-one attention, companionship, advocacy, and personal care that enhances the resident\'s quality of life.' },
  { q: 'Why would a senior in a facility still need a private caregiver?', a: 'Care facilities provide essential medical and safety support, but staff-to-resident ratios often mean seniors receive limited individual attention. A private in-facility caregiver provides the personal, consistent one-on-one relationship that improves emotional wellbeing, reduces loneliness, and ensures the senior\'s specific preferences and needs are always heard and met.' },
  { q: 'Can a private caregiver enter any assisted living or nursing facility?', a: 'In most cases, yes. Most care facilities welcome private caregivers, as they supplement — not compete with — facility services. It is advisable to coordinate with the facility administration in advance to understand their policies regarding private caregivers and visiting schedules.' },
  { q: 'Is in-facility care helpful for seniors with dementia?', a: 'Absolutely. Seniors with dementia benefit greatly from a consistent, familiar caregiver who understands their history, preferences, and behavioral patterns. A dedicated in-facility caregiver reduces anxiety, improves daily engagement, and provides the kind of patient, individualized attention that greatly improves quality of life for those with memory conditions.' },
  { q: 'How does in-facility care keep families informed?', a: 'In-facility caregivers act as an extension of the family\'s eyes and ears. They observe changes in the senior\'s mood, health, behavior, and daily experience — and communicate these observations regularly to family members. This keeps families fully informed and empowered to make timely decisions about their loved one\'s care.' },
]

export default function InFacilityCareBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm font-sans text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-dark">In-Facility Care</span>
      </nav>

      {/* Meta */}
      <div className="mb-6">
        <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
          In-Facility Care
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-4">
          In-Facility Care: One-on-One Support Inside Care Facilities
        </h1>
        <p className="text-muted font-sans text-lg leading-relaxed mb-4">
          Personalized, one-on-one care that follows your loved one into assisted living, nursing homes, and rehabilitation centers — enhancing their quality of life every day.
        </p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted border-t border-warm-dark pt-4">
          <span>📅 March 2025</span>
          <span>⏱ 7 min read</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-80 md:h-100 rounded-lg overflow-hidden mb-1 shadow-lg">
        <Image
          src="/inf.png"
          alt="Private caregiver providing dedicated one-on-one support to a senior in an assisted living facility"
          fill className="object-cover" priority
        />
      </div>

      {/* Content */}
      <div className="blog-body">

        <h2>What Is In-Facility Care?</h2>
        <p>
          In-facility care is a specialized senior care service in which a professional caregiver provides supplemental, one-on-one support to a senior who already resides in an assisted living community, nursing home, memory care unit, or rehabilitation center. Rather than replacing the care provided by facility staff, in-facility caregivers enhance it — filling the gaps in personal attention, companionship, and individualized support that institutional settings often cannot fully provide.
        </p>
        <p>
          The result is a richer, more dignified care experience — one where your loved one benefits from both the safety of a care facility and the warmth of a dedicated personal caregiver who knows them, advocates for them, and truly sees them as an individual.
        </p>

        {/* Callout */}
        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded my-8 font-sans text-primary-dark font-semibold leading-relaxed">
          Even in the best care facilities, staff are often stretched across many residents. A personal caregiver dedicated solely to your loved one ensures they receive the focused attention, familiar face, and consistent advocacy they deserve.
        </div>

        <h2>Where Is In-Facility Care Provided?</h2>

        <h3>Assisted Living Communities</h3>
        <p>For seniors who need daily support but retain some level of independence in a residential community setting.</p>

        <h3>Nursing Homes & Skilled Nursing Facilities</h3>
        <p>For seniors with higher medical care needs who require around-the-clock skilled nursing supervision.</p>

        <h3>Memory Care Units</h3>
        <p>Specialized facilities for seniors living with Alzheimer's or dementia who need a structured, secure environment.</p>

        <h3>Rehabilitation Centers</h3>
        <p>Short-term facilities where seniors recover from surgery, stroke, or injury before returning home.</p>

        {/* Inline image */}
        <div className="relative h-80 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/7 (2).png"
            alt="Private caregiver engaging in a meaningful activity with a senior resident in a care facility"
            fill className="object-cover"
          />
        </div>

        <h2>What Does an In-Facility Caregiver Do?</h2>
        <ul>
          {[
            'Providing dedicated companionship — conversation, reading aloud, playing games, and engaging in meaningful activities together',
            'Assisting with personal care such as grooming, dressing, and oral hygiene when additional support is needed',
            'Accompanying seniors to meals, activities, and appointments within the facility',
            'Advocating for the senior\'s needs and preferences with facility staff on their behalf',
            'Providing detailed updates and observations to family members so they stay fully informed',
            'Supporting seniors through the emotional adjustment of transitioning into a care facility',
            'Helping maintain a sense of routine, normalcy, and personal identity in an unfamiliar environment',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>

        <h2>Facility Staff vs. Personal In-Facility Caregiver</h2>
        <p>
          Facility staff typically provide: medical and nursing care, scheduled group meals and activities, medication administration, and general safety supervision — divided across many residents.
        </p>
        <p>
          A personal in-facility caregiver provides: undivided one-on-one attention, personalized companionship and engagement, a consistent familiar presence, family communication and advocacy, and individualized emotional and personal care support.
        </p>

        {/* Inline image */}
        <div className="relative h-80 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/inf5.png"
            alt="In-facility caregiver advocating for a senior resident during a facility meeting"
            fill className="object-cover"
          />
        </div>

        <h2>Who Benefits Most from In-Facility Care?</h2>
        <ul>
          {[
            'Seniors who are newly admitted to a facility and struggling emotionally with the transition',
            'Those with dementia or memory impairment who benefit from a consistent, familiar caregiver face',
            'Seniors whose family members live far away or cannot visit frequently',
            'Individuals with communication challenges who need an advocate with facility staff',
            'Those in short-term rehabilitation who need extra encouragement and engagement to recover well',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>

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
            { title: 'End-of-Life Care for Seniors', href: '/blog/end-of-life-care', img: '/inf3.png', alt: 'Compassionate end-of-life care' },
            { title: 'Post-Hospital Care for Seniors', href: '/blog/post-hospital-care', img: '/7 (2).png', alt: 'Senior recovering at home after hospital' },
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
