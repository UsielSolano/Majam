import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const linkClass = ({ isActive }) =>
    isActive ? 'navbar__link active' : 'navbar__link'

  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          MaJaM
        </NavLink>

        {/* NAV DESKTOP */}
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

        {/* ACCIONES: toggle de tema + hamburguesa */}
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

      {/* OVERLAY */}
      <div
        className={`navbar__overlay ${isOpen ? 'is-open' : ''}`}
        onClick={toggleMenu}
      />

      {/* NAV MÓVIL */}
      <nav className={`navbar__mobile ${isOpen ? 'is-open' : ''}`}>
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
    </header>
  )
}

export default Navbar
