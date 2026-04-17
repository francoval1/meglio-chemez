import { Phone, MessageCircle } from "lucide-react";
import heroSocios from "@/assets/hero-socios.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <img
        src={heroSocios}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,14%,7%)]/92 via-[hsl(220,14%,9%)]/80 to-[hsl(220,14%,9%)]/50" />
      <div className="container-main relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6 text-white">
            Abogados Penalistas
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-2">
            Atencion 24 hs. Actuacion en Entre Rios, Santa Fe y Justicia Federal.
          </p>
          <p className="text-sm text-white/45 mb-10">
            Parana, Entre Rios - Matricula Federal y Provincial
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+543435032674" className="btn-cta-primary">
              <Phone className="w-5 h-5" />
              Llama ahora
            </a>
            <a href="https://wa.me/543435032674" target="_blank" rel="noopener noreferrer" className="btn-cta-secondary">
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
