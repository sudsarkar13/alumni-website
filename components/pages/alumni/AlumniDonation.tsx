'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Users, GraduationCap, ArrowRight, Sparkles } from "lucide-react"

const stats = [
  {
    icon: Heart,
    value: "$2M+",
    label: "Donations Raised",
    description: "Supporting student scholarships",
    color: "text-rose-500 dark:text-rose-400"
  },
  {
    icon: Users,
    value: "500+",
    label: "Students Supported",
    description: "Through alumni contributions",
    color: "text-blue-500 dark:text-blue-400"
  },
  {
    icon: GraduationCap,
    value: "100%",
    label: "Impact Rate",
    description: "Direct student benefit",
    color: "text-emerald-500 dark:text-emerald-400"
  }
]

export default function AlumniDonation() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1120] dark:to-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-semibold">Double Impact: Matching Donations Available</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
              Make a Lasting <span className="text-primary">Impact</span> on Future Generations
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">
              Your contribution helps shape the future of education by providing opportunities 
              for deserving students. Every donation, no matter the size, makes a difference 
              in building tomorrow's leaders.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  key={index}
                >
                  <Card className="bg-white dark:bg-background/10 border border-slate-200 dark:border-white/10 hover:border-primary/20 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-background/20 transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="p-6">
                      <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                      <h3 className="text-3xl font-bold mb-1 text-slate-800 dark:text-white">{stat.value}</h3>
                      <p className="text-primary font-semibold mb-1">{stat.label}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-300">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base h-14 px-8 font-medium bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg shadow-primary/10"
              >
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base h-14 px-8 font-medium bg-slate-100 hover:bg-slate-200 dark:bg-secondary hover:scale-105 transition-all duration-300 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative lg:h-[600px] group"
          >
            <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-2xl transition-all duration-300 group-hover:bg-primary/10"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80" 
              alt="Students"
              className="w-full h-full object-cover rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent dark:from-[#0B1120]/80 rounded-2xl"></div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-background/20 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-white/20 shadow-lg">
              <h4 className="text-slate-800 dark:text-white font-semibold mb-2">Your Impact</h4>
              <p className="text-slate-600 dark:text-white/80 text-sm">
                "Every $1000 donated provides a semester's worth of educational resources for a student in need."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 