import { Link } from 'react-router-dom'
import home1 from '../../assets/images/home_1.png'
import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${home1})` }}
      >
        <div className="hero__overlay" />
        <div className="hero__container">
          <p className="hero__eyebrow">Estudio de arquitectura</p>
          <h1 className="hero__title">MaJaM</h1>
          <p className="hero__subtitle">
            Diseñamos espacios que cuentan historias.
          </p>
          <Link to="/projects" className="hero__cta">
            Ver proyectos
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="intro__container">
          <p className="intro__text">
            Somos un estudio dedicado a crear arquitectura sensible,
            funcional y atemporal. Cada proyecto nace del diálogo entre
            el lugar, quien lo habita y la materia.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services">
        <div className="services__container">
          <h2 className="section-title">Servicios</h2>
          <div className="services__grid">
            <article className="service">
              <span className="service__number">01</span>
              <h3 className="service__title">Diseño Arquitectónico</h3>
              <p className="service__desc">
                Proyectos residenciales, comerciales y de interiorismo,
                desde la conceptualización hasta la obra.
              </p>
            </article>
            <article className="service">
              <span className="service__number">02</span>
              <h3 className="service__title">Interiorismo</h3>
              <p className="service__desc">
                Espacios pensados en detalle: materiales, luz, textura
                y la experiencia de habitarlos.
              </p>
            </article>
            <article className="service">
              <span className="service__number">03</span>
              <h3 className="service__title">Gestión Gubernamental</h3>
              <p className="service__desc">
                Trámites, licencias y vinculación con dependencias para
                proyectos públicos, institucionales y de uso mixto.
              </p>
            </article>
            <article className="service">
              <span className="service__number">04</span>
              <h3 className="service__title">Consultoría</h3>
              <p className="service__desc">
                Asesoría en proyectos existentes: remodelaciones,
                ampliaciones y optimización de espacios.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROYECTOS PREVIEW */}
      <section className="projects-preview">
        <div className="projects-preview__container">
          <div className="projects-preview__header">
            <h2 className="section-title">Proyectos recientes</h2>
            <Link to="/projects" className="projects-preview__link">
              Ver todos →
            </Link>
          </div>
          <div className="projects-preview__grid">
            <div className="project-card">
              <div className="project-card__image" />
              <p className="project-card__name">Casa Xalapa</p>
              <p className="project-card__meta">Residencial · 2024</p>
            </div>
            <div className="project-card">
              <div className="project-card__image" />
              <p className="project-card__name">Estudio Norte</p>
              <p className="project-card__meta">Comercial · 2024</p>
            </div>
            <div className="project-card">
              <div className="project-card__image" />
              <p className="project-card__name">Loft Centro</p>
              <p className="project-card__meta">Interiorismo · 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">¿Tienes un proyecto en mente?</h2>
          <p className="cta__text">
            Conversemos. Nos encanta escuchar nuevas ideas.
          </p>
          <Link to="/contact" className="cta__button">
            Contáctanos
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home
