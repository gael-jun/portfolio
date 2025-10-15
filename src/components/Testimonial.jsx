import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const Testimonial = () => {
  return (
    <div className="pt-16 lg:py-24 ">
      <div className="pb-16 bg-fixed bg-center bg-cover bg-gradient-to-b from-gradientStart-500 to-gradientEnd-500 dark:from-gradientStart-700 dark:to-gradientEnd-900 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            {/* Removed mobile overlay that caused partial black background on small screens */}
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Image
                  className="object-cover object-top lg:object-center lg:h-full lg:w-full"
                  src={siteMetadata.testimonial.imgUrl}
                  alt="testimonials"
                  width={500}
                  height={500}
                  title={siteMetadata.testimonial.imageAttribution}
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="w-12 h-12 opacity-25 text-primaryText-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-primaryText-100">
                    {siteMetadata.testimonial.comment}
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-primaryText-100">
                    {siteMetadata.testimonial.author}
                  </p>
                  <p className="text-base font-medium text-primaryText-200">
                    {siteMetadata.testimonial.authorTitle}
                  </p>
                  {siteMetadata.testimonial.locationDate && (
                    <p className="mt-1 text-sm font-medium text-primaryText-300">
                      {siteMetadata.testimonial.locationDate}
                    </p>
                  )}
                </footer>
                <div className="mt-6">
                  <a
                    href="/pdf/20250310_Lettre_Recommandation_StageDevog_NDEBIA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                  >
                    Voir la lettre de recommandation (PDF)
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
