"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

const milestones = [
  {
    year: "1963",
    title: "Establishment",
    description: "KVS was established under the Ministry of Education"
  },
  {
    year: "1965",
    title: "First Schools",
    description: "Opening of first 20 Kendriya Vidyalayas"
  },
  // Add more milestones
];

const HISTORY_IMAGES = {
  establishment: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
  growth: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
};

export default function SchoolHistory() {
  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Journey Through Time</h2>
          <p className="text-muted-foreground">
            Discover the rich history and evolution of Kendriya Vidyalaya Sangathan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Timeline items={milestones} />
        </motion.div>
      </div>
    </section>
  );
} 