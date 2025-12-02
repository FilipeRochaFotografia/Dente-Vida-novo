
import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Team from './sections/Team';
import SocialProof from './sections/SocialProof';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Altura do header (h-20 = 5rem = 80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-1.5 md:gap-2.5 cursor-pointer"
            onClick={(e) => handleScroll(e, 'home')}
          >
            <span className="text-lg md:text-2xl font-light text-slate-900 tracking-tight">Clinica</span>
            <img 
              src="https://i.ibb.co/Df65Y7RQ/logofundo.png" 
              alt="Dente Vida Logo" 
              className="h-5 md:h-7 w-auto object-contain mix-blend-multiply"
            />
            <div className="text-lg md:text-2xl font-extrabold text-teal-700 tracking-tight">
              Dente<span className="text-teal-500">Vida</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-lg">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Início
            </a>
            <a 
              href="#treatments" 
              onClick={(e) => handleScroll(e, 'treatments')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Tratamentos
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => handleScroll(e, 'testimonials')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleScroll(e, 'faq')}
              className="hover:text-teal-600 transition-colors cursor-pointer"
            >
              Dúvidas
            </a>
          </div>

          <a 
            href="https://wa.link/5hltyy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-3 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Features />
      <Team />
      <SocialProof />
      <FAQ />
      <Footer />

    </main>
  );
}

export default App;