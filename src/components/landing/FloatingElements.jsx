import React, { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';

export default function FloatingElements({ scrollProgress, isDarkMode }) {
  // Memoized transform values - removed heavy spring for better performance
  const yFireLeft = useTransform(scrollProgress, [0, 1], [0, -800]);
  const yFireRight = useTransform(scrollProgress, [0, 1], [0, -600]);
  const yApple = useTransform(scrollProgress, [0, 1], [0, -1200]);
  const rotateLeft = useTransform(scrollProgress, [0, 1], [0, 360]);
  const rotateRight = useTransform(scrollProgress, [0, 1], [0, -360]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.3]);

  // Memoized additional transforms
  const ySalad = useTransform(scrollProgress, [0, 1], [0, -900]);
  const yDumbbell = useTransform(scrollProgress, [0, 1], [0, -1100]);
  const yWater = useTransform(scrollProgress, [0, 1], [0, -700]);
  const yOrb1 = useTransform(scrollProgress, [0, 1], [0, -400]);
  const yOrb2 = useTransform(scrollProgress, [0, 1], [0, -600]);
  const scaleOrb1 = useTransform(scrollProgress, [0, 1], [1, 0.5]);
  const scaleOrb2 = useTransform(scrollProgress, [0, 1], [1, 0.6]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Left Floating Fire Emoji */}
      <motion.div
        style={{ y: yFireLeft, rotate: rotateLeft, opacity, willChange: 'transform' }}
        className="absolute left-[5%] top-[20%] text-5xl lg:text-6xl"
      >
        🔥
      </motion.div>

      {/* Right Floating Fire Emoji */}
      <motion.div
        style={{ y: yFireRight, rotate: rotateRight, opacity, willChange: 'transform' }}
        className="absolute right-[5%] top-[30%] text-4xl lg:text-5xl"
      >
        🔥
      </motion.div>

      {/* Floating Apple */}
      <motion.div
        style={{ y: yApple, scale, opacity, willChange: 'transform' }}
        className="absolute left-[8%] top-[50%] text-3xl lg:text-4xl"
      >
        🍎
      </motion.div>

      {/* Floating Salad */}
      <motion.div
        style={{ y: ySalad, opacity, willChange: 'transform' }}
        className="absolute right-[10%] top-[60%] text-3xl lg:text-4xl"
      >
        🥗
      </motion.div>

      {/* Floating Dumbbell */}
      <motion.div
        style={{ y: yDumbbell, opacity, willChange: 'transform' }}
        className="absolute left-[12%] top-[75%] text-3xl lg:text-4xl"
      >
        💪
      </motion.div>

      {/* Floating Water Drop */}
      <motion.div
        style={{ y: yWater, opacity, willChange: 'transform' }}
        className="absolute right-[15%] top-[45%] text-2xl lg:text-3xl"
      >
        💧
      </motion.div>

      {/* Orange Gradient Orbs */}
      <motion.div
        style={{ y: yOrb1, scale: scaleOrb1, willChange: 'transform' }}
        className={`absolute right-[-10%] top-[20%] w-64 h-64 rounded-full blur-3xl ${
          isDarkMode ? 'bg-orange-600/10' : 'bg-orange-400/20'
        }`}
      />

      <motion.div
        style={{ y: yOrb2, scale: scaleOrb2, willChange: 'transform' }}
        className={`absolute left-[-15%] top-[40%] w-80 h-80 rounded-full blur-3xl ${
          isDarkMode ? 'bg-orange-600/5' : 'bg-orange-300/15'
        }`}
      />
    </div>
  );
}