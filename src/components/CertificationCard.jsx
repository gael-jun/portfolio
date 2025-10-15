import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FaAward, FaCalendarAlt, FaTags, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const CertificationCard = ({
  certification: { name, issuer, date, description, logo, tags = [], verificationLink, buttonHref, buttonLabel },
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-start p-6 pt-12 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 bg-white/90 dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Badge Icon */}
      <div className="absolute top-2 right-2 z-20 bg-accent-500 text-white p-3 rounded-full shadow-md">
        <FaAward size={20} />
      </div>

      {/* Header Section */}
      <div className="flex items-center mb-6">
        <Image 
          src={logo} 
          alt={`${name} logo`} 
          width={64} 
          height={64} 
          className="rounded-lg shadow-md"
        />
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="flex items-center text-lg text-gray-600 dark:text-gray-400 mt-2">
            <FaCalendarAlt size={24} className="mr-2 text-accent-500" />
            {date}
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Issued by {issuer}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Tags Section */}
      <div className="mt-5 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <motion.span
            key={`${name}-${tag}`}
            className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-accent-600 to-accent-400 rounded-full shadow-sm"
            whileHover={{ scale: 1.1 }}
          >
            <FaTags className="mr-2" />
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Verification Link or PDF Button */}
      {buttonHref ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          {buttonLabel || 'Open certificate (PDF)'}
        </a>
      ) : (
        verificationLink && <VerificationLink url={verificationLink} />
      )}

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent-400 to-accent-600 rounded-bl-lg rounded-br-lg"></div>
    </motion.div>
  )
}

const VerificationLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 flex items-center text-md text-accent-500 hover:underline transition-colors duration-200"
  >
    <FaExternalLinkAlt size={20} className="mr-2" />
    Verify certificate
  </a>
)

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    verificationLink: PropTypes.string,
    buttonHref: PropTypes.string,
    buttonLabel: PropTypes.string,
  }).isRequired,
}

VerificationLink.propTypes = {
  url: PropTypes.string.isRequired,
}

export default CertificationCard
