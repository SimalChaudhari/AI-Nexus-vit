const CommonList = ({ items = [], activePath = '', onNavigate, accent = '#c49a5f' }) => {
  if (!items.length) return null

  return (
    <ul className="relative space-y-1 pl-7 text-sm font-semibold text-navText/80">
      <span
        className="pointer-events-none absolute left-3 top-1 bottom-1 w-[2px] rounded-full"
        style={{ backgroundColor: accent, opacity: 0.35 }}
      />
      {items.map(({ label, path }) => {
        const isActive = activePath === path || activePath.startsWith(path)
        return (
          <li key={path} className="relative">
            <span
              className="pointer-events-none absolute left-[-18px] top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: accent, opacity: 0.4 }}
            />
            <button
              type="button"
              onClick={() => onNavigate?.(path)}
              className={`flex w-full items-center rounded-xl px-3 py-2 text-left transition ${
                isActive
                  ? 'bg-lightBg text-btnPrimary shadow-[0_6px_20px_rgba(196,154,95,0.25)]'
                  : 'hover:bg-border/30'
              }`}
            >
              {label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default CommonList

