"use client";

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const stats = [
  { number: "50K+", label: "Alumni Members" },
  { number: "120+", label: "Countries" },
  { number: "1000+", label: "Events Hosted" },
  { number: "200+", label: "Partner Companies" }
]

export function StatsSection() {
  return (
    <section className="py-20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-primary-foreground/10 border-none">
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 