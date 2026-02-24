import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Perdeu 12kg em 3 meses",
    avatar: "👩‍💼",
    rating: 5,
    text: "O CamCal mudou completamente minha relação com a comida. Nunca foi tão fácil contar calorias! A função de escanear é impressionante.",
  },
  {
    name: "Pedro Santos",
    role: "Ganhou 8kg de massa",
    avatar: "💪",
    rating: 5,
    text: "Como atleta, preciso de precisão. O CamCal entrega isso e muito mais. As receitas personalizadas são perfeitas para o meu objetivo.",
  },
  {
    name: "Ana Costa",
    role: "Mantém peso saudável",
    avatar: "🧘‍♀️",
    rating: 5,
    text: "Uso há 6 meses e não largo mais! Os desafios diários me mantêm motivada e o ranking com meus amigos deixa tudo mais divertido.",
  },
  {
    name: "Lucas Oliveira",
    role: "Perdeu 20kg em 5 meses",
    avatar: "🏃‍♂️",
    rating: 5,
    text: "A IA do CamCal é surreal! Ela criou um plano perfeito pra mim. Os exercícios, receitas... tudo funciona. Melhor investimento que fiz.",
  },
  {
    name: "Beatriz Lima",
    role: "Nutricionista",
    avatar: "👩‍⚕️",
    rating: 5,
    text: "Recomendo o CamCal para todos os meus pacientes. A precisão de 85% é impressionante e facilita muito o acompanhamento nutricional.",
  },
  {
    name: "Rafael Mendes",
    role: "Personal Trainer",
    avatar: "🏋️",
    rating: 5,
    text: "Ferramenta indispensável para quem quer resultados. Meus alunos que usam o CamCal têm 3x mais chances de atingir suas metas.",
  },
];

const TestimonialCard = ({ testimonial, index, isDarkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
        isDarkMode 
          ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 hover:bg-white/10' 
          : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30'
      }`}
    >
      {/* Quote Icon */}
      <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center ${
        isDarkMode ? 'bg-orange-500/20' : 'bg-orange-100'
      }`}>
        <Quote className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
        ))}
      </div>

      {/* Text */}
      <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-orange-50'
        }`}>
          {testimonial.avatar}
        </div>
        <div>
          <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {testimonial.name}
          </h4>
          <p className={`text-sm ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-orange-50/30 to-white'}`}>
      {/* Background - Static */}
      <div className="absolute inset-0 hidden md:block">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] border ${isDarkMode ? 'border-orange-900/10' : 'border-orange-100'} rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}
          >
            <MessageSquare className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              O que dizem sobre nós
            </span>
          </motion.div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Milhares de{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              vidas transformadas
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com o CamCal.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: "⭐", label: "4.9 na App Store" },
            { icon: "🏆", label: "Top 10 Saúde" },
            { icon: "👥", label: "50k+ Usuários" },
            { icon: "🔒", label: "Dados Seguros" },
          ].map((badge, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200'
              }`}
            >
              <span className="text-xl">{badge.icon}</span>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}