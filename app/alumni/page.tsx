"use client";

import AlumniHero from "@/components/pages/alumni/AlumniHero"
import AlumniDirectory from "@/components/pages/alumni/AlumniDirectory"
import AlumniEvents from "@/components/pages/alumni/AlumniEvents"
import AlumniNews from "@/components/pages/alumni/AlumniNews"
import AlumniDonation from "@/components/pages/alumni/AlumniDonation"
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AlumniPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="flex flex-col min-h-screen"
    >
      <AlumniHero />
      <AlumniDirectory />
      <AlumniEvents />
      <AlumniNews />
      <AlumniDonation />
    </motion.main>
  )
} 