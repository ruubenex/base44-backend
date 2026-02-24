import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Camera, Zap, Target, Droplets, Trophy, Users, ChevronDown, Flame, Apple, Dumbbell, ChefHat, Sparkles, Check, Star, ArrowRight, Plus, Minus } from 'lucide-react';

import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import AISection from '@/components/landing/AISection';
import AppShowcase from '@/components/landing/AppShowcase';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import FooterCTA from '@/components/landing/FooterCTA';
import FloatingElements from '@/components/landing/FloatingElements';
import ThemeTransition from '@/components/landing/ThemeTransition';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setIsDarkMode(value > 0.4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Floating Elements that follow scroll */}
      <FloatingElements scrollProgress={scrollYProgress} isDarkMode={isDarkMode} />
      
      {/* Theme Transition Overlay */}
      <ThemeTransition scrollProgress={scrollYProgress} />

      {/* Light Theme Sections */}
      <div className={`transition-colors duration-1000 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'}`}>
        <HeroSection />
        <FeaturesSection isDarkMode={isDarkMode} />
        <AISection isDarkMode={isDarkMode} />
        <AppShowcase isDarkMode={isDarkMode} />
        <TestimonialsSection isDarkMode={isDarkMode} />
        <FAQSection isDarkMode={isDarkMode} />
        <FooterCTA isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}