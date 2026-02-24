import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Background Orbs - CSS animations for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-orange-400/40 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-20 -left-40 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tr from-orange-300/30 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Floating 3D Elements - CSS animations */}
      <div className="absolute top-32 left-[5%] md:left-[10%] w-12 h-12 md:w-20 lg:w-24 md:h-20 lg:h-24 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl md:rounded-2xl shadow-xl shadow-orange-500/30 flex items-center justify-center rotate-12">
          <span className="text-2xl md:text-3xl lg:text-4xl">🍎</span>
        </div>
      </div>

      <div className="absolute top-48 right-[5%] md:right-[8%] w-10 h-10 md:w-16 lg:w-20 md:h-16 lg:h-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-xl md:rounded-2xl shadow-xl shadow-green-500/30 flex items-center justify-center -rotate-12">
          <span className="text-xl md:text-2xl lg:text-3xl">🥗</span>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-40 left-[10%] md:left-[15%] w-10 h-10 md:w-14 lg:w-16 md:h-14 lg:h-16 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg md:rounded-xl shadow-xl shadow-yellow-500/30 flex items-center justify-center">
          <span className="text-lg md:text-xl lg:text-2xl">🍌</span>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-32 right-[8%] md:right-[12%] w-10 h-10 md:w-14 lg:w-16 md:h-14 lg:h-16 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
        <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-xl md:rounded-2xl shadow-xl shadow-red-500/30 flex items-center justify-center rotate-6">
          <span className="text-lg md:text-2xl lg:text-3xl">🍓</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/c7a7b0d56_logo250-invisible.png"
              alt="CamCal Logo"
              className="h-24 md:h-32 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-orange-200 rounded-full shadow-lg shadow-orange-100 mb-8"
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">IA com 85% de precisão • A melhor do mercado</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Conte calorias{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                tirando uma foto
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-orange-200/50 -z-0 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Aponte a câmera, escaneie o alimento e deixe nossa IA calcular 
            <span className="font-semibold text-gray-800"> calorias, proteínas, carboidratos e gorduras </span>
            instantaneamente. Simples assim. 🔥
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://camcal.pro/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-5 h-5 mr-2" />
                Acesse o APP
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba mais
            </Button>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 md:mt-16 relative"
          >
            <div className="relative mx-auto max-w-[260px] sm:max-w-xs md:max-w-sm">
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-100/50 to-white/30 backdrop-blur-sm rounded-[2.5rem] md:rounded-[3rem] transform scale-105" />
              
              {/* Phone Mockup */}
              <div className="relative bg-black rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl shadow-black/20">
                <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/40080aa2e_IMG_8533.png"
                    alt="CamCal App Preview"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Stats Cards - CSS animations */}
              <div className="absolute -left-2 sm:-left-12 md:-left-16 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg md:rounded-xl flex items-center justify-center">
                    <span className="text-base md:text-xl">🔥</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Calorias</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">210 kcal</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 sm:-right-12 md:-right-16 top-1/2 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/50 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center">
                    <span className="text-base md:text-xl">💪</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500">Proteína</p>
                    <p className="text-sm md:text-lg font-bold text-gray-900">2g</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Role para descobrir</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-orange-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}