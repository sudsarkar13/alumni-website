'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AlumniHero() {
  return (
    <section className="relative h-[90vh] bg-[#0B1120] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative container h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight lg:text-7xl/tight font-bold text-white">
            Welcome to the <span className="text-primary">Alumni</span> Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow graduates, share experiences, and stay updated with the latest opportunities and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base h-12 px-8 font-medium"
            >
              Join Network
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base h-12 px-8 font-medium"
            >
              Explore Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 