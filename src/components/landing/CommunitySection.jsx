import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Users, MessageCircle, Flame, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const TAB_ICONS = [Trophy, Star, Users, MessageCircle];

function PhoneMockup({ activeTab, t }) {
  const tabs = t.community.tabs;
  const screens = t.community.screens;

  return (
    <div className="relative w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] bg-black border-[6px] border-gray-800 overflow-hidden shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1 bg-gray-950">
          <div className="w-24 h-5 bg-black rounded-full" />
        </div>

        {/* Screen content */}
        <div className="bg-gray-950 min-h-[420px]">
          {/* Inner tabs */}
          <div className="px-3 py-3">
            <h3 className="text-white text-sm font-semibold">Community</h3>
            <p className="text-gray-500 text-[10px]">Connect with other users</p>
            <div className="flex gap-1 mt-2">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  className={`text-[9px] px-2 py-1 rounded-full flex items-center gap-1 transition-colors ${
                    activeTab === i
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/5 text-gray-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-3 pb-4"
            >
              {activeTab === 0 && (
                <div>
                  <div className="bg-white/5 rounded-xl p-3 mb-2">
                    <p className="text-white text-xs font-semibold">Global Ranking</p>
                    <p className="text-gray-500 text-[9px]">{screens.rankingSubtitle}</p>
                    <div className="flex items-end justify-center gap-4 mt-4 mb-2">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-400/20 flex items-center justify-center text-sm">🥈</div>
                        <span className="text-[9px] text-gray-300 mt-1">Ruben</span>
                        <span className="text-[8px] text-gray-500">120pts</span>
                      </div>
                      <div className="flex flex-col items-center -mt-4">
                        <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center text-sm">🥇</div>
                        <span className="text-[9px] text-orange-400 font-bold mt-1">Maria</span>
                        <span className="text-[8px] text-orange-400">130pts</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-400/20 flex items-center justify-center text-sm">🥉</div>
                        <span className="text-[9px] text-gray-300 mt-1">Jun</span>
                        <span className="text-[8px] text-gray-500">90pts</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full text-center text-[9px] text-gray-400 border border-white/10 rounded-lg py-1.5">
                    📊 {screens.sharePosition}
                  </button>
                  {['#4', '#5'].map((u, i) => (
                    <div key={i} className="flex items-center gap-2 mt-2 px-1">
                      <div className="w-6 h-6 rounded-full bg-gray-700" />
                      <div>
                        <p className="text-[9px] text-gray-300">{screens.user} {u}</p>
                        <p className="text-[8px] text-gray-500">0 pts · 0 refs</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <div className="bg-white/5 rounded-xl p-3 mb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-orange-400/20 flex items-center justify-center text-[10px]">😊</div>
                      <div>
                        <p className="text-white text-[10px] font-semibold">Maria</p>
                        <p className="text-gray-500 text-[8px]">@mariam · 1d</p>
                      </div>
                    </div>
                    <div className="w-full h-16 bg-gradient-to-br from-orange-200 to-orange-100 rounded-lg mb-1" />
                    <p className="text-orange-400 text-[9px] font-semibold">{screens.beforeAfter}</p>
                    <p className="text-orange-400/70 text-[8px]">{screens.weightLoss}</p>
                    <div className="flex gap-3 mt-1 text-[8px] text-gray-500">
                      <span>❤️ 24</span><span>💬 8</span><span>🔗 3</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 px-1">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-[10px]">😎</div>
                    <div>
                      <p className="text-white text-[10px] font-semibold">Carlos</p>
                      <p className="text-gray-500 text-[8px]">@carlos · 3h</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-300 mt-1 px-1">✅ {screens.proteinGoal} 💪</p>
                  <div className="flex gap-3 mt-1 text-[8px] text-gray-500 px-1">
                    <span>❤️ 12</span><span>💬 3</span>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div className="mb-1">
                    <p className="text-white text-xs font-semibold">{screens.friendsTitle}</p>
                    <p className="text-gray-500 text-[9px]">{screens.friendsSubtitle}</p>
                  </div>
                  {[
                    { name: 'Maria', days: 12, pts: 130 },
                    { name: 'Ruben', days: 8, pts: 120 },
                    { name: 'Ana', days: 5, pts: 91 },
                    { name: 'Tom', days: 3, pts: 78 },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">
                          {['😊', '😎', '😄', '🙂'][i]}
                        </div>
                        <div>
                          <p className="text-white text-[10px] font-medium">{f.name}</p>
                          <p className="text-[8px] text-gray-500">🔥 {f.days} {screens.days} · ⭐ {f.pts}pts</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-orange-400/20 flex items-center justify-center text-[10px]">😊</div>
                    <div>
                      <p className="text-white text-[10px] font-semibold">Maria</p>
                      <p className="text-green-400 text-[8px]">● Online</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg rounded-bl-sm px-2 py-1.5 max-w-[80%]">
                      <p className="text-[9px] text-gray-300">{screens.chat1} 💪</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg rounded-br-sm px-2 py-1.5 max-w-[85%] ml-auto">
                      <p className="text-[9px] text-white">{screens.chat2} 🔥</p>
                    </div>
                    <div className="bg-white/5 rounded-lg rounded-bl-sm px-2 py-1.5 max-w-[75%]">
                      <p className="text-[9px] text-gray-300">{screens.chat3} 😂</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg rounded-br-sm px-2 py-1.5 max-w-[80%] ml-auto">
                      <p className="text-[9px] text-white">{screens.chat4} 🏆</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 bg-white/5 rounded-full px-3 py-1.5 text-[9px] text-gray-500">{screens.typeMessage}</div>
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function CommunitySection({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const c = t.community;

  const featureIcons = [Trophy, Users, MessageCircle, Flame];
  const featureColors = ['text-orange-400', 'text-orange-400', 'text-orange-400', 'text-orange-400'];

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-32 relative overflow-hidden transition-colors duration-1000 bg-[#0A0A0A]`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {c.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {c.title1}
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {c.title2}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12"
        >
          {c.tabs.map((tab, i) => {
            const Icon = TAB_ICONS[i];
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab}
              </button>
            );
          })}
        </motion.div>

        {/* Content: Phone + Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <PhoneMockup activeTab={activeTab} t={t} />
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            {c.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i}
                  className={`relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer ${
                    activeTab === i
                      ? 'bg-white/10 border-orange-500/30'
                      : 'bg-white/5 border-white/5 hover:bg-white/[0.07]'
                  }`}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ scale: 1.01 }}
                >
                  {activeTab === i && (
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-500" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeTab === i ? 'bg-orange-500/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-5 h-5 ${activeTab === i ? 'text-orange-400' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto"
        >
          {c.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xl mb-1 block">{['🏆', '🔥', '💬'][i]}</span>
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
