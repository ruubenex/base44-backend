import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Flame, Zap, Heart, Instagram, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import logoSombra from '@/assets/logocomsombra.png';

export default function FooterCTA({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t, lang } = useLanguage();
  const ft = t.footer;
  const partnersPath = lang === 'pt' ? '/partners' : `/${lang}/partners`;
  const instagramUrl = lang === 'de' ? 'https://instagram.com/camcal.de' : 'https://www.instagram.com/camcal.ia/';

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white to-orange-50'}`}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`relative rounded-[3rem] p-8 md:p-16 overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'} shadow-2xl`}>
          <div className="absolute top-8 right-8 w-16 md:w-20 h-16 md:h-20 border border-orange-500/20 rounded-full" />
          <div className="absolute bottom-8 left-8 w-24 md:w-32 h-24 md:h-32 border border-orange-500/10 rounded-full" />

          <div className="text-center relative z-10">
            <div className="mb-6 md:mb-8">
              <img src={logoSombra} alt="CamCal Logo" className="h-16 md:h-20 lg:h-24 mx-auto drop-shadow-lg" loading="lazy" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {ft.title1}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{ft.title2}</span>
            </h2>

            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400">{ft.subtitle}</p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.5 }}>
              <a href="https://camcal.pro/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-7 text-xl rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                  <Flame className="w-6 h-6 mr-2" />
                  {ft.cta}
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.5 }} className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm">{ft.trust1}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">{ft.trust2}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.5 }} className={`mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-900 border border-gray-800'}`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-white font-bold">{ft.partnersTitle || 'Programa de Parceiros'} 🤝</h4>
              <p className="text-gray-400 text-sm">{ft.partnersDesc || '70% comissão · App gratuito · Cupom exclusivo'}</p>
            </div>
          </div>
          <Link to={partnersPath}>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-6 group">
              {ft.partnersBtn || 'Quero ser parceiro'}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8, duration: 0.5 }} className={`mt-16 text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logoSombra} alt="CamCal" className="h-6" />
            <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CamCal</span>
          </div>
          <p className="text-sm mb-4">{ft.tagline}</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://camcal.pro/" target="_blank" rel="noopener noreferrer" className={`text-sm hover:text-orange-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{ft.accessApp}</a>
            <span>•</span>
            <a href="#features" className={`text-sm hover:text-orange-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{ft.featuresLink}</a>
            <span>•</span>
            <Link to={partnersPath} className={`text-sm hover:text-orange-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{ft.partnersLink || 'Programa de Parceiros'}</Link>
            <span>•</span>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 text-sm hover:text-orange-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <Instagram className="w-4 h-4" />
              {ft.instagram}
            </a>
            <span>•</span>
            <a href="#" className={`text-sm hover:text-orange-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{ft.contact}</a>
          </div>
          <p className="text-xs mt-8">{ft.copyright}</p>
        </motion.div>
      </div>
    </section>
  );
}
