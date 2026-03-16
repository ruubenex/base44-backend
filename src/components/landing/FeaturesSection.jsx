import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Zap, Target, Droplets, Trophy, Users, Flame, Mic, Keyboard, Dumbbell, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const statIcons = ["🎯", "👥", "📸", "⭐"];

export default function FeaturesSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="features" ref={sectionRef} className={`py-16 md:py-32 relative transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-gradient-to-b from-white via-orange-50/20 to-white'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -right-20 w-72 md:w-96 h-72 md:h-96 border ${isDarkMode ? 'border-orange-900/20' : 'border-orange-200/50'} rounded-full`} />
        <div className={`absolute -bottom-40 -left-40 w-80 md:w-[500px] h-80 md:h-[500px] border ${isDarkMode ? 'border-orange-900/10' : 'border-orange-100/50'} rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}>
            <Flame className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{f.badge}</span>
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {f.title1}
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{f.title2}</span>
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.subtitle}</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1 - Scan (Large) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-2 lg:col-span-2">
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-orange-50/80 border border-orange-100'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-500'}`}>
                <Camera className={`w-6 h-6 ${isDarkMode ? 'text-orange-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[0].title}</h3>
              <p className={`text-sm md:text-base mb-4 md:mb-6 max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[0].description}</p>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-500 text-white'}`}>
                  <Camera className="w-3.5 h-3.5" /> Scan meal
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-500 text-white'}`}>
                  <Mic className="w-3.5 h-3.5" /> Voice meal
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-500 text-white'}`}>
                  <Keyboard className="w-3.5 h-3.5" /> Type meal
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-500 text-white'}`}>
                  <Dumbbell className="w-3.5 h-3.5" /> Log exercise
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Precision */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 ${isDarkMode ? 'bg-yellow-500/20' : 'bg-yellow-500'}`}>
                <Zap className={`w-6 h-6 ${isDarkMode ? 'text-yellow-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[1].title}</h3>
              <p className={`text-sm mb-4 md:mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[1].description}</p>
              {/* Progress bars */}
              <div className="space-y-3">
                {[
                  { label: f.progressLabels.protein, value: 92, color: 'bg-green-500' },
                  { label: f.progressLabels.carbs, value: 87, color: 'bg-orange-500' },
                  { label: f.progressLabels.fats, value: 83, color: 'bg-red-400' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</span>
                      <span className="text-xs font-semibold text-green-500">{item.value}%</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}>
                      <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${item.value}%` } : {}} transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }} className={`h-full rounded-full ${item.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Diet Restrictions */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-500'}`}>
                <Target className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[2].title}</h3>
              <p className={`text-sm mb-4 md:mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[2].description}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: '🌱', label: f.dietTags.vegan, active: true },
                  { emoji: '🥑', label: f.dietTags.keto, active: false },
                  { emoji: '🌾', label: f.dietTags.glutenFree, active: true },
                  { emoji: '🥛', label: f.dietTags.lactoseFree, active: false },
                  { emoji: '⚠️', label: f.dietTags.allergy, active: false },
                  { emoji: '🥩', label: f.dietTags.carnivore, active: false },
                ].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    tag.active 
                      ? (isDarkMode ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-50 text-green-700 border border-green-200') 
                      : (isDarkMode ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200')
                  }`}>
                    {tag.emoji} {tag.label} {tag.active && <Check className="w-3 h-3" />}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Hydration */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }}>
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden text-center transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500'}`}>
                <Droplets className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[3].title}</h3>
              <p className={`text-sm mb-4 md:mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[3].description}</p>
              {/* Hydration circle */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke={isDarkMode ? 'rgba(255,255,255,0.1)' : '#f3f4f6'} strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="42" fill="none" stroke="#f97316" strokeWidth="8" strokeLinecap="round" strokeDasharray={2 * Math.PI * 42} initial={{ strokeDashoffset: 2 * Math.PI * 42 }} animate={isInView ? { strokeDashoffset: 2 * Math.PI * 42 * 0.35 } : {}} transition={{ delay: 0.6, duration: 1.2 }} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>65%</span>
                  <span className={`text-[10px] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{f.goalLabel}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(7)].map((_, i) => (
                  <span key={i} className={`text-base md:text-lg ${i < 5 ? '' : 'opacity-30'}`}>💧</span>
                ))}
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="font-bold">1.5</span> / 2.5L {f.consumed}
              </p>
            </div>
          </motion.div>

          {/* Card 5 - Challenges */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500'}`}>
                <Trophy className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[4].title}</h3>
              <p className={`text-sm mb-4 md:mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[4].description}</p>
              <div className="space-y-2">
                {[
                  { emoji: '💧', label: f.challenges.hydration, pts: '40 pts', done: true },
                  { emoji: '🍽️', label: f.challenges.fullDiary, pts: '60 pts', done: true },
                  { emoji: '💪', label: f.challenges.proteinGoal, pts: '100 pts', done: false },
                  { emoji: '🏃', label: f.challenges.exercise, pts: '80 pts', done: false },
                ].map((challenge, i) => (
                  <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{challenge.emoji}</span>
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{challenge.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] ${challenge.done ? 'text-orange-500' : isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{challenge.pts}</span>
                      {challenge.done && <Check className="w-3.5 h-3.5 text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 6 - Ranking (Large) */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }} className="md:col-span-2 lg:col-span-1">
            <div className={`relative h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-5 ${isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-500'}`}>
                <Users className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-white'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{f.items[5].title}</h3>
              <p className={`text-sm mb-4 md:mb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{f.items[5].description}</p>
              <div className="space-y-2">
                {[
                  { emoji: '🏃', label: f.exercises.running, kcal: '-320 kcal' },
                  { emoji: '🏋️', label: f.exercises.weights, kcal: '-180 kcal' },
                  { emoji: '🧘', label: 'Yoga 45min', kcal: '-150 kcal' },
                  { emoji: '🚴', label: f.exercises.cycling, kcal: '-220 kcal' },
                ].map((exercise, i) => (
                  <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{exercise.emoji}</span>
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{exercise.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-red-500">{exercise.kcal}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }} className={`mt-12 md:mt-20 p-6 md:p-8 rounded-3xl backdrop-blur-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/50'} shadow-xl`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {f.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl mb-2">{statIcons[index]}</div>
                <div className={`text-xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
