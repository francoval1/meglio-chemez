import { Phone, MessageCircle, MapPin, Mail, Clock, Star, Linkedin, Instagram } from "lucide-react";

const CONTACTO = {
  gonzalo: {
    nombre: "Dr. Gonzalo Meglio",
    tel: "+54 343 503-2674",
    telHref: "tel:+543435032674",
    waHref: "https://wa.me/543435032674",
    email: "megliogonzalo@gmail.com",
    instagram: "https://www.instagram.com/meglioabogado",
    linkedin: "https://www.linkedin.com/in/gonzalo-meglio-b136781b7",
    googleMaps: "https://maps.app.goo.gl/pcXqg84YQNZ9oyFL8",
  },
  naim: {
    nombre: "Dr. Naim Chemez",
    tel: "+54 343 450-6420",
    telHref: "tel:+543434506420",
    waHref: "https://wa.me/543434506420",
    email: "naimchemez17@gmail.com",
    instagram: null,
    linkedin: null,
    googleMaps: "https://maps.app.goo.gl/pJSkZmDHxwEKVeAq7",
  },
  estudio: {
    googleMaps: "https://maps.app.goo.gl/y92dGeJWxpWCFXdR7",
  },
};

const SectionContacto = () => {
  return (
    <section id="contacto" className="section-light section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="section-label text-petrol">Contacto</p>
          <h2 className="section-title text-light-foreground mb-4">
            Hablemos de tu caso
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-petrol" />
            <span className="text-lg font-medium text-light-foreground">
              Atención 24 hs
            </span>
          </div>
        </div>

        {/* Cards de contacto por socio */}
        <div className="grid md:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto">
          {[CONTACTO.gonzalo, CONTACTO.naim].map((socio, i) => (
            <div key={i} className="service-card-light flex flex-col gap-4">
              <p className="font-serif text-lg font-medium text-light-foreground">
                {socio.nombre}
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-petrol flex-shrink-0" />
                  <a href={socio.telHref} className="text-sm text-light-foreground hover:text-petrol transition-colors">
                    {socio.tel}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-petrol flex-shrink-0" />
                  <a href={`mailto:${socio.email}`} className="text-sm text-light-foreground hover:text-petrol transition-colors">
                    {socio.email}
                  </a>
                </div>
                {/* Redes sociales */}
                <div className="flex items-center gap-3">
                  {socio.instagram && (
                    <a href={socio.instagram} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-petrol transition-colors" aria-label="Instagram">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {socio.linkedin && (
                    <a href={socio.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-petrol transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  <a href={socio.googleMaps} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-petrol transition-colors flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Ver perfil Google
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href={socio.telHref} className="btn-cta-dark text-xs px-4 py-2 gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Llamar
                </a>
                <a href={socio.waHref} target="_blank" rel="noopener noreferrer"
                  className="btn-cta-secondary text-light-foreground border-light-foreground/30 hover:bg-light-foreground/5 text-xs px-4 py-2 gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="flex justify-center mb-14">
          <a
            href={CONTACTO.estudio.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[hsl(220,10%,85%)] bg-white hover:border-petrol/40 transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-sm font-medium text-light-foreground">
              Ver reseñas en Google
            </span>
          </a>
        </div>

        {/* Mapa */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-petrol" />
            <a
              href={CONTACTO.estudio.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-foreground hover:text-petrol transition-colors font-medium"
            >
              Victoria 3, Paraná, Entre Ríos
            </a>
          </div>
          <div className="w-full aspect-[16/7] overflow-hidden border border-[hsl(220,10%,85%)]">
            <iframe
              src="https://maps.google.com/maps?q=Victoria+3,+Parana,+Entre+Rios,+Argentina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación MEGLIO & CHEMEZ ABOGADOS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContacto;
