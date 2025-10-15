import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Preloader = ({ minLoadingTime = 1000 }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    // Simuler une progression de chargement
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 50;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    // Vérifier si le temps minimum est écoulé et la progression est complète
    const loadingCheck = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minLoadingTime && progress >= 100) {
        setLoading(false);
        clearInterval(progressInterval);
        clearInterval(loadingCheck);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(loadingCheck);
    };
  }, [minLoadingTime, progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="relative flex items-center justify-center space-x-3">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-accent-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  y: [0, -24, 0],
                  backgroundColor: [
                    'rgb(59, 130, 246)',
                    'rgb(99, 102, 241)',
                    'rgb(59, 130, 246)'
                  ]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-accent-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <motion.p 
            className="mt-4 text-accent-400 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Chargement... {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

Preloader.propTypes = {
  minLoadingTime: PropTypes.number,
}