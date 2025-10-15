import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import ecomLogo from '@/images/projects/ecom.svg'
import bananaLogo from '@/images/projects/bananaApp.svg'
import supaSnacksLogo from '@/images/projects/supaSnacks.svg'
import payByFonieLogo from '@/images/projects/payByFonie.svg'

// Custom projects; logos are in src/images/projects
const projectsData = [
  {
    title: 'PPE Detection with YOLO',
    description:
      'Personal Protective Equipment (PPE) detection (helmet, vest, etc.) using YOLO with real-time inference. Trained on an annotated dataset; achieved ~92% mAP on validation. Includes alerting logic when PPE is missing in sensitive areas.',
    logo: payByFonieLogo,
    href: 'https://github.com/gael-jun/detectionEPI',
    category: 'Computer Vision',
    skills: [
      'YOLO',
      'PyTorch',
      'OpenCV',
      'Python',
      'Dataset labeling',
      'mAP evaluation',
      'Real-time inference',
    ],
  },
  {
    title: 'Semantic Book Recommender with LLMs',
    description:
      'Data cleaning, semantic (vector) search with a vector DB, zero-shot text classification (fiction vs non-fiction), LLM-based sentiment/emotion extraction, and a Gradio web app for recommendations.',
    logo: supaSnacksLogo,
    href: 'https://github.com/gael-jun/book-recommander',
    category: 'LLMs / NLP / Recommenders',
    skills: [
      'LLMs',
      'Embeddings',
      'Vector DB',
      'Zero-shot classification',
      'Sentiment & emotion analysis',
      'Gradio',
      'Python',
    ],
  },
  {
    title: 'Expert System for Traditional Medicine',
    description:
      'Expert system for traditional medicine: knowledge base modeling (facts/rules), inference engine for recommendations, and a consultation interface. Demonstrated on use cases (plants, indications, contraindications).',
    logo: ecomLogo,
    href: 'https://github.com/gael-jun/projet-ia',
    category: 'Expert Systems',
    skills: [
      'Knowledge representation',
      'Rule-based inference',
      'Forward/Backward chaining',
      'Prolog',
      'Scheme language',
      'PHP',
      'HTML/CSS/JavaScript',
      'MySQL',
    ],
  },
  {
    title: 'Web App for Digitizing Leave Authorization Workflow',
    description:
      'Project carried out at INP‑HB (Ivory Coast) from September 2023 to June 2024. Full‑stack application to digitize the leave authorization workflow: request management, multi‑level validation, notifications, and reporting. Deployed on AWS. Role: team lead.',
    logo: ecomLogo,
    href: 'https://github.com/gael-jun/DigitalisationProcessus',
    category: 'Full‑stack / Workflow Automation',
    buttonHref: '/pdf/RapportProjetInterne.pdf',
    buttonLabel: 'Open project report (PDF)',
    skills: [
      'Django',
      'Bootstrap',
      'REST API',
      'SQLite',
      'Auth & roles',
      'AJAX',
      'UML',
      'AWS deployment',
    ],
  },
  {
    title: 'Deca Language Compiler in Java',
    description:
      'Software engineering project at ENSIMAG during January 2025. My role in this project was the generation of ARM assembly code for the Deca compiler. The main result is a 100% functional code generation for OOP Deca.In this project, I was leading a team of 5 members.',
    logo: ecomLogo,
    href: 'https://github.com/gael-jun/ProjetGL',
    category: 'Compilers / Software Engineering',
    skills: [
      'Java',
      'Compilers',
      'AST/IR',
      'Code generation',
      'ARM assembly',
      'Maven',
      'Git',
      'JaCoCo',
      'Unit testing',
      'Trello',
    ],
  },
  {
    title: 'IoT Intrusion Detection on AWS',
    description:
      'This project aims to develop a sophisticated presence detector using IoT technologies on one of these cloud. I built an IoT intrusion detection using Arduino-driven sensors (PIR and ultrasonic) and I ingested via AWS IoT Core. We also generated alerts.',
    logo: bananaLogo,
    // Replace link with a button to open the project report PDF
    buttonHref: '/pdf/Projet%20de%20Cloud%20Computing_DETECTEUR%20DE%20PRESENCE_Ing%20STIC%202%20INFO.pdf',
    buttonLabel: 'Open project report (PDF)',
    category: 'IoT / Cloud Security',
    skills: [
      'Arduino',
      'PIR & ultrasonic sensors',
      'AWS IoT Core',
      'CloudWatch',
    ],
  },
  
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07-.176.177 1.06-1.06.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta name="description" content={`Personal projects by ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title="Projects I've worked on"
        intro="A selection of projects I’m proud of — built to learn, experiment, and solve real problems."
      >
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projectsData.map((project) => {
            return (
              <Card as="li" key={project.title} className="h-full min-h-[24rem]">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.href ? (
                    <Card.Link href={project.href}>{project.title}</Card.Link>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h2>
                {/* Eyebrow - supplementary text */}
                <Card.Eyebrow decorate>{project.category || 'Category'}</Card.Eyebrow>
                <Card.Description>{project.description}</Card.Description>
                {project.skills && project.skills.length > 0 && (
                  <div className="relative z-10 mt-4 w-full">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primaryText-500 dark:text-primaryText-400">
                      Skills developed
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={`${project.title}-${skill}`}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.buttonHref && project.href ? (
                  <div className="relative z-30 mt-6 flex items-center gap-3 flex-wrap">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <LinkIcon className="flex-none w-5 h-5" />
                      <span className="ml-1">View on GitHub</span>
                    </a>
                    <a
                      href={project.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                    >
                      {project.buttonLabel || 'Open'}
                    </a>
                  </div>
                ) : project.buttonHref ? (
                  <a
                    href={project.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-30 mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                  >
                    {project.buttonLabel || 'Open'}
                  </a>
                ) : (
                  <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-accent-500 dark:text-zinc-200">
                    <LinkIcon className="flex-none w-6 h-6" />
                    <span className="ml-2">{project.title}</span>
                  </p>
                )}
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}
