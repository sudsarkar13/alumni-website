"use client";

import AdminHero from "@/components/pages/administration/AdminHero"
import AdminStats from "@/components/pages/administration/AdminStats"
import AdminTeam from "@/components/pages/administration/AdminTeam"
import AdminContact from "@/components/pages/administration/AdminContact"
import { motion } from "framer-motion";

export default function AdministrationPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <AdminHero />
      <AdminStats />
      <AdminTeam />
      <AdminContact />
    </motion.main>
  )
} 