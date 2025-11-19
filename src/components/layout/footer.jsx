import { RouterLink } from '../index'

const footerLinks = [
  { label: 'Community', path: '/community', external: false },
  { label: 'Affiliates', path: '/affiliate-program', external: false },
  { label: 'Support', path: 'https://help.skool.com/', external: true },
  { label: 'Careers', path: '/careers', external: false },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* First Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {footerLinks.map(({ label, path, external }) => {
              if (external) {
                return (
                  <a
                    key={label}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {label}
                  </a>
                )
              }
              return (
                <RouterLink
                  key={label}
                  to={path}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {label}
                </RouterLink>
              )
            })}
          </div>

          {/* Copyright with Website Builder Link */}
          <div className="text-sm text-gray-500">
            © {currentYear} Skool. All rights reserved.
            <a
              href="https://readdy.ai/?origin=logo"
              className="ml-2 text-gray-600 hover:text-gray-900"
            >
              Website Builder
            </a>
          </div>
        </div>

        {/* Second Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <RouterLink to="/">
              <span
                className="text-2xl font-bold mr-4"
                style={{
                  fontFamily: 'Pacifico, serif',
                  background: 'linear-gradient(45deg, rgb(86, 199, 218), rgb(252, 214, 11))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI Nexus
              </span>
            </RouterLink>
          </div>

          {/* Copyright and Powered by Readdy */}
          <div className="text-sm text-gray-600">
            © {currentYear} AI Nexus. All rights reserved. |{' '}
            <a
              href="https://readdy.ai/?origin=logo"
              className="text-primary hover:underline ml-1"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

