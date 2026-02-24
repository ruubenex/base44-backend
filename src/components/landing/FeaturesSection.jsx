import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Zap, Target, Droplets, Trophy, Users, Flame, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Escaneie sua Refeição",
    description: "Tire uma foto do seu prato e nossa IA identifica cada alimento instantaneamente.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    emoji: "📸"
  },
  {
    icon: Zap,
    title: "85% de Precisão",
    description: "A IA mais precisa do mercado. Resultados confiáveis para o seu controle nutricional.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    emoji: "⚡"
  },
  {
    icon: Target,
    title: "Metas Personalizadas",
    description: "Defina seus objetivos e acompanhe seu progresso diário com metas de calorias e macros.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    emoji: "🎯"
  },
  {
    icon: Droplets,
    title: "Controle de Hidratação",
    description: "Acompanhe sua ingestão de água diária e receba lembretes para se manter hidratado.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    emoji: "💧"
  },
  {
    icon: Trophy,
    title: "Desafios & Sequências",
    description: "Complete desafios diários, mantenha sua sequência e ganhe premiações exclusivas.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    emoji: "🏆"
  },
  {
    icon: Users,
    title: "Ranking com Amigos",
    description: "Compete com seus amigos, veja quem está no topo e mantenha a motivação em alta.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    emoji: "👥"
  },
];

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl shadow-gray-200/30 hover:shadow-2xl hover:shadow-orange-200/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Background Gradient on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className="relative mb-4 md:mb-6">
          <div className={`w-14 h-14 md:w-16 md:h-16 ${feature.bgColor} rounded-xl md:rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl md:text-3xl">{feature.emoji}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative Element */}
        <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default function FeaturesSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className={`py-24 md:py-32 relative transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-orange-50/20 to-white'}`}
    >
      {/* Background Elements - Static for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -right-20 w-72 md:w-96 h-72 md:h-96 border ${isDarkMode ? 'border-orange-900/20' : 'border-orange-200/50'} rounded-full`} />
        <div className={`absolute -bottom-40 -left-40 w-80 md:w-[500px] h-80 md:h-[500px] border ${isDarkMode ? 'border-orange-900/10' : 'border-orange-100/50'} rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}
          >
            <Flame className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Funcionalidades Poderosas
            </span>
          </motion.div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Tudo que você precisa para
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              alcançar seus objetivos
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            O CamCal vai muito além de contar calorias. É seu parceiro completo na jornada de transformação.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={`mt-16 md:mt-20 p-8 rounded-3xl backdrop-blur-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/50'} shadow-xl`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Precisão da IA", icon: "🎯" },
              { value: "50k+", label: "Usuários Ativos", icon: "👥" },
              { value: "1M+", label: "Refeições Escaneadas", icon: "📸" },
              { value: "4.9", label: "Nota na App Store", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}