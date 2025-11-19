import { useState, useEffect } from 'react'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { CommonGradientButton, RouterLink, useRouter, useActiveLink } from '../index'

const navLinks = [
  { label: 'Communities', path: '/communities' },
  { label: 'Learning', path: '/learning' },
  { label: 'Workflows', path: '/workflows' },
]

const Header = () => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <RouterLink to="/" className="flex items-center">
                <span
                  className="text-2xl font-bold"
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

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ label, path }) => {
                const isActive = useActiveLink(path, true)
                return (
                  <RouterLink
                    key={label}
                    to={path}
                    className={`font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {label}
                  </RouterLink>
                )
              })}
            </nav>

            {/* Search Bar - Desktop (lg and above) */}
            <div className="hidden lg:block flex-1 max-w-lg mx-8">
              <form className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400 text-lg" size={18} />
                  </div>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for anything"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </form>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center">
              {/* Log In Button - Desktop */}
              <CommonGradientButton
                onClick={() => router.push('/login')}
                size="sm"
                className="hidden md:flex"
              >
                Log In
              </CommonGradientButton>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex-shrink-0 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
                aria-label="Menu"
              >
                <FiMenu className="text-xl" />
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile (below main row) */}
          <div className="lg:hidden pb-4">
            <form className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400 text-lg" size={18} />
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search for anything"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:hidden'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <RouterLink to="/" onClick={() => setMobileMenuOpen(false)}>
              <span
                className="text-xl font-bold"
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto">
            {navLinks.map(({ label, path }) => {
              const isActive = useActiveLink(path, true)
              return (
                <RouterLink
                  key={label}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{label}</span>
                </RouterLink>
              )
            })}
          </nav>

          <div className="border-t border-gray-200 p-4">
            <CommonGradientButton
              onClick={() => {
                router.push('/login')
                setMobileMenuOpen(false)
              }}
              size="sm"
              fullWidth
            >
              Log In
            </CommonGradientButton>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Header

