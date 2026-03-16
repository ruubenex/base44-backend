import React from 'react';
import logoSombra from '@/assets/logocomsombra.png';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';

const userAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Soft orange blurred background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-orange-300/25 via-orange-200/20 to-orange-100/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-t from-orange-200/15 to-transparent rounded-full blur-[80px]" />
      </div>

      {/* Floating 3D Elements - hidden on mobile for clean look */}
      <div className="hidden md:block absolute top-32 left-[10%] w-20 lg:w-24 h-20 lg:h-24 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-xl shadow-orange-500/30 flex items-center justify-center rotate-12">
          <span className="text-3xl lg:text-4xl">🍎</span>
        </div>
      </div>
      <div className="hidden md:block absolute top-48 right-[8%] w-16 lg:w-20 h-16 lg:h-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-xl shadow-green-500/30 flex items-center justify-center -rotate-12">
          <span className="text-2xl lg:text-3xl">🥗</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-40 left-[15%] w-14 lg:w-16 h-14 lg:h-16 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-xl shadow-yellow-500/30 flex items-center justify-center">
          <span className="text-xl lg:text-2xl">🍌</span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-32 right-[12%] w-14 lg:w-16 h-14 lg:h-16 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
        <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-xl shadow-red-500/30 flex items-center justify-center rotate-6">
          <span className="text-2xl lg:text-3xl">🍓</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 md:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-orange-200 rounded-full shadow-lg shadow-orange-100 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs md:text-sm font-medium text-gray-700">{h.badge}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight leading-[1.1]">
              {h.headline1}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{h.headline2}</span>
                <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} className="absolute bottom-0 md:bottom-1 left-0 w-full h-2 md:h-3 bg-orange-300/40 rounded-full origin-left" />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-base md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              {h.description}
              <span className="font-semibold text-gray-800">{h.descriptionBold}</span>
              {h.descriptionEnd}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="flex flex-col sm:flex-row items-center lg:items-start gap-3 md:gap-4 px-2 sm:px-0">
              <a href="https://camcal.pro/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 font-semibold">
                  <Camera className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  {h.cta}
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button variant="ghost" size="lg" className="px-6 py-5 md:py-6 text-base md:text-lg text-gray-600 hover:text-orange-600 transition-all duration-300 gap-2" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
                <Play className="w-5 h-5" />
                {h.learnMore}
              </Button>
            </motion.div>

            {/* User Avatars + Rating */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {userAvatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt="" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-base md:text-lg">★</span>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-500">50.000+ {h.activeUsers}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Phone Mockup */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="relative flex justify-center lg:justify-end mt-4 md:mt-0">
            <div className="relative mx-auto max-w-[260px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 to-white/30 backdrop-blur-sm rounded-[2.5rem] md:rounded-[3rem] transform scale-105" />
              <div className="relative bg-black rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl shadow-black/20">
                <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/40080aa2e_IMG_8533.png" alt="CamCal App Preview" className="w-full h-auto" loading="eager" />
                </div>
              </div>
              {/* Floating Calorie Card */}
              <div className="absolute -left-4 sm:-left-12 md:-left-20 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-lg border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg md:rounded-xl flex items-center justify-center"><span className="text-base md:text-xl">🔥</span></div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">{h.calories}</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">2,969 kcal</p>
                  </div>
                </div>
              </div>
              {/* Floating Protein Card */}
              <div className="absolute -right-4 sm:-right-12 md:-right-20 top-1/2 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-lg border border-white/50 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center"><span className="text-base md:text-xl">💪</span></div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">{h.protein}</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">113g / dia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center text-gray-400">
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2">{h.scrollHint}</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-2.5 md:h-3 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
