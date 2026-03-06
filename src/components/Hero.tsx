import { Phone, MessageCircle } from "lucide-react";
import heroSocios from "@/assets/hero-socios.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Foto de socios como fondo */}
      <img
        src={heroSocios}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 15%" }}
      />

      {/* Overlay: gradiente más oscuro arriba para legibilidad del header, más suave abajo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,14%,7%)]/92 via-[hsl(220,14%,9%)]/80 to-[hsl(220,14%,9%)]/50" />

      {/* Contenido */}
      <div className="container-main relative z-10">
        <div className="max-w-3xl">

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6 text-white">
            Defensa penal y asesoramiento legal para empresas
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-2">
            Atención 24 hs. Actuación en Entre Ríos, Santa Fe y Justicia Federal.
          </p>

          {/* Ubicación */}
          <p className="text-sm text-white/45 mb-10">
            Paraná, Entre Ríos · Matrícula Federal y Provincial
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+543435032674" className="btn-cta-primary">
              <Phone className="w-5 h-5" />
              Llamá ahora
            </a>
            <a
              href="https://wa.me/543435032674"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
