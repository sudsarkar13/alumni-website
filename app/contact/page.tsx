'use client';

import { motion } from "framer-motion";
import ContactHero from '@/components/pages/contacts/contact-hero';
import ContactCards from '@/components/pages/contacts/contact-cards';
import ContactForm from '@/components/pages/contacts/contact-form';
import ContactInfo from '@/components/pages/contacts/contact-info';

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <ContactHero />
      <ContactCards />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </motion.main>
  );
}