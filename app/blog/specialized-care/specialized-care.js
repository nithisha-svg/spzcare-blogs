import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Specialized Senior Care: A Complete Guide',
  description: 'What is specialized senior care, who needs it, and how is it different from standard home care? A complete guide for families navigating complex care decisions.',
}

const faqs = [
  { q: 'What makes senior care "specialized"?', a: 'Senior care is considered specialized when it is designed to address complex, condition-specific, or intensive needs that go beyond standard home care. This includes care for seniors who require continuous supervision, support through major health transitions, highly structured routines, or expert knowledge of specific medical or life circumstances. Specialized care is distinguished by its depth of personalization, the training of its caregivers, and its integration with the broader medical and family care team.' },
  { q: 'How is a specialized care plan created?', a: 'A specialized care plan begins with a comprehensive assessment of the senior\'s physical health, cognitive status, daily routines, personal preferences, and family situation. A care coordinator works closely with the senior, their family, and often their medical team to develop a plan that addresses current needs while anticipating future ones. The plan is reviewed regularly and adjusted as the senior\'s condition and circumstances evolve.' },
  { q: 'Can specialized care be provided alongside medical treatment?', a: 'Yes. Specialized home care is designed to complement — not replace — medical treatment. Caregivers work in coordination with physicians, therapists, and other healthcare professionals to ensure that the senior\'s care plan aligns with their medical goals. Caregivers also monitor for changes in condition and communicate observations to the appropriate medical team, creating a connected layer of support around the senior.' },
  { q: 'Is specialized care only for seniors with terminal or serious illness?', a: 'No. While specialized care is absolutely appropriate for seniors facing serious illness or end-of-life circumstances, it is equally relevant for those managing chronic conditions, recovering from major health events, navigating cognitive decline, or requiring around-the-clock support for safety. Specialized care is defined by the complexity and intensity of the need — not solely by the severity of a diagnosis.' },
  { q: 'How do I know if my loved one needs specialized care rather than standard home care?', a: 'The clearest indicators are when a senior\'s needs exceed what standard care can safely and effectively address — such as requiring continuous supervision, specialized caregiver training, coordination with a medical team, or a highly structured daily routine. A professional care assessment is the most reliable way to evaluate the appropriate level of care.' },
  { q: 'How quickly can specialized care begin?', a: 'Specialized care can often be arranged within a short timeframe once an assessment has been completed and a care plan is in place. For urgent situations — such as a sudden health event or hospital discharge — care coordinators work to establish support as quickly as possible to ensure continuity and safety from the very first day.' },
]

export default function SpecializedCareBlog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm font-sans text-muted mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-dark">Specialized Care</span>
      </nav>

      {/* Category & Meta */}
      <div className="mb-6">
        <span className="inline-block bg-accent text-white text-xs font-sans font-semibold px-3 py-1 rounded mb-4">
          Specialized Care
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-4">
          Specialized Senior Care: A Complete Guide
        </h1>
        <p className="text-muted font-sans text-lg leading-relaxed mb-4">
          What is specialized senior care, who needs it, and how does it differ from standard home care? Everything families need to know.
        </p>
        <div className="flex items-center gap-4 text-xs font-sans text-muted border-t border-warm-dark pt-4">
          <span>📅 March 2025</span>
          <span>⏱ 8 min read</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 md:h-96 rounded-lg overflow-hidden mb-12 shadow-lg">
        <Image
          src="/1 (7).png"
          alt="Professional caregiver providing specialized one-on-one care to an elderly senior at home"
          fill className="object-cover"
          priority
        />
      </div>

      {/* Blog Content */}
      <div className="blog-body">

        <h2>What Is Specialized Senior Care?</h2>
        <p>
          Specialized senior care is a higher level of professional home care designed for older adults who have complex medical conditions, significant physical limitations, or circumstances that require more than standard day-to-day assistance. It goes beyond basic companionship or household help — it is care built around the specific, evolving, and often intensive needs of individuals whose health or life situation demands a more dedicated, skilled, and structured approach.
        </p>
        <p>
          Unlike general in-home care, specialized care is not a one-size-fits-all service. It is deeply personalized — shaped by a thorough understanding of the senior's diagnosis, daily challenges, emotional needs, and personal preferences. Every care plan is as unique as the person it serves.
        </p>

        {/* Inline image */}
        <div className="relative h-80 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/i.png"
            alt="Care coordinator reviewing a personalized care plan with a senior and their family"
            fill className="object-cover"
          />
        </div>

        <h2>Who Is Specialized Care For?</h2>
        <p>
          Specialized care is designed for seniors and their families who are navigating situations that require a greater depth of professional support. It is the right choice when:
        </p>
        <ul>
          {[
            'A senior can no longer safely manage daily life without consistent, skilled assistance',
            'A medical condition, diagnosis, or recent health event has significantly changed care needs',
            'Family caregivers are unable to provide the level of support required on their own',
            'The senior\'s needs extend into nighttime hours or require round-the-clock attention',
            'A loved one is transitioning through a major life or health milestone requiring compassionate, expert guidance',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg mt-0.5 flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>
        <p>
          Specialized care is not a last resort — it is a proactive, empowering choice that protects a senior's safety, preserves their dignity, and gives families the peace of mind they need.
        </p>

        <h2>How Specialized Care Is Different</h2>
        <p>
          Standard home care helps seniors with everyday tasks — meal preparation, light housekeeping, personal hygiene, and companionship. Specialized care goes significantly further. It addresses situations where a senior's physical, cognitive, or medical condition requires:
        </p>
        <ul>
          {[
            'Carefully structured care routines built around clinical and personal needs',
            'Caregivers who are trained beyond general senior care, with expertise in specific conditions and circumstances',
            'Close coordination with physicians, medical teams, and family members',
            'Ongoing monitoring and the ability to recognize and respond to health changes',
            'A level of consistency and continuity that only a dedicated, individualized care plan can provide',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg mt-0.5 flex-shrink-0">●</span>{item}</li>
          ))}
        </ul>
        <p>
          The difference between standard and specialized care is not just in what is done — it is in the depth of knowledge, the precision of the plan, and the expertise of the caregivers delivering it.
        </p>

        {/* Inline image */}
        <div className="relative h-80 rounded-lg overflow-hidden my-10 shadow-md">
          <Image
            src="/g.png"
            alt="Family meeting with a care coordinator to discuss a specialized senior care plan"
            fill className="object-cover"
          />
        </div>

        <h2>The Foundation of Specialized Care: Individualized Care Plans</h2>
        <p>
          At the heart of every specialized care program is a personalized care plan — a detailed, thoughtfully developed roadmap that guides every aspect of how a senior is supported. A strong care plan considers:
        </p>
        <ul>
          {[
            'The senior\'s current health status, diagnoses, and medical history',
            'Physical abilities, mobility limitations, and safety risks',
            'Cognitive and emotional wellbeing',
            'Daily routines, personal preferences, and lifestyle values',
            'Family dynamics and the availability of informal support',
            'Goals for quality of life, comfort, and independence',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg mt-0.5 flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>
        <p>
          Care plans are never static. As a senior's condition evolves — whether they improve, stabilize, or face new challenges — the plan is reviewed and adjusted to ensure care remains appropriate, effective, and centered on the person's best interests.
        </p>

        <h2>What Families Can Expect from Specialized Care</h2>
        <p>
          Choosing specialized senior care means choosing a team that is fully invested in your loved one's wellbeing. Families can expect:
        </p>
        <ul>
          {[
            'A thorough initial consultation and assessment to understand the senior\'s full situation',
            'A custom care plan developed collaboratively with the family and, where possible, the senior themselves',
            'Carefully matched caregivers selected for both professional skill and personal compatibility',
            'Regular communication and updates so families always know how their loved one is doing',
            'Flexibility to scale care up or down as needs change over time',
            'A consistent, trustworthy presence that the senior can rely on and feel safe with',
          ].map((item, i) => (
            <li key={i}><span className="text-accent font-bold text-lg mt-0.5 flex-shrink-0">✓</span>{item}</li>
          ))}
        </ul>
        <p>
          Specialized care is not just a service — it is a relationship built on trust, expertise, and genuine commitment to elevating the quality of life of every person in care.
        </p>

        <h2>Why Specialized Care Matters</h2>
        <p>
          Aging is not a uniform experience. For many seniors, it brings challenges that are deeply personal — a diagnosis that changes everything, a health event that shifts the course of daily life, or a gradual decline that makes independence increasingly difficult. In these moments, the quality of care a senior receives has a profound impact — not just on their physical health, but on their emotional wellbeing, their sense of self, and their ability to find meaning and comfort in each day.
        </p>
        <p>
          Specialized care exists to meet seniors in those moments — with skill, with compassion, and with an unwavering commitment to their dignity. It allows seniors to remain in familiar environments whenever possible, surrounded by people who know them, understand them, and are equipped to support them in ways that truly make a difference.
        </p>
        <p>
          For families, it provides something equally invaluable: the confidence of knowing that their loved one is genuinely cared for — not just looked after.
        </p>

      </div>

      {/* FAQ */}
      <div className="mt-16 border-t border-warm-dark pt-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8">Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </div>

      {/* Related posts */}
      <div className="mt-16 border-t border-warm-dark pt-12">
        <h2 className="font-display text-2xl font-bold text-primary-dark mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: '24-Hour Home Care for Seniors', href: '/blog/24-hour-care', img: '/a.png', alt: 'Caregiver providing overnight senior care' },
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
