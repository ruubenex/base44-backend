import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Dumbbell, ChefHat, ShoppingCart, TrendingUp, Brain, Calendar } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const aiIcons = [Dumbbell, ChefHat, ShoppingCart, TrendingUp];

export default function AISection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const a = t.ai;

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-20' : 'opacity-5'}`} style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? '#f97316' : '#fdba74'} 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30' : 'bg-gradient-to-r from-orange-100 to-purple-100 border border-orange-200'}`}>
              <Brain className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{a.badge}</span>
            </motion.div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {a.title1}{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">{a.title2}</span>
            </h2>

            <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{a.description}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {a.items.map((feature, index) => {
                const Icon = aiIcons[index];
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }} className={`flex items-start gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-orange-50'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                      <Icon className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[260px] sm:max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-30" />
              <div className="relative bg-black rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/12995b60c_IMG_8534.png" alt="CamCal AI Personalized Routine" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
              <div className={`absolute -top-2 -right-2 md:-top-4 md:-right-4 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl shadow-lg animate-bounce ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  <span className={`text-sm md:text-base font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{a.aiActive}</span>
                </div>
              </div>
              <div className={`absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl shadow-lg animate-bounce ${isDarkMode ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'bg-gradient-to-r from-orange-500 to-red-500'}`} style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base font-semibold">{a.plan40days}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
