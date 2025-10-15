import { Fragment, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// Use public/images path for the small round avatar on Home
const avatarImage = '/images/profil1.jpg'
import {
  CloseIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from '@/images/icons/NavIcons'
import siteMetadata from '@/data/siteMetadata'

// used to list items in mobile nav
function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

MobileNavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

// mobile nav on small screens
function MobileNavigation(props) {
  return (
    <Popover {...props}>
  <Popover.Button className="flex items-center px-4 py-2 text-sm font-medium rounded-full shadow-lg group bg-white/60 hover:bg-white/90 text-primaryText-800 shadow-primaryText-800/5 ring-1 ring-black/10 hover:ring-black/20 backdrop-blur-md transition-colors dark:bg-slate-900/50 dark:hover:bg-slate-900/80 dark:text-primaryText-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="w-2 h-auto ml-3 stroke-primaryText-500 group-hover:stroke-primaryText-700 dark:group-hover:stroke-primaryText-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-primaryText-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/10"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="p-1 -m-1">
                <CloseIcon className="w-6 h-6 text-primaryText-500 dark:text-primaryText-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-primaryText-600 dark:text-primaryText-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base divide-y divide-primaryText-100 text-primaryText-800 dark:divide-primaryText-100/5 dark:text-primaryText-300">
                {siteMetadata.siteNavLinks.map((link) => {
                  return (
                    <MobileNavItem key={link.href} href={link.href}>
                      {link.name}
                    </MobileNavItem>
                  )
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

// used to list items in desktop nav
function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-accent-500 dark:text-accent-400'
            : 'hover:text-accent-500 dark:hover:text-accent-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-accent-500/0 via-accent-500/40 to-accent-500/0 dark:from-accent-400/0 dark:via-accent-400/40 dark:to-accent-400/0" />
        )}
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

// desktop nav on large screens
function DesktopNavigation(props) {
  return (
    <nav {...props}>
  <ul className="flex px-3 text-sm font-medium rounded-full shadow-lg bg-white/60 hover:bg-white/90 text-primaryText-800 shadow-primaryText-800/5 ring-1 ring-black/10 hover:ring-black/20 backdrop-blur-md transition-colors dark:bg-slate-900/50 dark:hover:bg-slate-900/80 dark:text-primaryText-200 dark:ring-white/10 dark:hover:ring-white/20">
        {siteMetadata.siteNavLinks.map((link) => {
          return (
            <NavItem key={link.href} href={link.href}>
              {link.name}
            </NavItem>
          )
        })}
      </ul>
    </nav>
  )
}

// used to transition between light and dark mode
function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="px-3 py-2 transition rounded-full shadow-lg group bg-white/60 hover:bg-white/90 shadow-primaryText-800/5 ring-1 ring-black/10 hover:ring-black/20 backdrop-blur-md dark:bg-slate-900/50 dark:hover:bg-slate-900/80 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-primaryText-100 stroke-primaryText-500 transition group-hover:fill-primaryText-200 group-hover:stroke-primaryText-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-accent-50 [@media(prefers-color-scheme:dark)]:stroke-accent-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-accent-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-600" />
      <MoonIcon className="hidden h-6 w-6 fill-primaryText-700 stroke-primaryText-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-primaryText-400 [@media_not_(prefers-color-scheme:dark)]:fill-accent-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-accent-500" />
    </button>
  )
}

// helper to help with scaling of avatar when user scrolls down
function scrollHeight(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 backdrop-blur dark:bg-primaryText-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

AvatarContainer.propTypes = {
  className: PropTypes.string,
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-primaryText-100 object-cover dark:bg-primaryText-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
      />
    </Link>
  )
}

Avatar.propTypes = {
  large: PropTypes.bool,
  className: PropTypes.string,
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)
  const [enableScrollEffects, setEnableScrollEffects] = useState(false)

  useEffect(() => {
    // Disable dynamic scroll effects: keep only the fixed navbar
    setEnableScrollEffects(false)
  }, [isHomePage])

  useEffect(() => {
    if (!enableScrollEffects) {
      // Ensure any CSS vars are cleared so static layout is used
      document.documentElement.style.removeProperty('--header-position')
      document.documentElement.style.removeProperty('--header-height')
      document.documentElement.style.removeProperty('--header-mb')
      document.documentElement.style.removeProperty('--header-inner-position')
      document.documentElement.style.removeProperty('--header-top')
      document.documentElement.style.removeProperty('--avatar-top')
      document.documentElement.style.removeProperty('--avatar-image-transform')
      document.documentElement.style.removeProperty('--avatar-border-transform')
      document.documentElement.style.removeProperty('--avatar-border-opacity')
      return
    }
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = scrollHeight(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
  scale = scrollHeight(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = scrollHeight(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    // Throttle updates to animation frame to avoid layout thrash
    let rafId = null
    function onScrollOrResize() {
      if (rafId != null) return
      rafId = window.requestAnimationFrame(() => {
        updateStyles()
        rafId = null
      })
    }

    updateStyles()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize, { passive: true })
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [isHomePage, enableScrollEffects])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex flex-col pointer-events-none"
      >
        {/* Homepage large avatar removed: only navbar remains fixed */}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={enableScrollEffects ? { position: 'var(--header-inner-position)' } : undefined}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex justify-end flex-1 md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="hidden pointer-events-auto md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
  {/* Removed sticky-layout spacer; fixed header no longer needs it */}
    </>
  )
}
