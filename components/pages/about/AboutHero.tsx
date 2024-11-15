"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building, Users, Globe } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-16" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Kendriya Vidyalaya Sangathan
          </h1>
          <p className="text-lg text-muted-foreground">
            A premier institution dedicated to providing quality education and shaping future leaders since its inception.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building, label: "Schools", value: "1,248+" },
            { icon: Users, label: "Students", value: "1.3M+" },
            { icon: GraduationCap, label: "Alumni", value: "10M+" },
            { icon: Globe, label: "States", value: "25+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 