"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap, Users, Building } from "lucide-react"
import { motion } from "framer-motion";

const stats = [
  {
    title: "Years of Excellence",
    value: "50+",
    icon: Award,
    description: "Delivering quality education",
  },
  {
    title: "Alumni Network",
    value: "50,000+",
    icon: GraduationCap,
    description: "Global community of graduates",
  },
  {
    title: "Faculty Members",
    value: "500+",
    icon: Users,
    description: "Expert educators and researchers",
  },
  {
    title: "Departments",
    value: "20+",
    icon: Building,
    description: "Diverse academic programs",
  }
]

export default function AdminStats() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                    <div>
                      <p className="font-semibold">{stat.title}</p>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 