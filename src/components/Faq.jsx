import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What inspired you to pursue AI?',
    answer:
      'My passion for AI was sparked by its potential to revolutionize various industries and improve lives. The ability to create intelligent systems that can learn and adapt fascinates me, and I am driven by the challenge of solving complex problems.',
  },
  {
    question: 'Can you describe a project you are particularly proud of?',
    answer:
      "A recent personal project (Apr–May 2024) is an AI system for detecting PPE (Personal Protective Equipment). I trained a YOLO-based model on annotated data in Google Colab, I annotated my sets myself and achieved ~92% mAP on the test set. Tech stack: Computer Vision, Machine Learning, YOLO, OpenCV.",
  },
  {
    question: 'What programming languages and tools do you use?',
    answer:
      'I primarily use Python for its simplicity and extensive libraries for machine learning and data analysis. I also use Java for certain projects. Additionally, I am proficient with tools such as TensorFlow, PyTorch, etc.',
  },
  {
    question: 'How do you stay updated with the latest advancements in AI?',
    answer:
      'I stay updated with the latest advancements by reading research papers, attending conferences, participating in online forums, and taking advanced courses.',
  },
  {
    question: 'What are your future goals in AI?',
    answer:
      'My future goals include contributing to cutting-edge research, developing innovative solutions for real-world problems, and sharing my knowledge through teaching and mentoring. I aim to make a significant impact in the field of AI and help drive technological advancements.',
  },
  {
    question: 'How do you handle challenges and setbacks in your projects?',
    answer:
      'I view challenges and setbacks as opportunities to learn and grow. When faced with a difficult problem, I analyze the situation, seek feedback from peers, and explore alternative approaches.',
  },
]


const Faq = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Here are some common questions about my work in AI.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.3 }}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300"
              >
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="lg:text-center">
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Can’t find the answer you’re looking for?&nbsp;Reach out to&nbsp;
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 hover:text-accent-500"
            >
              me
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
