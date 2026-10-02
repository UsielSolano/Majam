import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    isActive ? 'navbar__link active' : 'navbar__link'

  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          MaJaM
        </NavLink>

        <nav className="navbar__nav navbar__nav--desktop">
          <NavLink to="/" className={linkClass} end>
            Inicio
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            Somos MaJaM
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Proyectos
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />

          <button
            className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`navbar__overlay ${isOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
      />

      <nav className={`navbar__mobile ${isOpen ? 'is-open' : ''}`}>
        <NavLink to="/" className={linkClass} end onClick={closeMenu}>
          Inicio
        </NavLink>
        <NavLink to="/about" className={linkClass} onClick={closeMenu}>
          Somos MaJaM
        </NavLink>
        <NavLink to="/projects" className={linkClass} onClick={closeMenu}>
          Proyectos
        </NavLink>
        <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
