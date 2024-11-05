'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const news = [
  {
    title: "Alumni Achievement: Sarah Chen Wins Nobel Prize",
    date: "March 15, 2024",
    excerpt: "Our distinguished alumna makes history with groundbreaking research in quantum computing, marking a significant milestone for our institution.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80",
    category: "Achievement",
    readTime: "5 min read"
  },
  {
    title: "New Mentorship Program Launch",
    date: "March 10, 2024",
    excerpt: "Connect with industry leaders through our exclusive mentorship initiative designed to foster professional growth and development.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80",
    category: "Program",
    readTime: "4 min read"
  },
  {
    title: "Global Alumni Summit 2024",
    date: "March 5, 2024",
    excerpt: "Join us for our biggest virtual gathering of alumni from around the world, featuring keynote speakers and networking sessions.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80",
    category: "Event",
    readTime: "3 min read"
  }
]

export default function AlumniNews() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f620,transparent)]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:96px_96px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-conic from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-conic from-secondary/20 via-primary/20 to-secondary/20 blur-3xl" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-24 relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 bg-secondary/20 blur-3xl animate-pulse-glow delay-75" />
          </div>
          
          <Sparkles className="w-6 h-6 text-primary absolute top-0 right-20 animate-bounce" />
          <Sparkles className="w-4 h-4 text-secondary absolute bottom-10 left-20 animate-pulse" />
          
          <motion.h2 
            className="relative font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-secondary/5 dark:text-secondary/10 blur-sm">
              News
            </span>
            <span className="relative text-5xl">
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
                Latest
              </span>
              {" "}
              <span className="bg-gradient-to-l from-primary via-secondary to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient">
                News
              </span>
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-secondary/50 via-primary/50 to-secondary/50 blur-sm" />
          </motion.h2>
          <p className="text-muted-foreground text-lg relative z-10">
            Stay updated with the latest achievements and stories from our alumni community
          </p>
        </motion.div>
        
        {/* News Grid - Rest of the component stays the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden backdrop-blur-xl bg-background/40 border-primary/10">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-52 object-cover"
                    />
                    <Badge 
                      className="absolute top-4 right-4 z-20 bg-primary/90 hover:bg-primary backdrop-blur-md"
                    >
                      {item.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-3">
                        <motion.div 
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm">{item.date}</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm">{item.readTime}</span>
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {item.excerpt}
                      </p>

                      <div className="pt-4 border-t border-primary/10">
                        <Button 
                          className="group/btn relative overflow-hidden w-full"
                          variant="ghost"
                        >
                          <span className="relative z-10 group-hover/btn:text-primary transition-colors">
                            Read Full Story
                          </span>
                          <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  )
} 