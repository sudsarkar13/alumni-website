'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const news = [
  {
    title: "Alumni Achievement: Sarah Chen Wins Nobel Prize",
    date: "March 15, 2024",
    excerpt: "Our distinguished alumna makes history with groundbreaking research in quantum computing, marking a significant milestone for our institution.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80",
    category: "Achievement"
  },
  {
    title: "New Mentorship Program Launch",
    date: "March 10, 2024",
    excerpt: "Connect with industry leaders through our exclusive mentorship initiative designed to foster professional growth and development.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80",
    category: "Program"
  },
  {
    title: "Global Alumni Summit 2024",
    date: "March 5, 2024",
    excerpt: "Join us for our biggest virtual gathering of alumni from around the world, featuring keynote speakers and networking sessions.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80",
    category: "Event"
  }
]

export default function AlumniNews() {
  return (
    <section className="py-24 bg-muted/50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container"
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-muted-foreground">Stay updated with the latest achievements and stories from our alumni community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary p-0 h-auto font-medium"
                  >
                    Read More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 