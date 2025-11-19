import { useState, useEffect } from 'react'
import { FiHome, FiUsers, FiSettings, FiLogOut, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { RouterLink, CommonList, useRouter, useActiveLink } from '../../index'

const menuItems = [
  { label: 'Home', path: '/home', icon: FiHome },
  { label: 'Learning', path: '/learning', icon: FiUsers },
  { label: 'Settings', path: '/settings', icon: FiSettings },
]

const AdminSidebar = ({ isOpen, onClose, onToggle }) => {
  const [openMenus, setOpenMenus] = useState({})
  const router = useRouter()
  const expanded = isOpen

  useEffect(() => {
    const defaults = {}
    menuItems.forEach((item) => {
      if (Array.isArray(item.children) && item.children.some((child) => {
        // Use the same logic as useActiveLink for consistency
        const pathname = router.pathname.replace(/\/$/, '') || '/'
        const childPath = child.path.replace(/\/$/, '') || '/'
        return pathname.includes(childPath)
      })) {
        defaults[item.label] = true
      }
    })
    setOpenMenus((prev) => ({ ...prev, ...defaults }))
  }, [router.pathname])

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('role')
    localStorage.removeItem('user')
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('roleChange'))
    }
    window.location.href = '/login'
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`group fixed left-0 top-0 z-50 flex h-screen flex-col bg-white/95 transition-all duration-300 ${
          expanded
            ? 'w-64 translate-x-0 shadow-[4px_0_30px_rgba(15,23,42,0.08)]'
            : 'w-16 -translate-x-full lg:translate-x-0 lg:shadow-[4px_0_30px_rgba(15,23,42,0.08)]'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className={`flex items-center justify-between ${expanded ? 'pl-4 py-4  md:min-h-[81px]' : 'pl-2 py-0  md:min-h-[73px]' } lg:justify-start min-h-[73px]`}>
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-btnPrimary shadow-inner shadow-white/40">
                <span className="text-lg font-bold text-btnPrimaryText">A</span>
              </div>
              <div className={`transition-all duration-200 ${expanded ? 'block w-auto' : 'hidden w-0'}`}>
                <h2 className="text-sm font-bold uppercase tracking-[0.35em] text-navText">ADMIN PANEL</h2>
                <p className="text-xs text-price">Gudworld</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden rounded-full p-2 text-navText transition hover:bg-border/30"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          <nav className={`flex flex-col space-y-2 py-5 overflow-y-auto ${expanded ? 'pr-4' : 'px-2 py-2'}`}>
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = useActiveLink(item.path, true)
              const hasChildren = Array.isArray(item.children) && item.children.length > 0
              // Check all children for active state
              const activeChild = hasChildren && item.children.some((child) => {
                const childActive = useActiveLink(child.path, true)
                return childActive
              })
              const menuOpen = openMenus[item.label] ?? activeChild
              const showChildren = expanded && hasChildren && menuOpen
              const showPopover = !expanded && hasChildren

              return (
                <div key={item.path}>
                  <RouterLink
                    to={item.path}
                    onClick={(event) => {
                      if (typeof window === 'undefined') return
                      if (hasChildren) {
                        if (expanded) {
                          event.preventDefault()
                          setOpenMenus((prev) => ({ ...prev, [item.label]: !menuOpen }))
                          return
                        }
                      }
                      if (window.innerWidth < 1024 && !hasChildren) {
                        onClose()
                      }
                    }}
                    className={`flex items-center gap-3 rounded-[8px] ${
                      expanded ? 'pl-4 px-1 py-3' : 'pl-1 px-1 pt-2'
                    } text-sm font-semibold transition-all ${
                      isActive || activeChild
                        ? 'bg-lightBg text-btnPrimary shadow-lg shadow-btnPrimary/30'
                        : 'text-navText hover:bg-border/40 hover:text-btnPrimary'
                    }`}
                  >
                    <div className={`flex flex-col items-center justify-center ${expanded ? '' : 'w-full'}`}>
                      <Icon
                        className={`transition-all ${
                          expanded ? 'text-[18px]' : 'text-2xl mx-auto'
                        }`}
                      />
                      <p className={`text-[8px] ${expanded ? 'hidden' : ''}`}>{item.label}</p>
                    </div>
                    <span
                      className={`whitespace-nowrap text-sm transition-all duration-200 ${
                        expanded ? 'translate-x-0 block' : 'hidden -translate-x-2 w-0 overflow-hidden'
                      }`}
                    >
                      {item.label}
                    </span>
                  </RouterLink>

                  {showChildren && (
                    <div className="mt-1 space-y-1 pl-12 text-xs font-medium text-navText/80 relative">
                      <span className="pointer-events-none absolute left-4 top-1 bottom-1 w-px bg-border/50" />
                      <CommonList
                        items={item.children}
                        activePath={router.pathname}
                        onNavigate={(path) => router.push(path)}
                      />
                    </div>
                  )}

                  {showPopover && (
                    <div className="group/menu relative">
                      <div className="pointer-events-none absolute left-full top-1/2 hidden -translate-y-1/2 translate-x-3 flex-col rounded-2xl border border-border/40 bg-white/95 px-4 py-3 text-sm font-semibold text-navText shadow-xl shadow-black/10 group-hover/menu:flex">
                        {item.children.map((child) => {
                          const childActive = useActiveLink(child.path, true)
                          return (
                            <RouterLink
                              key={child.path}
                              to={child.path}
                              className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs transition ${
                                childActive ? 'bg-lightBg text-btnPrimary' : 'hover:bg-border/30'
                              }`}
                            >
                              {child.label}
                            </RouterLink>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className={`mt-auto ${expanded ? 'p-4' : 'p-0 pb-4 flex justify-center'}`}>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-2xl bg-body/70 px-4 py-3 text-sm font-semibold text-navText transition hover:bg-body/90 hover:text-btnPrimary"
            >
              <FiLogOut className="text-lg" />
              <span className={`${expanded ? 'block' : 'hidden'}`}>Logout</span>
            </button>
          </div>
        </div>
      </aside>
      <button
        type="button"
        className={`hidden lg:flex fixed top-5 z-50 h-6 w-6 items-center justify-center rounded-full border border-custombg bg-white text-navText transition-all duration-300 ${
          isOpen ? 'left-[15rem]' : 'left-14 shadow-[0_10px_20px_rgba(15,23,42,0.12)]'
        }`}
        onClick={() => onToggle((prev) => !prev)}
        aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isOpen ? <FiChevronLeft className="text-lg" /> : <FiChevronRight className="text-lg" />}
      </button>
    </>
  )
}

export default AdminSidebar

