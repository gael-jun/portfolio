import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import Preloader from '@/components/Preloader'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <Preloader />
      <div className="fixed flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-transparent ring-1 ring-transparent dark:bg-transparent dark:ring-transparent" />
        </div>
      </div>
      <div className="flex flex-col justify-between min-h-screen pt-24">
        <Header />

        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}
