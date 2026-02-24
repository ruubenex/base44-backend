import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function ThemeTransition({ scrollProgress }) {
  // Create a smooth transition overlay
  const opacity = useTransform(scrollProgress, [0.35, 0.5], [0, 1]);
  const backdropBlur = useTransform(scrollProgress, [0.35, 0.5], [0, 10]);

  return (
    <>
      {/* Dark Theme Overlay - Fades in as you scroll */}
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 pointer-events-none z-0 bg-[#0A0A0A]"
      />

      {/* Transition Wave Effect - Simplified */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]),
        }}
        className="fixed inset-0 pointer-events-none z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
      </motion.div>

      {/* Glow Line at transition point */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollProgress, [0.35, 0.45, 0.55], [0, 1, 0]),
          top: '50vh',
        }}
        className="fixed left-0 right-0 h-px pointer-events-none z-20"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-lg shadow-orange-500/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-md" />
      </motion.div>
    </>
  );
}