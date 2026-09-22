
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          MaJaM
        </NavLink>

        <nav className="navbar__nav">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}
          >
            Somos MaJaM
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
