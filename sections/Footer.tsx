import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Navigation, ArrowUp } from 'lucide-react';

// OTIMIZAÇÃO: Componente de Mapa isolado para não re-renderizar o footer inteiro
const GoogleMapEmbed = React.memo(() => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-[#fdfbf7] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl mb-16 group transform-gpu">
      <iframe
        title="Localização Clínica Dente Vida"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        style={{ border: 0, filter: 'grayscale(0.1)' }}
        // OTIMIZAÇÃO: loading='lazy' é mandatório para iframes pesados
        src="https://maps.google.com/maps?q=Cl%C3%ADnica%20Dente%20Vida%2C%20Av.%20Centen%C3%A1rio%2C%2049%2C%20Vit%C3%B3ria%20da%20Conquista&t=&z=17&ie=UTF8&iwloc=&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-500 group-hover:filter-none w-full h-full"
      ></iframe>
      
      {/* Custom Map Pin Overlay - Pointer events none para não bloquear o mapa */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-md border border-slate-100 pointer-events-none z-10">
          <div className="flex items-center text-xs font-bold text-teal-800 uppercase tracking-wide">
              <MapPin size={16} className="text-red-500 mr-2 animate-bounce" />
              Nossa Clínica
          </div>
      </div>

      {/* Button Overlay */}
      <div className="absolute bottom-5 right-5 z-10">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Clinica+Dente+Vida+Vitoria+da+Conquista" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-teal-600 text-white px-4 py-2 rounded-full font-bold shadow-xl flex items-center gap-2 text-sm border border-teal-500 ring-2 ring-white hover:bg-teal-700 transition-colors"
        >
          <Navigation size={16} />
          Abrir no GPS
        </a>
      </div>
    </div>
  );
});

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-soft-gradient text-slate-600 pt-20 pb-10 border-t border-teal-100 relative overflow-hidden">
      
      {/* Background Decorative Elements - OTIMIZADO: GPU */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* MAPA GOOGLE EMBED */}
        <div className="mb-8">
            <h3 className="text-center text-teal-900 font-bold text-2xl mb-8">Nossa Localização</h3>
            <GoogleMapEmbed />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
              <span className="text-2xl font-light text-slate-900 tracking-tight">Clinica</span>
              <img 
                src="https://i.ibb.co/Df65Y7RQ/logofundo.png" 
                alt="Dente Vida Logo" 
                width="28"
                height="28"
                loading="lazy"
                className="h-7 w-auto object-contain mix-blend-multiply"
              />
              <div className="text-2xl font-extrabold text-teal-700 tracking-tight">
                Dente<span className="text-teal-500">Vida</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">
              Mais que tratamentos odontológicos, construímos autoestima e felicidade.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dente.vida" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-white border border-teal-100 rounded-full text-teal-600 hover:bg-teal-50 hover:text-teal-800 transition-colors shadow-sm hover:shadow-md"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/clin.dentevida/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-white border border-teal-100 rounded-full text-teal-600 hover:bg-teal-50 hover:text-teal-800 transition-colors shadow-sm hover:shadow-md"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links - Hidden on Mobile */}
          <div className="hidden md:block">
            <h4 className="text-teal-900 font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-teal-600 transition-colors flex items-center gap-2">Início</a></li>
              <li><a href="#treatments" className="hover:text-teal-600 transition-colors flex items-center gap-2">Tratamentos</a></li>
              <li><a href="#testimonials" className="hover:text-teal-600 transition-colors flex items-center gap-2">Depoimentos</a></li>
              <li><a href="https://wa.link/5hltyy" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors flex items-center gap-2">Agendar Consulta</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-teal-900 font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>Av. Centenário, 49, Centro<br/>Vitória da Conquista - BA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>(77) 3084-2858</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-teal-900 font-bold mb-6 text-lg">Horário</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-teal-100 pb-2">
                <span>Segunda-feira</span>
                <span className="text-slate-900 font-medium">09:00 – 17:00</span>
              </li>
              <li className="flex justify-between border-b border-teal-100 pb-2">
                <span>Terça a Sexta</span>
                <span className="text-slate-900 font-medium">09:00 – 16:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sábado</span>
                <span className="text-slate-900 font-medium">08:00 – 12:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dente Vida Clínica Odontológica. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-teal-700 transition-colors font-medium group"
          >
            Voltar ao topo 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;