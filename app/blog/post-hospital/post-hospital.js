import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Post-Hospital Care: Helping Seniors Recover Safely at Home',
  description: 'What is post-hospital care, why does it matter, and how does it prevent hospital readmission? A complete guide to safe senior recovery at home after discharge.',
}

const faqs = [
  { q: 'What is post-hospital care for seniors?', a: 'Post-hospital care is professional home care support that begins immediately after a senior is discharged from a hospital or care facility. It helps seniors recover safely at home by providing assistance with daily activities, medication management, symptom monitoring, and follow-up care coordination — reducing the risk of complications and readmission.' },
  { q: 'Why is post-hospital care important for seniors?', a: 'The period following hospital discharge is when seniors are most physically vulnerable and most likely to experience setbacks. Many readmissions occur due to missed medications, poor nutrition, limited mobility, or unnoticed health changes. A dedicated post-hospital caregiver addresses all of these risks, supporting a safer, faster recovery.' },
  { q: 'How soon after discharge should post-hospital care begin?', a: 'Ideally, post-hospital care should begin on the day of discharge — or even be arranged in advance while the senior is still in the hospital. The sooner a caregiver is in place, the smoother and safer the transition home. Many families coordinate care during the discharge planning process with the hospital\'s social worker or discharge planner.' },
  { q: 'How long does post-hospital care typically last?', a: 'The length of post-hospital care depends on the senior\'s condition, the complexity of the procedure or illness, and their rate of recovery. Some seniors need care for two to four weeks; others may require several months of ongoing support. Care plans are flexible and adjusted regularly as the senior\'s condition improves.' },
  { q: 'Does a post-hospital caregiver work with the senior\'s medical team?', a: 'Yes. Post-hospital caregivers work in close coordination with the senior\'s physicians, physical therapists, and discharge planners. They help ensure that discharge instructions are followed accurately, medications are taken correctly, and any concerning changes in the senior\'s health are reported promptly to the appropriate medical professional.' },
  { q: 'Can post-hospital care transition into long-term home care?', a: 'Absolutely. Many seniors begin with post-hospital care and transition naturally into ongoing in-home care as their needs become clearer. Care plans evolve with the senior — whether that means gradually reducing hours as independence is regained, or expanding to a higher level of ongoing specialized care.' },
]

export default function PostHospitalCareBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm font-sans text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-dark">Post-Hospital Care</span>
      </nav>

      {/* Meta */}
      <div className="mb-6">
        <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
          Post-Hospital Care
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-4">
          Post-Hospital Care: Helping Seniors Recover Safely at Home
        </h1>
        <p className="text-muted font-sans text-lg leading-relaxed mb-4">
          Safe, structured recovery support that helps seniors heal confidently at home — preventing setbacks and avoiding hospital readmission.
        </p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted border-t border-warm-dark pt-4">
          <span>📅 March 2025</span>
          <span>⏱ 8 min read</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 md:h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src="/2 (3).png"
          alt="Senior recovering safely at home after hospital discharge with caregiver providing support"
          fill className="object-cover" priority
        />
      </div>

      {/* Content */}
      <div className="blog-body">

        <h2>What Is Post-Hospital Care?</h2>
        <p>
          Post-hospital care — also called transitional care or discharge care — is professional home care support provided to a senior immediately after being discharged from a hospital, rehabilitation center, or surgical facility. It bridges the critical gap between leaving a clinical setting and resuming safe, independent life at home.
        </p>
        <p>
          During this recovery window, seniors face their highest risk of complications, medication errors, and hospital readmission. A trained post-hospital caregiver provides the consistent, attentive support that helps seniors heal safely, follow their care instructions, and avoid setbacks that send them back to the hospital.
        </p>

        {/* Callout */}
        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded my-8 font-sans text-primary-dark font-semibold leading-relaxed">
          Research consistently shows that the first 30 days after hospital discharge are the most vulnerable period in a senior's recovery. Professional post-hospital care during this window significantly reduces the risk of complications and readmission.
        </div>

        <h2>Why Post-Hospital Care Matters</h2>
        <p>
          1 in 5 seniors are readmitted to the hospital within 30 days of discharge. Studies estimate that up to 40% of these readmissions are preventable with proper home support. The 30-day window following discharge is widely recognized as the highest-risk period in a senior's recovery journey.
        </p>
        <p>
          Recovery at home involves much more than rest. Seniors leaving the hospital often face a complex set of new responsibilities — managing multiple medications, following wound care protocols, attending follow-up appointments, and rebuilding strength — all while still feeling weak and unwell. Without proper support, these challenges can quickly become dangerous.
        </p>

        {/* Inline image */}
        <div className="relative h-64 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/ps.png"
            alt="Caregiver reviewing discharge instructions with a senior at home after hospital stay"
            fill className="object-cover"
          />
        </div>

        <h2>A Structured Approach to Recovery at Home</h2>

        <h3>Step 1 — Discharge Planning Support</h3>
        <p>The caregiver coordinates with hospital staff and family members to fully understand the senior's discharge instructions, medications, restrictions, and follow-up care schedule.</p>

        <h3>Step 2 — Safe Return Home</h3>
        <p>The caregiver accompanies the senior home, ensures the environment is safe and accessible, and helps them settle comfortably before ongoing care begins.</p>

        <h3>Step 3 — Daily Recovery Care</h3>
        <p>Ongoing assistance with personal care, medication reminders, meals, mobility, and symptom monitoring throughout the recovery period.</p>

        <h3>Step 4 — Follow-Up Appointment Support</h3>
        <p>The caregiver provides transportation to and from medical follow-up visits and communicates any concerns observed at home to the care team.</p>

        <h3>Step 5 — Family Updates & Communication</h3>
        <p>Regular updates to family members keep everyone informed about the senior's progress, any changes in condition, and next steps in recovery.</p>

        <h2>What Post-Hospital Care Services Include</h2>
        <ul>
          {[
            'Medication management — reminders to take the right medications at correct times, preventing dangerous errors',
            'Nutritious meal preparation that supports healing, respects dietary restrictions, and rebuilds strength',
            'Mobility and exercise support including safe movement assistance and physical therapy exercise follow-through',
            'Symptom monitoring — watching for warning signs like infection, swelling, pain changes, or confusion',
            'Medical transportation to follow-up appointments, labs, imaging, and therapy sessions',
            'Light housekeeping and home hazard awareness to maintain a clean, safe recovery environment',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>

        {/* Inline image */}
        <div className="relative h-82 md:h-96 rounded-lg overflow-hidden mb-10 shadow-lg">
          <Image
            src="/20 (1).png"
            alt="Caregiver helping a senior with mobility exercises during post-hospital recovery at home"
            fill className="object-cover"
          />
        </div>

        <h2>Common Conditions That Benefit from Post-Hospital Care</h2>
        <ul>
          {[
            'Hip or knee replacement surgery and other orthopedic procedures',
            'Stroke recovery requiring physical therapy follow-through and mobility support',
            'Cardiac events such as heart attack or heart failure hospitalization',
            'Pneumonia, sepsis, or other serious infections requiring strict medication adherence',
            'Chronic obstructive pulmonary disease (COPD) exacerbation and respiratory recovery',
            'Diabetes management and wound care following related complications or surgery',
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
            { title: '24-Hour Home Care for Seniors', href: '/blog/24-hour-care', img: '/a.png', alt: 'Caregiver providing overnight senior care' },
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
