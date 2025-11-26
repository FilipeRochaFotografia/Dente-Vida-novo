
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    name: "Carol Carvalho",
    role: "Google Review",
    content: "Uma experiência única conhecer o Dr. Alexandre Aragão e a equipe da clínica Dente Vida. Atenção e profissionalismo são qualidades notáveis desde o primeiro atendimento. Eu, como paciente, só tenho a agradecer!",
    image: "https://i.ibb.co/vxpWb5ZK/image.png"
  },
  {
    name: "Filipe Rocha",
    role: "Google Review",
    content: "Melhor clínica dentária de Vitória da Conquista. Sou cliente há muitos anos e sempre fui muito bem atendido tanto pelos funcionários quanto pelos dentistas. Ambiente extremamente limpo, aconchegante e profissional. Recomendo a todos!",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Eduardo Silva",
    role: "Google Review",
    content: "Atendimento espetacular. O Dr Alexandre é um profissional diferenciado, eu indico ele a todos meus colegas. Profissional demais, muito atencioso. Já o tenho como referência primeira quando preciso ir ao dentista.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-24 bg-soft-gradient relative overflow-hidden">
      
      {/* Background Decorative Elements (Hero Style) */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-teal-900 mb-6">
            Consulta Humanizada
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A satisfação dos nossos pacientes é o nosso maior cartão de visitas.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white/60 backdrop-blur-md border border-teal-200 p-8 rounded-[2rem] shadow-[0_0_30px_-5px_rgba(45,212,191,0.2)] relative group hover:-translate-y-2 transition-all duration-300 hover:border-teal-300 hover:shadow-teal-500/30"
            >
              <Quote className="absolute top-8 right-8 text-teal-200 w-12 h-12 rotate-180 group-hover:text-teal-300 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-teal-900 font-bold text-lg leading-tight">{item.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed relative z-10 text-[0.95rem]">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Avaliação movida para baixo */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="flex justify-center items-center mt-12 pt-8"
        >
            <div className="flex items-center gap-2 px-4 md:px-6 py-3 bg-white/40 backdrop-blur-md rounded-full border border-teal-200 shadow-sm">
                <div className="flex gap-1 shrink-0">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                ))}
                </div>
                <span className="text-teal-900 font-medium text-sm md:text-lg ml-2 whitespace-nowrap">4.8 de 5.0 no Google</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
