import Link from 'next/link'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const variantStyles = {
  primary:
    'bg-primaryText-800 font-semibold text-primaryText-100 hover:bg-primaryText-700 active:bg-primaryText-800 active:text-primaryText-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:active:bg-slate-700 dark:active:text-white/70 dark:focus-visible:ring-accent-400 dark:focus-visible:ring-offset-slate-900',
  secondary:
    'bg-primaryText-50 font-medium text-primaryText-900 hover:bg-primaryText-100 active:bg-primaryText-100 active:text-primaryText-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-slate-800/60 dark:text-primaryText-200 dark:hover:bg-slate-800 dark:hover:text-white dark:active:bg-slate-800/60 dark:active:text-white/70 dark:focus-visible:ring-accent-400 dark:focus-visible:ring-offset-slate-900',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  href: PropTypes.string,
}
