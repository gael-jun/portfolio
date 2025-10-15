import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({ as: Component = 'div', className, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Component
        className={clsx(
          className,
          'group relative flex flex-col items-start p-8 overflow-hidden',
          'bg-white dark:bg-slate-900',
          'rounded-2xl backdrop-blur-sm',
          'ring-1 ring-black/5 dark:ring-white/10',
          'shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]',
          'dark:shadow-none',
          'transform-gpu transition-all duration-300'
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primaryText-100/0 via-primaryText-100/0 to-primaryText-100/15 dark:from-white/0 dark:via-white/0 dark:to-white/5" />
        {children}
      </Component>
    </motion.div>
  )
}

Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute z-0 transition-all duration-500 ease-out scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-gradient-to-br from-accent-500/5 via-accent-500/10 to-accent-500/20 group-hover:scale-100 group-hover:opacity-100 dark:from-accent-400/10 dark:via-accent-400/15 dark:to-accent-400/25 sm:-inset-x-6 sm:rounded-2xl backdrop-blur-sm" />
      <Link {...props}>
        <span className="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
        <motion.span 
          className="relative z-10"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {children}
        </motion.span>
      </Link>
    </>
  )
}

Card.Link.propTypes = {
  children: PropTypes.node,
}

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
  return (
    <Component className="relative text-xl font-bold tracking-tight text-primaryText-900 dark:text-primaryText-100 transition-colors duration-300 group-hover:text-accent-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-500 after:transition-all after:duration-300 group-hover:after:w-full">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Title.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
  children: PropTypes.node,
}

Card.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-10 mt-4 text-base leading-7 text-primaryText-600 dark:text-primaryText-400 transition-colors duration-300 group-hover:text-primaryText-700 dark:group-hover:text-primaryText-300">
      {children}
    </p>
  )
}

Card.Description.propTypes = {
  children: PropTypes.node,
}

Card.Cta = function CardCta({ children }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative z-10 flex items-center mt-6 text-sm font-semibold text-accent-500 dark:text-accent-400"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ChevronRightIcon className="w-4 h-4 ml-1 stroke-current transition-all duration-300 group-hover:stroke-2" />
      </motion.div>
    </motion.div>
  )
}

Card.Cta.propTypes = {
  children: PropTypes.node,
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-4 flex items-center text-sm font-medium',
        'uppercase tracking-wider text-accent-500/80 dark:text-accent-400/80',
        'transition-colors duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-300',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-6 w-0.5 rounded-full bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600 dark:from-accent-300 dark:via-accent-400 dark:to-accent-500 animate-pulse" />
        </span>
      )}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.span>
    </Component>
  )
}

Card.Eyebrow.propTypes = {
  as: PropTypes.elementType,
  decorate: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

// Ajout d'un nouveau composant pour les images
Card.Image = function CardImage({ src, alt }) {
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

Card.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}