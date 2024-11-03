'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Users, GraduationCap, ArrowRight } from "lucide-react"

const stats = [
  {
    icon: Heart,
    value: "$2M+",
    label: "Donations Raised",
    description: "Supporting student scholarships"
  },
  {
    icon: Users,
    value: "500+",
    label: "Students Supported",
    description: "Through alumni contributions"
  },
  {
    icon: GraduationCap,
    value: "100%",
    label: "Impact Rate",
    description: "Direct student benefit"
  }
]

export default function AlumniDonation() {
  return (
    <section className="py-24 bg-[#0B1120]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Make a Lasting Impact</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Your contribution helps shape the future of education by providing opportunities 
              for deserving students. Every donation, no matter the size, makes a difference 
              in building tomorrow's leaders.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-background/10 border-0 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-1 text-white">{stat.value}</h3>
                    <p className="text-muted-foreground font-medium mb-1">{stat.label}</p>
                    <p className="text-sm text-muted-foreground/80">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base h-12 px-8 font-medium"
              >
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base h-12 px-8 font-medium"
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
            className="relative lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80" 
              alt="Students"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 