"use client";

import FacultyHero from "@/components/pages/faculty/FacultyHero"
import FacultyStats from "@/components/pages/faculty/FacultyStats"
import FacultyDepartments from "@/components/pages/faculty/FacultyDepartments"
import FacultyMembers from "@/components/pages/faculty/FacultyMembers"
import FacultyContact from "@/components/pages/faculty/FacultyContact"
import { motion } from "framer-motion";

export default function FacultyPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <FacultyHero />
      <FacultyStats />
      <FacultyDepartments />
      <FacultyMembers />
      <FacultyContact />
    </motion.main>
  )
} 