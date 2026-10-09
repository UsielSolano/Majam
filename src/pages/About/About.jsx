import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about">

      {/* HERO EDITORIAL */}
      <section className="about-hero">
        <div className="about-hero__container">
          <p className="about-hero__eyebrow">— Somos MaJaM</p>
          <h1 className="about-hero__title">
            Arquitectura que <em>escucha</em> antes de construir.
          </h1>
          <p className="about-hero__intro">
            Somos un estudio formado por dos arquitectas convencidas de que
            el buen diseño no se impone: se descubre. Trabajamos desde la
            observación, el diálogo y el respeto por lo que ya existe.
          </p>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="manifesto">
        <div className="manifesto__container">
          <p className="manifesto__line">
           
            Cada espacio tiene una historia que merece ser contada.
          </p>
          <p className="manifesto__line">
           
            Diseñamos para las personas, no para las revistas.
          </p>
          <p className="manifesto__line">
           
            La belleza nace cuando la función y la emoción se encuentran.
          </p>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="philosophy">
        <div className="philosophy__container">
          <h2 className="about-section-title">Nuestra filosofía</h2>
          <div className="philosophy__grid">
            <p className="philosophy__statement">
              No diseñamos edificios.<br />
              Diseñamos la forma en que la gente vive dentro de ellos.
            </p>
            <div className="philosophy__body">
              <p>
                En MaJaM entendemos la arquitectura como un acto de traducción:
                escuchamos lo que el cliente imagina, lo que el terreno permite
                y lo que el presupuesto exige, y lo convertimos en espacios
                que se sienten inevitables.
              </p>
              <p>
                Trabajamos con materiales honestos, luz natural y proporciones
                cuidadas. Creemos que un buen proyecto se reconoce no por lo
                que agrega, sino por lo que sabe dejar fuera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="pillars">
        <div className="pillars__container">
          <h2 className="about-section-title">Los pilares de MaJaM</h2>
          <div className="pillars__grid">
            <div className="pillar">
              
              <h3 className="pillar__title">Elegancia</h3>
              <p className="pillar__desc">
                No buscamos lo llamativo, sino lo atemporal. La elegancia,
                para nosotras, es saber cuándo parar.
              </p>
            </div>
            <div className="pillar">
              
              <h3 className="pillar__title">Talento</h3>
              <p className="pillar__desc">
                Dos miradas que se complementan: una en el detalle, otra
                en la ejecución. Juntas cubren todo el proyecto.
              </p>
            </div>
            <div className="pillar">
              
              <h3 className="pillar__title">Disciplina</h3>
              <p className="pillar__desc">
                Cumplimos lo que prometemos: tiempos, presupuestos y
                calidad. Sin sorpresas, sin excusas.
              </p>
            </div>
            <div className="pillar">
              
              <h3 className="pillar__title">Calidad</h3>
              <p className="pillar__desc">
                Cuidamos cada decisión, del concepto a la última junta.
                Lo que entregamos habla por nosotras.
              </p>
            </div>
            <div className="pillar">
              
              <h3 className="pillar__title">Sustentabilidad</h3>
              <p className="pillar__desc">
                Diseñamos pensando en el mañana: materiales locales, bajo
                impacto, luz natural y consumo responsable. La mejor obra
                es la que respeta su entorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="process">
        <div className="process__container">
          <h2 className="about-section-title">Cómo trabajamos</h2>
          <div className="process__grid">
            <div className="process-step">
             
              <h4>Escuchar</h4>
              <p>
                Antes de dibujar una línea, entendemos a quién vamos a
                diseñar: sus rutinas, sus sueños y sus límites.
              </p>
            </div>
            <div className="process-step">
              
              <h4>Conceptualizar</h4>
              <p>
                Traducimos todo eso en una idea clara. Un concepto que
                guía cada decisión posterior, del material al mobiliario.
              </p>
            </div>
            <div className="process-step">
              
              <h4>Detallar</h4>
              <p>
                La belleza vive en los detalles. Documentamos cada
                encuentro, cada junta, cada sombra.
              </p>
            </div>
            <div className="process-step">
             
              <h4>Acompañar</h4>
              <p>
                No desaparecemos al entregar los planos. Estamos en obra,
                resolviendo, ajustando y cuidando la visión original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="values">
        <div className="values__container">
          <h2 className="about-section-title">Lo que nos mueve</h2>
          <div className="values__grid">
            <div className="value">
              <span className="value__symbol">◇</span>
              <h4 className="value__title">Honestidad material</h4>
              <p className="value__desc">
                Trabajamos con lo que hay. Sin disfraces, sin excesos.
              </p>
            </div>
            <div className="value">
              <span className="value__symbol">◈</span>
              <h4 className="value__title">Escala humana</h4>
              <p className="value__desc">
                Espacios que se sienten bien antes de verse bien.
              </p>
            </div>
            <div className="value">
              <span className="value__symbol">◇</span>
              <h4 className="value__title">Luz natural</h4>
              <p className="value__desc">
                Nuestra materia prima favorita. Gratis y generosa.
              </p>
            </div>
            <div className="value">
              <span className="value__symbol">◈</span>
              <h4 className="value__title">Trabajo en equipo</h4>
              <p className="value__desc">
                Con clientes, con constructores, con el lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta__container">
          <h2 className="about-cta__title">
            ¿Hacemos algo juntos?
          </h2>
          <Link to="/contact" className="about-cta__button">
            Hablemos
          </Link>
        </div>
      </section>

    </div>
  )
}

export default About
