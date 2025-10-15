import { RiRobotLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import { IoSchoolOutline, IoCodeWorkingOutline, IoBulbOutline } from 'react-icons/io5'

// Features rendered on the landing page; icons come from react-icons.
const features = [
  {
    name: 'AI Expertise',
    description:
      'With a strong foundation in AI, I have worked on numerous projects that demonstrate my skills and passion. From developing intelligent systems to implementing machine learning algorithms, I bring innovative solutions to complex problems.',
    icon: RiRobotLine,
  },
  {
    name: 'Certifications',
    description:
      'I continuously validate my knowledge with industry-recognized certifications across AI and software engineering. These certifications reflect my commitment to learning and staying current with best practices.',
    icon: IoSchoolOutline,
  },
  {
    name: 'Innovative Projects',
    description:
      'I am always eager to explore new technologies and work on cutting-edge projects. My portfolio includes innovative projects that push the boundaries of AI, showcasing my ability to think creatively and solve challenging problems.',
    icon: IoBulbOutline,
  },
  {
    name: 'Coding and Development',
    description:
      'I have a strong background in coding and software development. I enjoy creating efficient and scalable solutions to complex problems. My experience spans various programming languages and frameworks, making me versatile in tackling different challenges.',
    icon: IoCodeWorkingOutline,
  },
  // {
  //   name: 'Research and Publications',
  //   description:
  //     'I have contributed to research in AI and robotics, with publications in academic journals. My research focuses on developing new algorithms and techniques to improve the performance and capabilities of autonomous systems.',
  //   icon: RiBarcodeLine,
  // },
]
const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-accent-600">
            Expertise in AI
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            {siteMetadata.featureSection.title}
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
            {siteMetadata.featureSection.description}
          </p>
        </div>

        <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-primaryText-800 dark:text-primaryText-100">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
