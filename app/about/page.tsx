"use client";

import AboutHero from "@/components/pages/about/AboutHero";
import SchoolHistory from "@/components/pages/about/SchoolHistory";
import SchoolVision from "@/components/pages/about/SchoolVision";
import SchoolAchievements from "@/components/pages/about/SchoolAchievements";
import SocialMediaLinks from "@/components/pages/about/SocialMediaLinks";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.4, delay: 0.4, ease: "easeIn" }}
      className="flex flex-col min-h-screen"
    >
      <AboutHero />
      <SchoolHistory />
      <SchoolVision />
      <SchoolAchievements />
      <SocialMediaLinks />
    </motion.main>
  );
} 