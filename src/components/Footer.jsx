import Link from 'next/link'
import { Container } from '@/components/Container'
import siteMetadata from '@/data/siteMetadata'
import PropTypes from 'prop-types'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export function Footer() {
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-primaryText-100 dark:border-primaryText-700/40">
          <Container.Inner>
            <div className="flex items-center justify-center">
              <p className="text-sm text-primaryText-400 dark:text-primaryText-500 py-2">
                © 2025 Junior Gael Tonde. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
