"use client";

import { motion } from "framer-motion";
import AssociationHero from "@/components/pages/association/AssociationHero";
import OrganizationStructure from "@/components/pages/association/OrganizationStructure";
import BatchWiseDirectory from "@/components/pages/association/BatchWiseDirectory";
import MembershipSection from "@/components/pages/association/MembershipSection";
import FinanceSection from "@/components/pages/association/FinanceSection";
import DonationSection from "@/components/pages/association/DonationSection";

// Reuse the same animation variants from about page
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

export default function AssociationPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background/50 to-background"
    >
      <motion.div variants={sectionVariants}>
        <AssociationHero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <OrganizationStructure />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <BatchWiseDirectory />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <MembershipSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <FinanceSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <DonationSection />
      </motion.div>
    </motion.main>
  );
} 