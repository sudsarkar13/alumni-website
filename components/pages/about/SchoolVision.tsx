"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Book, Users, Star } from "lucide-react";

const VISION_BG = "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop";

export default function SchoolVision() {
  const visionPoints = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To develop a community of continuous learners and leaders"
    },
    {
      icon: Book,
      title: "Our Mission",
      description: "To provide quality education that empowers students for life"
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Excellence, Integrity, Innovation, and Inclusivity"
    },
    {
      icon: Star,
      title: "Our Goals",
      description: "Preparing students for global challenges and opportunities"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <point.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 