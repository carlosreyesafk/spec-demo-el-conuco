import "./globals.css";

const PHONE_DISPLAY = "(809) 686-0129";
const PHONE_TEL = "tel:+18096860129";
const WHATSAPP = "https://wa.me/18096860129";
const EMAIL = "elconuco@elconuco.com.do";
const ADDRESS =
  "Calle Casimiro de Moya No. 152, Gazcue, Santo Domingo, República Dominicana";
const HOURS = "Lunes a domingo · 11:30 a. m. – 12:00 a. m.";
const MAP_EMBED =
  "https://www.google.com/maps?q=El+Conuco+Restaurante,+Calle+Casimiro+de+Moya+152,+Gazcue,+Santo+Domingo&output=embed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
];

const ESPECIALIDADES = [
  {
    icon: "🍲",
    title: "Cocina criolla",
    text: "El verdadero sabor criollo dominicano: platos típicos con sazón de toda la vida.",
  },
  {
    icon: "🍽️",
    title: "Buffet dominical",
    text: "Todos los domingos, un buffet con lo mejor de la gastronomía dominicana. Consulta el menú del día por WhatsApp.",
  },
  {
    icon: "🥘",
    title: "Tradición desde 1991",
    text: "Más de 30 años sirviendo a los dominicanos: un ícono de Gazcue y parte de un grupo restaurantero.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Ideal en familia",
    text: "Un ambiente acogedor para almorzar y cenar en familia, con amigos o en grupo.",
  },
  {
    icon: "🎉",
    title: "Eventos y celebraciones",
    text: "Celebra cumpleaños, aniversarios y actividades corporativas con nosotros. Escríbenos y coordinamos tu actividad.",
  },
  {
    icon: "📍",
    title: "En el corazón de Gazcue",
    text: "Calle Casimiro de Moya No. 152: fácil de llegar, cerca de todo en Santo Domingo.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">🍲</span>
            <span className="brand-name">
              El Conuco
              <small>Comida criolla dominicana</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#especialidades">Especialidades</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#eventos">Eventos</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a
              className="btn btn-primary btn-sm"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">
                🍲 Comida criolla en Gazcue, Santo Domingo
              </span>
              <h1>
                El verdadero <span>sabor criollo</span>
              </h1>
              <p className="lead">
                Restaurante de comida criolla dominicana en la Calle Casimiro
                de Moya No. 152, Gazcue. Más de 30 años de tradición sirviendo
                el sabor de nuestra tierra.
              </p>
              <div className="hero-ctas">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 Reservar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 (809) 686-0129
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Calle Casimiro de Moya No. 152</strong>
                  Gazcue, Santo Domingo
                </div>
                <div>
                  <strong>🕘 {HOURS}</strong>
                  Abierto todos los días
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Se te antoja un buen criollo?</h2>
              <p>
                Escríbenos por WhatsApp y reserva tu mesa: te atendemos con la
                calidez de siempre.
              </p>
              <ul className="hours-list">
                <li>
                  <span>Lunes – domingo</span>
                  <span>11:30 a. m. – 12:00 a. m.</span>
                </li>
                <li>
                  <span>Buffet dominical</span>
                  <span>Consulta el menú por WhatsApp</span>
                </li>
              </ul>
              <a
                className="btn btn-primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Reservar mi mesa
              </a>
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section id="especialidades" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestras especialidades</span>
              <h2>La sazón de siempre, en su punto</h2>
              <p>
                Cocina criolla dominicana con más de tres décadas de historia.
              </p>
            </div>
            <div className="services-grid">
              {ESPECIALIDADES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Tradición criolla desde 1991</h2>
              <p>
                El Conuco es un restaurante de comida criolla dominicana
                ubicado en la Calle Casimiro de Moya No. 152, en el sector
                Gazcue de Santo Domingo.
              </p>
              <p>
                Con más de 30 años sirviendo a los dominicanos y parte de un
                grupo restaurantero, es un punto de encuentro donde el sabor
                de nuestra tierra se sirve todos los días.
              </p>
              <ul className="about-points">
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Más de 30 años de historia:</strong> un ícono de
                    la gastronomía criolla en Gazcue.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Buffet dominical:</strong> todos los domingos, lo
                    mejor de la cocina dominicana.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Reserva por WhatsApp:</strong> agenda tu mesa con
                    un mensaje al (809) 686-0129.
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-photo">
              <img
                src={ABOUT_IMG}
                alt="Plato de comida criolla en El Conuco"
                loading="lazy"
              />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img
                    key={g}
                    src={g}
                    alt="El Conuco — galería"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EVENTOS */}
        <section id="eventos" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Eventos y celebraciones</span>
              <h2>Celebra con nosotros</h2>
              <p>
                Cumpleaños, aniversarios, actividades familiares y encuentros
                corporativos: escríbenos y coordinamos tu actividad con el
                sabor criollo de siempre.
              </p>
            </div>
            <div
              className="services-grid"
              style={{ gridTemplateColumns: "1fr", maxWidth: "640px", margin: "0 auto" }}
            >
              <article className="service-card" style={{ textAlign: "center" }}>
                <div
                  className="service-icon"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  🎉
                </div>
                <h3>Tu celebración, nuestra casa</h3>
                <p style={{ marginBottom: "1.4rem" }}>
                  Contáctanos por WhatsApp al (809) 686-0129 o escríbenos a{" "}
                  {EMAIL} y te ayudamos a organizar tu evento.
                </p>
                <a
                  className="btn btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  📲 Coordinar mi evento
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>{HOURS}</p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en la Calle Casimiro de Moya No. 152, Gazcue, Santo
                    Domingo. Abre el mapa para ver la ruta desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — El Conuco"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Reserva hoy mismo</h2>
              <p>
                Escríbenos por WhatsApp, llámanos o envíanos un correo: te
                atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a
                className="contact-card"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <div className="label">WhatsApp</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Reserva tu mesa aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Llámanos →</div>
              </a>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <div className="label">Correo</div>
                <div
                  className="value"
                  style={{ fontSize: "0.95rem", wordBreak: "break-all" }}
                >
                  {EMAIL}
                </div>
                <div className="hint">Escríbenos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>El Conuco</strong>
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY}
            </div>
            <div>
              <strong>Horario</strong>
              {HOURS}
              <br />
              <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>
                {EMAIL}
              </a>
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por Chachi.
            La información mostrada corresponde a los datos públicos del
            negocio y puede ajustarse a su oferta real.
          </p>
        </div>
      </footer>
    </>
  );
}
