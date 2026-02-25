import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const avatars = ["👩‍💼", "💪", "🧘‍♀️", "🏃‍♂️", "👩‍⚕️", "🏋️"];
const badgeIcons = ["⭐", "🏆", "👥", "🔒"];

const TestimonialCard = ({ testimonial, index, isDarkMode, avatar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={`group relative p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 hover:bg-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30'}`}>
      <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
        <Quote className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />))}
      </div>
      <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'}`}>{avatar}</div>
        <div>
          <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
          <p className={`text-sm ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-orange-50/30 to-white'}`}>
      <div className="absolute inset-0 hidden md:block">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] border ${isDarkMode ? 'border-orange-900/10' : 'border-orange-100'} rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}>
            <MessageSquare className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{tm.badge}</span>
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {tm.title1}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{tm.title2}</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tm.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tm.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} isDarkMode={isDarkMode} avatar={avatars[index]} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }} className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {tm.badges.map((badge, index) => (
            <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200'}`}>
              <span className="text-xl">{badgeIcons[index]}</span>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
