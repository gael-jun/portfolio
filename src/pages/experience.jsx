import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import ExperienceCard from '@/components/ExperienceCard'
// import { motion } from 'framer-motion'

// Logos can be added by importing SVGs into /src/images/logos or using company-provided assets.

const experiences = [
  {
    title: 'AI/Software Engineering Intern',
    company: 'E-Aubonne',
    date: 'Jun 2025 - Aug 2025',
    description: [
      'Theme: Design, development, and integration of a unified photovoltaic energy–finance module (Grid, Off‑Grid, Tracker) into E‑Aubonne’s solar study tool.',
      'PV production estimates via PVGIS API with graphs matching PVGIS/AutoCalSol (validated on a historical client dataset).',
      'Automated PDF/CSV report generation; preparation process reduced to 2 steps.',
      'Financial indicators implemented (NPV, annual cash‑flow, payback) with tests;',
      ' Quality of the code: 84% JaCoCo coverage and A grades on SonarQube (maintainability, security).',
    ],
    location: 'Eaubonne, France',
  link: { url: '/pdf/Rapport_EAubonne.pdf', label: 'Open internship report (PDF)', isButton: true },
    logo: '/images/E-aubonne.jpeg',
  },
  // {
  //   title: 'Lead',
  //   company: 'Apple',
  //   date: '2018 - Present',
  //   description: [
  //     'Supervise a team of 100+ employees across all areas of the business, with approximately 60 team members daily',
  //     'Develop and facilitate daily storewide meetings, workshops, and team training & on-boarding',
  //     'Created and rolled out business training leading to +50%  business related connections, later being implemented market wide to all retail store',
  //   ],
  //   location: 'Vancouver, BC',
  //   link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
  //   logo: logoApple,
  // },
  {
    title: 'Web Development Intern',
    company: 'EUREKA Agency',
    date: 'Jun 2023 – Aug 2023',
    description: [
      'Conception and development of the administration system of a marketplace, including user management, product catalog, supplies and order processing.',
      'Enhanced practical skills in full‑stack web development and delivery workflows.',
    ],
    location: 'Yaoundé, Cameroon',
  // link removed as requested
    logo: '/images/Eureka.jpeg',
  },
  // {
  //   title: 'Genius',
  //   company: 'Apple',
  //   date: '2016 - 2018',
  //   description: [
  //     'Provided technical support to customers, including troubleshooting, diagnosing, and repairing hardware and software issues',
  //     'Strong people skills and a knack for problem solving',
  //     'Maintain composure, provide empathy and customer focus while troubleshooting and solving technical issues',
  //   ],
  //   location: 'Vancouver, BC',
  //   link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
  //   logo: logoApple,
  // },
]

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta name="description" content={`Work experience of ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title={siteMetadata.experience.title}
        intro={siteMetadata.experience.intro}
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <div className="flex flex-col space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.date}`} experience={experience} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}


// utiliser un composant Card pour afficher les expériences professionnelles
