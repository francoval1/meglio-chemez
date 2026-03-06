import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      {/* WhatsApp */}
      <a
        href="https://wa.me/543435032674"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3
                   bg-[#25D366] text-white font-medium text-sm
                   shadow-lg shadow-black/20
                   transition-all duration-300 ease-out
                   hover:bg-[#1ebe5d] hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>

      {/* Llamar */}
      <a
        href="tel:+543435032674"
        className="flex items-center gap-2 px-5 py-3
                   bg-petrol text-white font-medium text-sm
                   shadow-lg shadow-petrol/30
                   transition-all duration-300 ease-out
                   hover:bg-petrol-light hover:scale-105"
        aria-label="Llamar ahora"
      >
        <Phone className="w-4 h-4" />
        Llamá ahora
      </a>
    </div>
  );
};

export default FloatingCTA;
