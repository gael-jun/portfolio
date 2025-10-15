import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { FaPython, FaJava, FaGitAlt, FaLinux, FaHtml5, FaJs, FaCss3Alt, FaAws, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiSpringboot, SiNextdotjs, SiApachecassandra, SiPycharm, SiVisualstudio, SiCplusplus, SiTensorflow, SiPytorch, SiJupyter, SiMongodb, SiPostgresql, SiRos, SiScikitlearn, SiNumpy, SiPandas, SiOpencv, SiAnaconda, SiVisualstudiocode, SiEclipseide, SiIntellijidea, SiAzuredevops, SiGooglecloud, SiSpringsecurity } from 'react-icons/si'

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'AI and Machine Learning',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Scikit-Learn', icon: SiScikitlearn },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'OpenCV', icon: SiOpencv },
    ],
  },
  {
    category: 'Robotics',
    items: [
      { name: 'Arduino/Raspberry', icon: SiRos },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Cassandra', icon: SiApachecassandra },

    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
      { name: 'Anaconda', icon: SiAnaconda },
      { name: 'VS Code', icon: SiVisualstudiocode },
      { name: 'Eclipse', icon: SiEclipseide },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Visual Studio', icon: SiVisualstudio },
      { name: 'Pycharm', icon: SiPycharm },
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: SiAzuredevops },
      { name: 'Google-Cloud', icon: SiGooglecloud },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'Node.JS', icon: FaNodeJs },
      { name: 'React', icon: FaReact },
      { name: 'Next.JS', icon: SiNextdotjs },
      { name: 'SpringBoot', icon: SiSpringboot },
      { name: 'Spring-Security', icon: SiSpringsecurity },
    ],
  },
]

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills-{siteMetadata.author}</title>
        <meta name="description" content={`Skills and expertise of ${siteMetadata.author}`} />
      </Head>
  <SimpleLayout title="Skills" intro="Here are the various skills and tools I have mastered in the field of computer science, with a focus on AI.">
        <div className="space-y-20">
          {skills.map((skillCategory) => (
            <section key={skillCategory.category}>
              <h2 className="text-lg font-semibold leading-8 text-accent-600">
                {skillCategory.category}
              </h2>
              <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {skillCategory.items.map((skill) => (
                  <Card key={skill.name} className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                        <skill.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</div>
                  </Card>

                ))}
              </div>
            </section>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}