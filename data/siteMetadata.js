// Note: Icon imports are not used directly here; keep visual assets local to components.

const siteMetadata = {
  title: 'Portfolio of Tonde Ndebia Junior Gael',
  description:
    'Welcome to my personal portfolio. I am a computer science major with a passion for AI.',
  author: 'Tonde Ndebia Junior Gael',
  authorHeadline: 'Final year Information Systems Engineering student | Master Degree in Artificial intelligence at ENSIMAG',
  authorAbout:
    "Hi, I'm Junior Gael, a computer science student focusing on AI. I enjoy building intelligent systems and solving real problems with data and code. I am currently seeking a 6‑month end‑of‑studies internship in Artificial Intelligence starting February 2026.",
  authorAboutExtended:
    "Currently studying at ENSIMAG, I focus on AI and its applications. I’m passionate about tackling practical projects, learning new tools, and collaborating to deliver meaningful impact.",
  socials: {
    x: '',
    facebook: '',
    github: 'https://github.com/gael-jun',
    linkedin: 'https://www.linkedin.com/in/tonde-ndebia-junior-gael-581950260?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAlkJw56nRk6rMqHkReQi9w%3D%3D',
    instagram: '',
  },
  email: 'ndebiagaeljunior@gmail.com',
  phoneNumber: '0759519289',
  location: 'Grenoble, France',
  mobilityNote: 'Available across France and the EU',
  contactTitle: 'Get in touch',
  contactSubtitle:
    "I am currently studying computer science and working on exciting projects in AI. If you want to get in touch, please use the form below.",
  analytics: {
    plausibleDataDomain: 'https://cedricktchakonte.com/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // Note: Navbar items and routes used in Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Education',
      href: '/education',
      submenu: [
        { 
          name: 'Academic Background', 
          href: '/education/academic-background' 
        },
        { name: 'Certifications', 
          href: '/education/certifications' 
        },
      ],
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    // {
    //   name: 'Expertise',
    //   href: '/expertise',
    // },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Skills',
      href: '/skills',
    },
    {
      name: 'Certifications',
      href: '/certifications',
    },
    {
      name: 'International Mobility',
      href: '/international-mobility',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'About',
      href: '/about',
    },
  ],
  siteRepo: 'https://github.com/myeportfolio',
  expertise: [
    {
      title: 'AI Projects',
      description:
        'I will guide you through my AI projects, showcasing my skills and passion in this field. From conceptualization to implementation, I will share my journey and the challenges I overcame. Whether you are a beginner or an enthusiast, you will find valuable insights and inspiration.',
      testimonial:
        '“Cedrick is an exceptional talent in AI. His dedication and innovative approach have greatly impressed me. I highly recommend him for any project in this domain.”',
      testimonialAuthor: 'M. John Doe',
      testimonialAuthorTitle: 'Professor at ENSTA Paris',
      imgUrl: '/images/avatar.jpg',
      imageAttribution: 'TODO',
    },
    {
      title: 'AI Workshops',
      description:
        'Join my workshops to learn about AI. These sessions will cover the basics of AI and machine learning, providing hands-on experience with real-world applications. Participants will gain practical knowledge and skills to kickstart their journey in this exciting field.',
      testimonial: '“Cedrick is an exceptional talent in AI. His dedication and innovative approach have greatly impressed me. I highly recommend him for any project in this domain.”',
      testimonialAuthor: 'My Professor',
      testimonialAuthorTitle: 'Professor at ENSTA Paris',
      imgUrl: '/images/avatar.jpg',
      imageAttribution: 'TODO',
    },
  ],
  testimonial: {
    comment:
      '« Je recommande vivement M. TONDE NDEBIA pour toute opportunité future, convaincu qu’il saura s’investir avec la même rigueur, la même efficacité et le même enthousiasme que ceux dont il a fait preuve au cours de son stage.»',
    author: 'Anthony CAMATCHY, E-AUBONNE\'s CEO',
    authorTitle: 'My internship supervisor at E-Aubonne',
  imgUrl: '/images/avatar.jpg',
    imageAttribution: 'Lettre de recommandation — 03/10/2025',
    locationDate: 'Internship carried out in E-aubonne from 06/10/2025 to 08/04/2025',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      'I am a computer science major with a passion for AI. My projects and workshops reflect my dedication and innovative approach in this field.',
  // Note: Keep features array in sync with the FeatureSection component if needed.
  },
  experience: {
    title: 'Things I’ve done trying to put my dent in the universe.',
    intro:
      "I am a Master 2 student in Artificial Intelligence at ENSIMAG (Grenoble INP). I work on AI-driven and systems projects and enjoy building robust, useful software with measurable impact.",
  // Note: Keep experience array in sync with ExperienceSection if icon sets change.
    education: [
      {
        schoolName: 'Institut Polytechnique de Paris',
        degree: '2A Computer Science',
        description:
        'IP Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
        startDate: '2023',
        endDate: '2025',
        typeofDegree: 'Master of Science',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Institut Polytechnique de Paris',
      },
      {
        schoolName: 'Ecole Nationale Supérieure de Techniques Avancées Paris',
        degree: '2A Computer Science',
        description:
          'ENSTA Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
        startDate: '2023',
        endDate: '2025',
        typeofDegree: 'Master of Science',
        ImageUrl: '/images/avatar.jpg',
        alt: 'ENSTA Paris',
      },
      {
        schoolName: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
        degree: '1A Computer Science',
        description:
        'ENSPY is a prestigious engineering school in Cameroon. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
        startDate: '2022',
        endDate: '2024',
        ImageUrl: '/images/avatar.jpg',
        alt: 'ENSPY',
      },
      {
        schoolName: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
        degree: 'Integrated preparatory classes | Mathematics, physical sciences and computer science',
        description:
        'ENSPY is a prestigious engineering school in Cameroon. The preparatory classes program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science.',        
        startDate: '2020',
        endDate: '2022',
        ImageUrl: '/images/avatar.jpg',
        alt: 'ENSPY',
      },
      {
        schoolName: 'Lycée Bilingue de Nylon Ndogpassi',
        degree: 'Baccalauréat | Mathematics, physical sciences and computer science',
        description:
        'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science.',
        startDate: '2022',
        endDate: '2024',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Lycée Bilingue de Nylon Ndogpassi',
      },
    ],
  },

}

export default siteMetadata
