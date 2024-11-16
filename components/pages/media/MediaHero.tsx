"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Image, Newspaper } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop";

export default function MediaHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGE}
            alt="Media Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: "easeIn" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of memories, achievements, and milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Image, label: "Photo Gallery", count: "1000+" },
            { icon: Play, label: "Video Archive", count: "200+" },
            { icon: Newspaper, label: "News Articles", count: "500+" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full h-32 flex flex-col items-center justify-center gap-4 bg-card/50 backdrop-blur-sm hover:bg-card/80"
              >
                <item.icon className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-xl">{item.count}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 