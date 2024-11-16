"use client";

import AboutHero from "@/components/pages/about/AboutHero";
import SchoolHistory from "@/components/pages/about/SchoolHistory";
import SchoolVision from "@/components/pages/about/SchoolVision";
import SchoolAchievements from "@/components/pages/about/SchoolAchievements";
import SocialMediaLinks from "@/components/pages/about/SocialMediaLinks";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function AboutPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background/50 to-background"
    >
      <motion.div variants={sectionVariants}>
        <AboutHero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SchoolHistory />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SchoolVision />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SchoolAchievements />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SocialMediaLinks />
      </motion.div>
    </motion.main>
  );
} 