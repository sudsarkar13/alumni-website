"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Being part of this alumni network has opened countless doors for my career. The mentorship program was particularly transformative.",
    author: "Sarah Chen",
    role: "Product Manager at Google",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  },
  {
    quote: "The global alumni community helped me establish valuable connections when I moved to a new country. It's more than just a network.",
    author: "Michael Rodriguez",
    role: "Senior Architect at Foster + Partners",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    quote: "The events and workshops have been instrumental in keeping my skills current. It's like having a continuous learning platform.",
    author: "Emily Watson",
    role: "CEO of TechStart",
    avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Voices from Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from alumni who have found success and connection through our network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 