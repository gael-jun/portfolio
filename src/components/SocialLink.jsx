import Link from 'next/link'

const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <Link className="group -m-1 p-1 inline-flex items-center justify-center rounded-full transition-transform transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 shadow-lg hover:shadow-xl" {...props}>
      <Icon className="h-6 w-6 fill-primaryText-500 transition-colors duration-300 group-hover:fill-accent-600 dark:fill-primaryText-400 dark:group-hover:fill-accent-400" />
    </Link>
  )
}

export default SocialLink