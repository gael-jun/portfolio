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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-3xl md:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
              {siteMetadata.authorHeadline}
            </h1>
            <p className="mt-6 text-base text-primaryText-600 dark:text-primaryText-400">
              {siteMetadata.authorAbout}
            </p>
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
          <div className="flex justify-center items-start md:-mt-1 lg:-mt-2">
            {/* Plain logo without frame */}
            <div className="flex flex-col items-center">
              <Image
                src={ensimagLogo}
                alt="ENSIMAG logo"
                className="h-40 w-auto md:h-48"
                priority
              />
              {/* Removed study level badge below the logo as requested */}
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
