import { Phone, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-12 border-t border-border/20">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="font-serif font-semibold text-lg tracking-widest uppercase text-foreground">
              MEGLIO &amp; CHEMEZ
            </p>
            <p className="text-xs text-muted-foreground tracking-widest mt-1">ABOGADOS PENALISTAS</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/meglioabogado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @meglioabogado
            </a>
            <a
              href="https://www.linkedin.com/in/gonzalo-meglio-b136781b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="tel:+543435032674" className="btn-cta-primary text-sm px-6 py-3 w-fit">
              <Phone className="w-4 h-4" />
              +54 343 503-2674
            </a>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <p className="text-xs text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            La información contenida en este sitio web es de carácter general e informativo.
            No constituye asesoramiento legal. Cada caso requiere evaluación profesional individualizada.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} MEGLIO & CHEMEZ ABOGADOS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/aviso-legal" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Aviso legal</a>
              <a href="/privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Política de privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
