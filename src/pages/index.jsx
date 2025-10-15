import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import siteMetadata from '@/data/siteMetadata'
import ensimagLogo from '@/images/ensimag-logo.png'

const profileSrc = '/images/profil1.jpg'


const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Main block: profile above text */}
          <div className="max-w-3xl md:col-span-3 order-1 md:order-none">
            <div className="flex justify-center md:justify-start">
              <Image
                src={profileSrc}
                alt="Profile photo"
                width={192}
                height={192}
                className="rounded-full object-cover h-32 w-32 md:h-40 md:w-40 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
              {siteMetadata.authorHeadline}
            </h1>
            <p className="mt-6 text-base text-primaryText-600 dark:text-primaryText-400">
              {siteMetadata.authorAbout}
            </p>
            {/* contact + location inline under intro */}
            {(siteMetadata.phoneNumber || siteMetadata.email || siteMetadata.location || siteMetadata.mobilityNote) && (
              <div className="mt-4 text-sm text-primaryText-600 dark:text-primaryText-400 space-y-1">
                {siteMetadata.phoneNumber && (
                  <div>
                    <span className="font-medium text-primaryText-700 dark:text-primaryText-300">Phone: </span>
                    <a
                      href={`tel:${siteMetadata.phoneNumber}`}
                      className="text-accent-600 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                    >
                      {siteMetadata.phoneNumber}
                    </a>
                  </div>
                )}
                {siteMetadata.email && (
                  <div>
                    <span className="font-medium text-primaryText-700 dark:text-primaryText-300">Email: </span>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="text-accent-600 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                )}
                {siteMetadata.location && (
                  <div>
                    <span className="font-medium text-primaryText-700 dark:text-primaryText-300">Location: </span>
                    <span>{siteMetadata.location}</span>
                  </div>
                )}
                {siteMetadata.mobilityNote && (
                  <div>
                    <span className="font-medium text-primaryText-700 dark:text-primaryText-300">Mobility: </span>
                    <span>{siteMetadata.mobilityNote}</span>
                  </div>
                )}
              </div>
            )}
            {/* div container for social links */}
            <div className="flex gap-6 mt-6">
              {siteMetadata.socials.x && (
                <SocialLink
                  href={siteMetadata.socials.x}
                  aria-label="Follow on X"
                  icon={XIcon}
                />
              )}
              {siteMetadata.socials.github && (
                <SocialLink
                  href={siteMetadata.socials.github}
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
              )}
              {siteMetadata.socials.linkedin && (
                <SocialLink
                  href={siteMetadata.socials.linkedin}
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              )}
              {siteMetadata.socials.instagram && (
                <SocialLink
                  href={siteMetadata.socials.instagram}
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
              )}
            </div>
          </div>
          {/* Right column: ENSIMAG logo */}
          <div className="order-2 md:order-none md:col-span-1 flex justify-center md:justify-end items-start mt-6 md:mt-40">
            <div className="flex flex-col items-center">
              <Image
                src={ensimagLogo}
                alt="ENSIMAG logo"
                className="h-28 w-auto md:h-36"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
      <DivideLine />
      <FeatureSection />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  )
}

export default Home
