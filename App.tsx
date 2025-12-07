import React, { Suspense, lazy } from 'react';
import Hero from './sections/Hero';

// OTIMIZAÇÃO: Lazy Loading
// Carrega as seções pesadas apenas quando necessário, acelerando o carregamento inicial
const Features = lazy(() => import('./sections/Features'));
const Team = lazy(() => import('./sections/Team'));
const SocialProof = lazy(() => import('./sections/SocialProof'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Footer = lazy(() => import('./sections/Footer'));

// Componente de carregamento leve para evitar "layout shift" brusco
const SectionLoader = () => <div className="w-full h-32 bg-slate-50" />;

function App() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
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
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-1.5 md:gap-2.5 cursor-pointer group"
            onClick={(e) => handleScroll(e, 'home')}
          >
            <span className="text-lg md:text-2xl font-light text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">Clinica</span>
            
            {/* OTIMIZAÇÃO: Width/Height definidos para evitar CLS (Layout Shift) */}
            <img 
              src="https://i.ibb.co/Df65Y7RQ/logofundo.png" 
              alt="Dente Vida Logo" 
              width="28"
              height="28"
              className="h-5 md:h-7 w-auto object-contain mix-blend-multiply"
            />
            
            <div className="text-lg md:text-2xl font-extrabold text-teal-700 tracking-tight">
              Dente<span className="text-teal-500">Vida</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-lg">
            {[
              { label: 'Início', id: 'home' },
              { label: 'Tratamentos', id: 'treatments' },
              { label: 'Depoimentos', id: 'testimonials' },
              { label: 'Dúvidas', id: 'faq' }
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleScroll(e, link.id)}
                className="hover:text-teal-600 transition-colors cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="https://wa.link/5hltyy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-3 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-full font-semibold hover:bg-teal-700 hover:scale-105 transition-all shadow-lg shadow-teal-600/20 active:scale-95"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="pt-0">
        {/* Hero carrega imediatamente */}
        <Hero />

        {/* As outras seções carregam sob demanda (Performance) */}
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Team />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SocialProof />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>

    </main>
  );
}

export default App;