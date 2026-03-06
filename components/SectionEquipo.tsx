import naimChemez from "@/assets/naim-chemez-new.jpg";
import gonzaloMeglio from "@/assets/gonzalo-meglio-new.jpg";

const socios = [
  {
    nombre: "Dr. Naim Chemez",
    foto: naimChemez,
    titulo: "Abogado — Pontificia Universidad Católica Argentina",
    especializacion: "Especializando en Derecho Penal · UCA Sede Rosario",
    linkedin: null,
  },
  {
    nombre: "Dr. Gonzalo Meglio",
    foto: gonzaloMeglio,
    titulo: "Abogado — Universidad Nacional del Litoral",
    especializacion: "Magíster en Derecho Penal · Universidad Autónoma de Madrid",
    linkedin: "https://www.linkedin.com/in/gonzalo-meglio-b136781b7",
  },
];

const SectionEquipo = () => {
  return (
    <section id="equipo" className="section-dark section-spacing">
      <div className="container-main">

        <div className="mb-16">
          <p className="section-label">El estudio</p>
          <h2 className="section-title">Derecho Penal y de la Empresa</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Nos dedicamos exclusivamente al derecho penal y al derecho penal económico.
            Esa concentración es lo que permite el nivel técnico que cada caso exige.
            Cada cliente trata directamente con los socios del estudio, desde la primera
            consulta hasta el cierre del proceso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 mb-16">
          {socios.map((socio, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={socio.foto}
                  alt={socio.nombre}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-2">
                {socio.nombre}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">{socio.titulo}</p>
              <p className="text-primary text-sm font-medium mb-3">{socio.especializacion}</p>
              {socio.linkedin && (
                <a
                  href={socio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          Actuamos en toda la provincia de Entre Ríos, Santa Fe y ante la Justicia Federal,
          con disponibilidad las 24 horas para situaciones urgentes.
        </p>

      </div>
    </section>
  );
};

export default SectionEquipo;
