import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, MessageSquare, Camera, Target, Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const avatars = ["👩‍💼", "💪", "🧘‍♀️", "🏃‍♂️", "👩‍⚕️", "🏋️"];
const cardIcons = [Camera, Target, Heart, Star, Quote, Trophy];
const badgeIcons = ["⭐", "🏆", "👥", "🔒"];

import { Trophy } from 'lucide-react';

const TestimonialCard = ({ testimonial, index, isDarkMode, avatar, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComp = [Camera, Target, Heart, Star, Trophy, MessageSquare][index] || Star;

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={`group relative p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 hover:bg-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl hover:shadow-orange-200/30'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />))}
        </div>
        <IconComp className={`w-5 h-5 ${isDarkMode ? 'text-orange-400/50' : 'text-orange-300'}`} />
      </div>
      <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{testimonial.text}"</p>
      <div className={`w-full h-px mb-4 ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`} />
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

  const featured = tm.items[0];
  const rest = tm.items.slice(1);

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-orange-50/30 to-white'}`}>
      <div className="absolute inset-0 hidden md:block">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] border ${isDarkMode ? 'border-orange-900/10' : 'border-orange-100'} rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}>
            <Heart className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{tm.badge}</span>
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {tm.title1}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{tm.title2}</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tm.subtitle}</p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }} className={`relative p-8 md:p-12 rounded-3xl mb-8 ${isDarkMode ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-white/10' : 'bg-gradient-to-br from-gray-900 to-gray-800'} shadow-2xl`}>
          <div className="text-orange-400 text-5xl font-serif mb-6">"</div>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">{featured.text}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl">👩‍💼</div>
              <div>
                <h4 className="text-white font-bold text-lg">{featured.name}</h4>
                <p className="text-orange-400">{featured.role}</p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />))}
            </div>
          </div>
        </motion.div>

        {/* Rest of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} isDarkMode={isDarkMode} avatar={avatars[index + 1]} />
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
