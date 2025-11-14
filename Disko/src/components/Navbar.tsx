import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/discover', label: 'Découvrir' },
    { to: '/playlists', label: 'Playlists' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🎵 VinylWave</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}