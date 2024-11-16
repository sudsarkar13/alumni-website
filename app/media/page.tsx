"use client";

import { motion } from "framer-motion";
import MediaHero from "@/components/pages/media/MediaHero";
import PhotoGallery from "@/components/pages/media/PhotoGallery";
import VideoSection from "@/components/pages/media/VideoSection";
import NewsSection from "@/components/pages/media/NewsSection";
import BatchDocuments from "@/components/pages/media/BatchDocuments";

// Reuse the same animation variants
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

export default function MediaPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background/50 to-background"
    >
      <motion.div variants={sectionVariants}>
        <MediaHero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <PhotoGallery />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <VideoSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <NewsSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <BatchDocuments />
      </motion.div>
    </motion.main>
  );
} 