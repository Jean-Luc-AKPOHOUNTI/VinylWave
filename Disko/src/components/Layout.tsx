import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#1a1a1a' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}