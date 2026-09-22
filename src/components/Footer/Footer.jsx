import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {new Date().getFullYear()} MaJaM Arquitectas</p>
        <p>Diseño · Arquitectura · Espacio</p>
      </div>
    </footer>
  )
}

export default Footer
