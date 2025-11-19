import { FiBell, FiSearch, FiUser, FiMenu } from 'react-icons/fi'

const AdminHeader = ({ onMenuClick }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 min-h-[73px] md:min-h-[81px]">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4 h-full">
        <div className="flex flex-1 items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden rounded-full p-2 text-navText transition-colors hover:bg-border/30 hover:text-btnPrimary"
            aria-label="Menu"
          >
            <FiMenu className="text-lg" />
          </button>
          <div className="relative hidden md:block flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-price" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-border/40 bg-white px-10 py-2 text-sm text-navText placeholder:text-price focus:border-btnPrimary focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            className="relative rounded-full p-2 text-navText transition-colors hover:bg-border/30 hover:text-btnPrimary"
            aria-label="Notifications"
          >
            <FiBell className="text-lg" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-cartDot"></span>
          </button>

          <div className="flex items-center gap-2 md:gap-3 rounded-full bg-body px-3 md:px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-btnPrimary">
              <FiUser className="text-sm text-btnPrimaryText" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-navText">{user.name || 'Admin'}</p>
              <p className="text-xs text-price">{user.role || 'Admin'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader

