'use client';

import { motion } from 'framer-motion';

const colorSchemes = {
  light: {
    gradients: [
      ['#8B5CF6', '#EC4899'],  // Purple to Pink
      ['#3B82F6', '#06B6D4'],  // Blue to Cyan
      ['#10B981', '#6366F1'],  // Emerald to Indigo
      ['#F59E0B', '#EF4444'],  // Amber to Red
      ['#6366F1', '#8B5CF6']   // Indigo to Purple
    ],
    opacity: 0.7
  },
  dark: {
    gradients: [
      ['#312E81', '#4C1D95'],  // Deeper Purple
      ['#1E3A8A', '#164E63'],  // Deeper Blue
      ['#065F46', '#312E81'],  // Deeper Emerald
      ['#92400E', '#7F1D1D'],  // Deeper Amber
      ['#312E81', '#4C1D95']   // Deeper Indigo
    ],
    opacity: 0.15
  }
};

const AnimatedBackground = () => {
  const isDark = false; // Replace with your actual dark mode detection
  const scheme = isDark ? colorSchemes.dark : colorSchemes.light;

  return (
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(${Math.random() * 360}deg, ${scheme.gradients[i][0]}, ${scheme.gradients[i][1]})`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            opacity: scheme.opacity
          }}
        />
      ))}
    </div>
  );
};

export default function ContactHero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Start a{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Conversation
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h1>
          <motion.p 
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
} 