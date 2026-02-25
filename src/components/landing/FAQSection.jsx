import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const FAQItem = ({ faq, index, isDarkMode, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        isDarkMode 
          ? `bg-white/5 border ${isOpen ? 'border-orange-500/50' : 'border-white/10'} hover:border-orange-500/30` 
          : `bg-white/70 backdrop-blur-xl border ${isOpen ? 'border-orange-300' : 'border-white/50'} shadow-lg hover:shadow-xl`
      }`}
    >
      <button onClick={onClick} className="w-full px-6 py-5 flex items-center justify-between text-left">
        <span className={`font-semibold pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{faq.question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-orange-500 rotate-180' : isDarkMode ? 'bg-white/10' : 'bg-orange-100'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-orange-500'}`} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className={`px-6 pb-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`w-full h-px mb-4 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const fq = t.faq;

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}>
            <HelpCircle className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{fq.badge}</span>
          </motion.div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {fq.title1}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{fq.title2}</span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{fq.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {fq.items.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isDarkMode={isDarkMode} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? -1 : index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
