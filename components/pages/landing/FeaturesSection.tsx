"use client";

import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Calendar, Briefcase, Globe2, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with alumni worldwide and expand your professional network across industries and continents."
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Access member-only events, workshops, and networking sessions designed for career growth."
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Discover exclusive job postings and career opportunities shared by fellow alumni."
  },
  {
    icon: BookOpen,
    title: "Mentorship",
    description: "Participate in our mentorship program to guide or be guided by experienced professionals."
  },
  {
    icon: GraduationCap,
    title: "Learning Resources",
    description: "Access continuous learning materials, webinars, and professional development resources."
  },
  {
    icon: Globe2,
    title: "Global Chapters",
    description: "Join local alumni chapters and build meaningful connections in your area."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides all the tools and resources you need to grow professionally and stay connected with your alma mater.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-colors group">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 