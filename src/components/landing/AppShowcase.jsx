import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

const screenshotSrcs = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/40080aa2e_IMG_8533.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/2762ef42d_IMG_8538.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/d74ec9b7c_IMG_8535.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/dd7c401aa_IMG_8536.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/69048c93e_IMG_8537.png",
];

export default function AppShowcase({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const s = t.showcase;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % screenshotSrcs.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + screenshotSrcs.length) % screenshotSrcs.length);

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDarkMode ? 'opacity-5' : 'opacity-10'}`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}>
            <Eye className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{s.badge}</span>
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {s.title1}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{s.title2}</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{s.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className={`hidden md:flex w-12 h-12 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-white border-gray-200 hover:bg-orange-50'}`}>
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="relative flex items-center justify-center gap-4 perspective-1000">
              <motion.div key={`left-${activeIndex}`} initial={{ opacity: 0, x: -50, rotateY: 15 }} animate={{ opacity: 0.5, x: 0, rotateY: 15, scale: 0.8 }} className="hidden lg:block">
                <div className="bg-black rounded-[2rem] p-1.5 shadow-xl transform -rotate-6">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-48">
                    <img src={screenshotSrcs[(activeIndex - 1 + screenshotSrcs.length) % screenshotSrcs.length]} alt="Previous" className="w-full h-auto opacity-50" />
                  </div>
                </div>
              </motion.div>

              <motion.div key={`center-${activeIndex}`} layoutId="activePhone" className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-25" />
                <div className="relative bg-black rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl">
                  <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                    <img src={screenshotSrcs[activeIndex]} alt={s.slides[activeIndex].title} className="w-56 sm:w-64 md:w-72 h-auto" loading="lazy" />
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={`info-${activeIndex}`} className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h4 className={`font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{s.slides[activeIndex].title}</h4>
                  <p className={`text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{s.slides[activeIndex].description}</p>
                </motion.div>
              </motion.div>

              <motion.div key={`right-${activeIndex}`} initial={{ opacity: 0, x: 50, rotateY: -15 }} animate={{ opacity: 0.5, x: 0, rotateY: -15, scale: 0.8 }} className="hidden lg:block">
                <div className="bg-black rounded-[2rem] p-1.5 shadow-xl transform rotate-6">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-48">
                    <img src={screenshotSrcs[(activeIndex + 1) % screenshotSrcs.length]} alt="Next" className="w-full h-auto opacity-50" />
                  </div>
                </div>
              </motion.div>
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide} className={`hidden md:flex w-12 h-12 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-white border-gray-200 hover:bg-orange-50'}`}>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : ''}`}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : ''}`}>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {screenshotSrcs.map((_, index) => (
              <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-orange-500' : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
