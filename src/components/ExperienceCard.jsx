import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { RiLinksLine } from 'react-icons/ri'

const ExperienceCard = ({ experience }) => {
  const initials = experience.company
    ? experience.company
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 3)
    : ''

  return (
    <motion.div
      className="relative flex flex-col items-start p-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 280 }}
    >
      {/* Timeline Connector */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-l-full" />

      {/* Header Section */}
      <div className="flex items-center mb-6 w-full">
        {/* Company Logo or Initials */}
        <div className="flex-shrink-0">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="object-cover rounded-full"
              width={80}
              height={80}
            />
          ) : (
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white text-primaryText-800 dark:bg-primaryText-800 dark:text-primaryText-100 shadow ring-1 ring-primaryText-900/5">
              <span className="text-lg font-semibold">{initials}</span>
            </div>
          )}
        </div>
        <div className="ml-6 flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {experience.company}
          </p>
          {experience.location && (
            <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FaMapMarkerAlt className="mr-2 text-accent-500" />
              {experience.location}
            </div>
          )}
        </div>
        {/* Date Section (aligned to the right) */}
        <div className="flex items-center justify-end text-md text-gray-500 dark:text-gray-400 mt-2">
          <FaCalendarAlt className="mr-2 text-accent-500" />
          {experience.date}
        </div>
      </div>

      {/* Description / Bullets */}
      {Array.isArray(experience.description) && experience.description.length > 0 && (
        <ul className="mt-2 space-y-2">
          {experience.description.map((item) => (
            <li key={`${experience.company}-${item}`} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
              <span className="mt-1 mr-2 h-2 w-2 rounded-full bg-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      {experience.link?.url && (
        experience.link.isButton ? (
          <a
            href={experience.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          >
            <RiLinksLine className="w-5 h-5 mr-2" />
            {experience.link.label || 'Open'}
          </a>
        ) : (
          <div className="mt-6 inline-flex items-center text-sm font-medium text-primaryText-600 hover:text-accent-600 dark:text-primaryText-300">
            <RiLinksLine className="w-5 h-5" />
            <a
              href={experience.link.url}
              target="_blank"
              rel="noreferrer"
              className="ml-2 underline decoration-accent-500/50 underline-offset-4"
            >
              {experience.link.label || experience.company}
            </a>
          </div>
        )
      )}

      {/* Bottom Timeline Effect */}
      <div className="absolute bottom-0 left-0 w-2 h-12 bg-gradient-to-b from-accent-600 to-transparent rounded-bl-full" />
    </motion.div>
  )
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
    link: PropTypes.shape({ url: PropTypes.string, label: PropTypes.string }),
    logo: PropTypes.any,
  }).isRequired,
}

export default ExperienceCard
