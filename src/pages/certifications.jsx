import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'

// Certifications (translated to English)
const certifications = [
   {
    name: 'Deep Learning Specialization',
    issuer: 'deeplearning.ai | Coursera',
    date: 'October 2025',
    description:
      'Specialization in Deep Learning (neural networks, CNNs, RNN / sequence models). Completed in October 2025. Verification link pending.',
    logo: '/images/deepLearning.ai.png',
    tags: ['Deep Learning', 'Neural Networks', 'AI'],
  },
  
  {
    name: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera | University of Michigan',
    date: '27 December 2022',
    description:
      'Online course covering Python fundamentals. Instructor: Charles Severance (Clinical Professor, School of Information, University of Michigan).',
    logo: '/images/michigan.png',
    tags: ['Python', 'Programming', 'Coursera'],
    verificationLink: 'https://coursera.org/verify/MPP4JNZ5BYEL',
  },
  {
    name: 'TOEIC — B2 Level',
    issuer: 'ETS Global',
    date: 'May 2025',
    description:
      'TOEIC certification confirming a B2 CEFR level in English listening and reading comprehension.',
    logo: '/images/Toeic.png',
    tags: ['English', 'TOEIC', 'B2'],
  },
  {
    name: 'Introduction to Programming (in Java)',
    issuer: 'Coursera | EPFL (École Polytechnique Fédérale de Lausanne)',
    date: '11 December 2022',
    description:
      'Introduction to Java programming fundamentals. Instructors: Dr Jean‑Cédric Chappelier, Dr Jamila Sam.',
    logo: '/images/epfl.png',
    tags: ['Java', 'Programming'],
    verificationLink: 'https://coursera.org/verify/SSNXK84PKZ6N',
  },
  {
    name: 'Introduction to Object-Oriented Programming (in Java)',
    issuer: 'Coursera | EPFL (École Polytechnique Fédérale de Lausanne)',
    date: '12 December 2022',
    description:
      'Introduction to OOP principles in Java. Instructors: Dr Jean‑Cédric Chappelier, Dr Jamila Sam.',
    logo: '/images/epfl.png',
    tags: ['Java', 'OOP'],
    verificationLink: 'https://coursera.org/verify/TQ6VRWVLQPAK',
  },
  {
    name: 'Cyber Security and IT – French',
    issuer: 'Qlearn | Quest International University Of Perak',
    date: '27 December 2022',
    description:
      'Certification covering fundamentals of GDPR (General Data Protection Regulation) and cybersecurity. Platform: Qlearn (Quest International University of Perak).',
    logo: '/images/QIUP.jpeg',
    tags: ['Cybersecurity', 'IT'],
    buttonHref: '/pdf/certificate-2356228.pdf',
    buttonLabel: 'Open certificate (PDF)',
  },
  
]
  
export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications - {siteMetadata.author}</title>
        <meta name="description" content={`Certifications earned by ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title="Certifications"
        intro="A selection of my certifications with key details."
      >
        {/* Grid Layout for Certification Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={`${certification.name}-${certification.date}`}
              certification={certification}
            />
          ))}
        </div>

        {/* PDF CTA supprimé selon la demande de l'utilisateur */}
      </SimpleLayout>
    </>
  )
}
