import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './sidebar'
import AdminHeader from './header'
import AdminFooter from './footer'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= 1024
  })

  return (
    <div className="flex min-h-screen bg-body">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onToggle={setSidebarOpen}
      />
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
        }`}
      >
        <AdminHeader onMenuClick={() => setSidebarOpen((state) => !state)} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminLayout

