import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, TrendingUp, Users, Star, BarChart3, Zap, MessageCircle, Mail, Heart, ChevronDown, ChevronUp, Shield, Clock, Award, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';

const WHATSAPP_LINK = 'https://wa.me/5543996283118';
const EMAIL = 'contact@camcal.agency';

export default function Partners() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const p = t.partners;
  const [openFaq, setOpenFaq] = useState(null);

  const goBack = () => {
    if (lang === 'pt') navigate('/');
    else navigate(`/${lang}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <button onClick={goBack} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          CamCal
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-3xl" />
        </div>
        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{ top: `${15 + i * 10}%`, left: `${10 + (i * 17) % 80}%` }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
          />
        ))}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              {p.badge}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {p.heroTitle1}
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{p.heroTitle2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            {p.heroSubtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-orange-500/20">
                <MessageCircle className="w-5 h-5 mr-2" />
                {p.whatsappBtn}
              </Button>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl">
                <Mail className="w-5 h-5 mr-2" />
                {p.emailBtn}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: TrendingUp, value: '70%', label: p.statCommission },
              { icon: Users, value: '50k+', label: p.statUsers },
              { icon: Star, value: '4.9', label: 'App Store' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 min-w-[140px]">
                <stat.icon className="w-5 h-5 text-orange-400 mb-1" />
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider wave */}
      <div className="w-full h-20 bg-gradient-to-b from-[#0A0A0A] to-white" />

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Affiliate Plan */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-gray-50 border border-gray-200 p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-500" />
              </div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">{p.affiliateLabel}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-6">{p.affiliateTitle}</h3>
              <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">30–40%</span>
                <p className="text-gray-500 mt-2">{p.commissionPerSale}</p>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                {p.affiliateFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-2xl text-base">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {p.whatsappBtn}
                </Button>
              </a>
            </motion.div>

            {/* VIP Partner Plan */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 p-8 flex flex-col relative">
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  {p.mostPopular}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-orange-400" />
              </div>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">{p.vipLabel}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-6">{p.vipTitle}</h3>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">70%</span>
                <p className="text-gray-400 mt-2">{p.commissionPerSale}</p>
              </div>
              <ul className="space-y-4 flex-1 mb-8">
                {p.vipFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 rounded-2xl text-base">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {p.whatsappBtn}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            {p.howItWorksLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">{p.howItWorksTitle}</h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-orange-200" />
            {p.howItWorksSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg mb-5 relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{p.ctaTitle}</h2>
          <p className="text-gray-400 mb-10">{p.ctaSubtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-2xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +55 43 99628-3118
              </Button>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl">
                <Mail className="w-5 h-5 mr-2" />
                Email: {EMAIL}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-orange-400" />{p.trustFreeVip}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-400" />{p.trust24h}</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-orange-400" />{p.trustSupport}</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{p.faqTitle}</h2>
          <div className="space-y-3">
            {p.faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                  <span>{item.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">{p.ctaTitle}</h3>
            <p className="text-gray-400 mb-6">{p.ctaSubtitle}</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-2xl text-base">
                <MessageCircle className="w-5 h-5 mr-2" />
                {p.whatsappBtn}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
