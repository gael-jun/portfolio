import { Container } from '@/components/Container';
import { motion } from 'framer-motion';

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-4 sm:mt-8 px-2 sm:px-4">
      <header className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-3 text-sm text-primaryText-600 dark:text-primaryText-400 sm:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {intro}
        </motion.p>
      </header>
      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </Container>
  );
}
