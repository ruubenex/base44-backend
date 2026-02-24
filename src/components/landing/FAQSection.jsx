import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o escaneamento de alimentos?",
    answer: "É super simples! Basta abrir o app, apontar a câmera para o seu prato e tirar uma foto. Nossa IA analisa a imagem em segundos e identifica cada alimento, calculando automaticamente as calorias, proteínas, carboidratos e gorduras. Funciona com refeições caseiras, pratos de restaurantes e até lanches!"
  },
  {
    question: "Qual a precisão do CamCal?",
    answer: "Nossa IA tem 85% de precisão - a melhor do mercado! Usamos tecnologia de ponta em visão computacional e machine learning treinada com milhões de imagens de alimentos. Você pode ajustar manualmente as porções se necessário, tornando o resultado ainda mais preciso."
  },
  {
    question: "O plano personalizado funciona mesmo?",
    answer: "Sim! Nossa IA cria um plano 100% personalizado baseado nos seus dados: peso atual, meta, altura, idade, gênero e prazo. Você recebe exercícios adequados ao seu nível, receitas com todos os ingredientes e passo a passo, lista de compras e dicas diárias. Milhares de usuários já atingiram suas metas!"
  },
  {
    question: "Posso usar o CamCal para ganhar peso?",
    answer: "Com certeza! O CamCal é perfeito para qualquer objetivo: perder peso, ganhar massa muscular ou manter o peso atual. A IA ajusta todas as recomendações de acordo com sua meta, seja um déficit calórico para emagrecer ou um superávit para ganhar peso."
  },
  {
    question: "Como funciona o ranking com amigos?",
    answer: "Você pode adicionar amigos no app e competir em rankings semanais! Ganhe pontos completando desafios, mantendo sequências e batendo suas metas. É uma forma super divertida de manter a motivação em alta e se exercitar junto com quem você gosta."
  },
  {
    question: "O CamCal funciona offline?",
    answer: "Algumas funcionalidades funcionam offline, como visualizar seu histórico e metas. Porém, para escanear alimentos e acessar as recomendações da IA, você precisa de conexão com internet para garantir a melhor precisão possível."
  },
  {
    question: "Posso registrar refeições sem foto?",
    answer: "Sim! Além do escaneamento por foto, você pode registrar refeições por comando de voz ou digitando manualmente. O app oferece uma base de dados com milhares de alimentos para busca rápida. Escolha o método que preferir!"
  },
  {
    question: "O app é gratuito?",
    answer: "O CamCal oferece funcionalidades gratuitas para você experimentar. Para acesso completo a todas as features, incluindo planos personalizados da IA, desafios exclusivos e histórico ilimitado, oferecemos planos acessíveis. Acesse o app para ver os preços atualizados!"
  },
];

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
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className={`font-semibold pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-orange-500 rotate-180' 
            : isDarkMode ? 'bg-white/10' : 'bg-orange-100'
        }`}>
          {isOpen ? (
            <Minus className={`w-4 h-4 ${isOpen ? 'text-white' : isDarkMode ? 'text-white' : 'text-orange-500'}`} />
          ) : (
            <Plus className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-orange-500'}`} />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
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

  return (
    <section ref={sectionRef} className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isDarkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200'}`}
          >
            <HelpCircle className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              Perguntas Frequentes
            </span>
          </motion.div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ainda tem{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              dúvidas?
            </span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Encontre respostas para as perguntas mais comuns sobre o CamCal.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isDarkMode={isDarkMode}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}