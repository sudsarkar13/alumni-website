"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building, Users, Globe } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop";

export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGE}
            alt="School Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            About Kendriya Vidyalaya Sangathan
          </h1>
          <p className="text-lg text-muted-foreground">
            A premier institution dedicated to providing quality education and shaping future leaders since its inception.
          </p>
        </motion.div>

        {/* Stats Grid */}
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
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/10 shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 