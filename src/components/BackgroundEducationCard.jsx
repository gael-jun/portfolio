import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendarAlt, FaBook, FaGraduationCap } from 'react-icons/fa'
import PropTypes from 'prop-types'

const BackgroundEducationCard = ({ education }) => {
  return (
    <motion.div
      className="relative flex flex-col items-start p-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Timeline Connector */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-l-full"></div>

      {/* Header Section */}
      <div className="flex items-center mb-6 w-full">
        {/* University Logo */}
        {education.logo && (
          <div className="flex-shrink-0">
            <Image 
            src={education.logo} 
            alt={`${education.institution} Logo`} 
            className="object-cover rounded-full" 
            width = {100}
            height = {100}
            />
          </div>
        )}
        <div className="ml-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {education.degree}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {education.institution}
          </p>
        </div>
        {/* Date Section (aligned to the right) */}
        <div className="flex items-center justify-end text-md text-gray-500 dark:text-gray-400 mt-2">
          <FaCalendarAlt className="mr-2 text-accent-500" />
          {education.startDate} - {education.endDate}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {education.description}
      </p>

      {/* Courses or Highlights Section */}
      {education.highlights && (
        <ul className="mt-4 space-y-2">
          {education.highlights.map((highlight) => (
            <li key={`${education.institution}-${highlight}`} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <FaBook className="mr-2 text-accent-500" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {/* Graduation Icon (aligned to the right) */}
      <div className="absolute bottom-0 right-0 p-4">
        <div className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-full shadow-md">
          <FaGraduationCap size={32} />
        </div>
      </div>

      {/* Bottom Timeline Effect */}
      <div className="absolute bottom-0 left-0 w-2 h-12 bg-gradient-to-b from-accent-600 to-transparent rounded-bl-full"></div>
    </motion.div>
  )
}

export default BackgroundEducationCard

BackgroundEducationCard.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    logo: PropTypes.any,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
