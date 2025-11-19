import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col text-primaryPalette-200 bg-white">
      <Header />
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

