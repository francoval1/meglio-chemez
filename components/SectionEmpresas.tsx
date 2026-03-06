import { ShieldAlert, Search, FileWarning, Building2, Scale } from "lucide-react";

const serviciosPenalEconomico = [
  {
    icon: ShieldAlert,
    title: "Compliance Penal",
    items: [
      "Diseño e implementación de programas de integridad",
      "Evaluación de riesgos penales corporativos",
      "Canales de denuncia y gestión de incidentes",
      "Protocolos de conducta y confidencialidad",
      "Capacitación a equipos y directorios",
    ],
  },
  {
    icon: Search,
    title: "Prevención de Lavado de Activos (AML)",
    items: [
      "Asesoramiento a sujetos obligados (Ley 25.246)",
      "Políticas KYC / Due Diligence",
      "Reporte de operaciones sospechosas",
      "Auditorías de cumplimiento AML",
      "Defensa ante la UIF",
    ],
  },
  {
    icon: FileWarning,
    title: "Delitos Económicos y Empresariales",
    items: [
      "Defraudación tributaria y evasión",
      "Infracciones cambiarias y aduaneras",
      "Cohecho, coimas y enriquecimiento ilícito",
      "Fraude empresarial y societario",
      "Defensa de directivos y personas jurídicas",
    ],
  },
  {
    icon: Building2,
    title: "Asesoramiento Preventivo",
    items: [
      "Análisis de exposición penal del negocio",
      "Reorganización legal preventiva",
      "Contratos con cláusulas de compliance",
      "Acompañamiento ante inspecciones y auditorías",
    ],
  },
  {
    icon: Scale,
    title: "Responsabilidad Penal Empresaria",
    items: [
      "Ley 27.401 — Responsabilidad penal de personas jurídicas",
      "Estrategia de colaboración eficaz",
      "Defensa en investigaciones corporativas",
      "Representación ante organismos reguladores",
    ],
  },
];

const SectionEmpresas = () => {
  return (
    <section id="empresas" className="section-light section-spacing">
      <div className="container-main">
        <div className="mb-16">
          <p className="section-label text-petrol">Derecho penal económico y empresarial</p>
          <h2 className="section-title text-light-foreground">
            Compliance, AML y Defensa Corporativa
          </h2>
          <p className="text-gray-medium max-w-2xl leading-relaxed mt-4">
            Asesoramos a pymes, empresas, directivos y sujetos obligados en la prevención
            y defensa frente a riesgos penales económicos. Combinamos experiencia
            en litigio penal con formación especializada en compliance y antilavado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosPenalEconomico.map((servicio, index) => (
            <div key={index} className="service-card-light">
              <servicio.icon className="w-8 h-8 text-petrol mb-6" />
              <h3 className="font-serif text-xl font-medium text-light-foreground mb-4">
                {servicio.title}
              </h3>
              <ul className="space-y-2">
                {servicio.items.map((item, i) => (
                  <li key={i} className="text-gray-medium text-sm flex items-start gap-2">
                    <span className="w-1 h-1 bg-petrol rounded-full mt-[7px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-gray-medium max-w-2xl">
          Actuamos como asesores externos de compliance o como defensores en procesos
          penales económicos, según las necesidades del cliente. Atención a empresas
          de todos los tamaños, con especial experiencia en instituciones financieras,
          constructoras y comercio exterior.
        </p>
      </div>
    </section>
  );
};

export default SectionEmpresas;
