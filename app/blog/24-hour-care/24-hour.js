import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: '24-Hour Home Care for Seniors: Everything You Need to Know',
  description: 'What is 24-hour home care, who needs it, and how does it differ from live-in care? A complete guide to around-the-clock senior care at home.',
}

const faqs = [
  { q: 'What is the difference between 24-hour care and live-in care?', a: 'In live-in care, one caregiver lives in the home and is allowed designated sleep time — typically 6–8 hours. In 24-hour care, caregivers rotate in shifts so someone is always fully awake and attentive. 24-hour care offers a higher level of supervision, especially for seniors with nighttime needs.' },
  { q: 'How many caregivers are involved in 24-hour home care?', a: 'Typically two to three caregivers rotate shifts over a 24-hour period. Each caregiver works an 8 to 12-hour shift, ensuring consistent, alert care throughout the day and night without caregiver fatigue.' },
  { q: 'Is 24-hour home care covered by Medicare or insurance?', a: 'Medicare generally does not cover non-medical 24-hour home care. However, long-term care insurance, Medicaid (depending on the state and program), and Veterans Affairs benefits may provide partial or full coverage. It is recommended to consult with a care coordinator to explore funding options.' },
  { q: 'Can 24-hour care be temporary or short-term?', a: '24-hour care can be arranged for a short period — such as during post-surgical recovery or while a family caregiver is traveling — or on a long-term basis for seniors with ongoing complex needs. Care plans are flexible and can be adjusted as circumstances change.' },
  { q: 'How do I know if my loved one truly needs 24-hour care versus a few hours a day?', a: 'A professional care assessment is the most reliable way to determine the right level of care. Key indicators for 24-hour care include nighttime safety risks, inability to be left alone even briefly, severe mobility limitations, advanced cognitive impairment, or a recent medical event requiring close monitoring.' },
]

export default function TwentyFourHourCareBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm font-sans text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-dark">24-Hour Home Care</span>
      </nav>

      {}
      <div className="mb-6">
        <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
          24-Hour Care
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-4">
          24-Hour Home Care for Seniors: Everything You Need to Know
        </h1>
        <p className="text-muted font-sans text-lg leading-relaxed mb-4">
          Around-the-clock professional care ensures your loved one is always safe, supported, and never alone — day or night.
        </p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted border-t border-warm-dark pt-4">
          <span>📅 March 2025</span>
          <span>⏱ 7 min read</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 md:h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src="/i.png"
          alt="Caregiver providing attentive overnight care to a senior at home"
          fill className="object-cover" priority
        />
      </div>

      {/* Content */}
      <div className="blog-body">

        <h2>What Is 24-Hour Home Care?</h2>
        <p>
          24-hour home care is a continuous care service in which a team of trained professional caregivers works in rotating shifts to provide uninterrupted support to a senior in their own home. Unlike part-time or hourly care, 24-hour care ensures that a caregiver is always present — whether it's the middle of the afternoon or 3 o'clock in the morning.
        </p>
        <p>
          This level of care is designed for seniors whose health, safety, or cognitive condition requires constant supervision and hands-on assistance. It allows older adults with complex or high-risk needs to remain in the comfort of their own home rather than transitioning to a residential care facility.
        </p>

        {/* Callout */}
        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded my-8 font-sans text-primary-dark font-semibold leading-relaxed">
          24-hour home care is <strong>not</strong> the same as live-in care. In live-in care, one caregiver stays overnight with scheduled sleep breaks. In true 24-hour care, caregivers work in shifts — ensuring someone is always fully awake, alert, and actively present at all times.
        </div>

        <h2>Who Needs 24-Hour Home Care?</h2>
        <p>
          Not every senior requires around-the-clock care, but for those who do, it can be life-changing — and life-saving. Families should consider 24-hour care when a senior:
        </p>
        <ul>
          {[
            'Has been diagnosed with advanced dementia or Alzheimer\'s and is at risk of wandering or becoming disoriented at night',
            'Has experienced a recent fall or injury and cannot safely move around the home without assistance',
            'Is recovering from a major surgery, stroke, or hospitalization and needs close monitoring',
            'Has a chronic illness such as Parkinson\'s disease, congestive heart failure, or COPD that requires frequent symptom monitoring',
            'Experiences sundowning — increased confusion, agitation, or restlessness in the late afternoon and evening hours',
            'Is unable to perform basic daily tasks like getting out of bed, using the bathroom, or preparing meals without help',
            'Lives alone and has no family caregiver available during nighttime hours',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>

        {/* Inline image */}
        <div className="relative h-64 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/24h.png"
            alt="Caregiver providing attentive nighttime support to an elderly senior"
            fill className="object-cover"
          />
        </div>

        <h2>What Does 24-Hour Care Include?</h2>

        <h3>Morning & Bedtime Routines</h3>
        <p>Assistance getting up, bathing, dressing, grooming, and preparing for rest each evening.</p>

        <h3>Medication Reminders</h3>
        <p>Timely prompts to take the right medications at the right times — day and night.</p>

        <h3>Mobility & Fall Prevention</h3>
        <p>Safe transfers in and out of bed, chairs, and the bathroom to prevent dangerous falls.</p>

        <h3>Meal Preparation</h3>
        <p>Nutritious meals and snacks prepared throughout the day to support health and energy.</p>

        <h3>Overnight Supervision</h3>
        <p>A caregiver remains awake and attentive through the night to respond to any needs immediately.</p>

        <h3>Companionship</h3>
        <p>Meaningful conversation and emotional support that reduces isolation and anxiety.</p>

        {/* Inline image */}
        <div className="relative h-64 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/2 (3).png"
            alt="Peaceful home environment where a senior receives dedicated overnight care"
            fill className="object-cover"
          />
        </div>

        <h2>Benefits of 24-Hour Home Care</h2>
        <ul>
          {[
            'Aging in place — seniors remain in familiar surroundings, reducing stress and confusion, especially for those with cognitive conditions.',
            'One-on-one attention — unlike care facilities where staff manage multiple residents, home caregivers are fully dedicated to one person.',
            'Family peace of mind — knowing a trained professional is always present removes the burden and anxiety from family members.',
            'Faster response to emergencies — a caregiver on-site can respond instantly to medical changes, falls, or distress.',
            'Caregiver respite — family members who have been primary caregivers can step back, rest, and reclaim time for themselves.',
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
            { title: 'Post-Hospital Care for Seniors', href: '/blog/post-hospital-care', img: '/7 (2).png', alt: 'Senior recovering at home after hospital' },
            { title: 'Specialized Senior Care Guide', href: '/blog/specialized-care', img: '/sp1.png', alt: 'Professional caregiver with senior' },
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
