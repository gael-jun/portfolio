import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'

// NOTE: Logos to add later in /public/images/logo (ensimag.png, inp-hb.png, enspy.png, lycee-japoma.png)
// Dates use month abbreviations in English; adjust if you prefer another format.
const educationBackground = [
  {
    degree: 'Master 2 in Artificial Intelligence & 3rd Year Information Systems Engineering (Double Degree)',
    institution: 'Grenoble INP – ENSIMAG, Grenoble (France)',
    logo: '/images/logo/ensimag.png',
    startDate: 'Sep 2025',
    endDate: 'Present',
    description:
      'English-taught advanced curriculum focused on applied AI (computer vision, NLP, multimodal and generative AI). Goal: deepen technical expertise while strengthening end‑to‑end system and product thinking.',
    highlights: [
      'Core modules: Computer Vision, NLP, Multimodal & Generative AI',
      'International, high‑intensity academic environment',
      'Project‑driven learning & experimentation',
      'Focus: resilient information systems design',
    ],
  },
  {
    degree: '2nd Year Information Systems Engineering (Double Degree Path)',
    institution: 'Grenoble INP – ENSIMAG (with ENSPY)',
    logo: '/images/logo/ensimag.png',
    startDate: 'Sep 2024',
    endDate: 'Jul 2025 (to confirm)',
    description:
      'Entry into the ENSIMAG–ENSPY double degree. Consolidation of advanced software architecture, algorithms, optimization and distributed systems foundations.',
    highlights: [
      'Shift toward deeper AI & systems integration',
      'Cross‑disciplinary teamwork & adaptation',
      'Fast academic and cultural integration',
    ],
  },
  {
    degree: '2nd Year Computer Engineering (Honours – Ranked 1st / Major)',
    institution: 'INP-HB (Institut National Polytechnique Houphouët-Boigny), Côte d\'Ivoire',
    logo: '/images/logo/inp-hb.jpeg',
    startDate: 'Sep 2023',
    endDate: 'Jul 2024',
    description:
      'One-year intra-African exchange program. Full academic immersion while maintaining excellence (ranked first) and developing adaptability and leadership in a new regional context.',
    highlights: [
      'Ranked first (major of cohort)',
      'Honours distinction',
      'Strengthening: algorithms, applied math, software engineering',
      'International collaboration (Central & West Africa)',
    ],
  },
  {
    degree: 'Preparatory Classes MPSI (Years 1–2) + 1st Year Computer Engineering',
    institution: 'ENSPY (École Nationale Supérieure Polytechnique de Yaoundé), Cameroon',
    logo: '/images/logo/enspy.png',
    startDate: 'Oct 2020',
    endDate: 'Jun 2023',
    description:
      'Intensive scientific foundation: advanced mathematics, physics, algorithmics and core computer science. Built rigor, abstraction capacity and cognitive endurance.',
    highlights: [
      'Mathematical analysis, algebra, probability',
      'Fundamental physics',
      'Algorithms & data structures',
      'Initial software projects',
      'Transition toward engineering practice',
    ],
  },
  {
    degree: 'Scientific Baccalauréat (Mathematics & Physical Sciences) – Honours (Mention Bien)',
    institution: 'Lycée de Japoma, Cameroon',
    logo: '/images/logo/lycee-japoma.jpeg',
    startDate: '2019',
    endDate: '2020',
    description:
      'National secondary diploma with strong scientific focus. Solid grounding in analytical reasoning, quantitative problem solving and disciplined study habits.',
    highlights: [
      'Mathematics & physics excellence',
      'Honours distinction (Mention Bien)',
      'Foundation for competitive engineering path',
    ],
  },
]

export default function Education() {
  return (
    <>
      <Head>
        <title>Education Background - {siteMetadata.author}</title>
        <meta
          name="description"
          content={`Academic journey of ${siteMetadata.author}: double degree pathway, international mobility, engineering and applied AI specialization.`}
        />
      </Head>
      <SimpleLayout
        title="Education Background"
        intro="A structured progression from scientific fundamentals to international excellence, leadership through mobility, and specialization in Applied Artificial Intelligence and Information Systems Engineering."
      >
        <div className="flex flex-col space-y-8">
          {educationBackground.map((education) => (
            <BackgroundEducationCard key={`${education.institution}-${education.startDate}`} education={education} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
