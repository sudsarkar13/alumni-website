"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon, MailIcon } from "lucide-react"
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Leading our institution with over 20 years of academic excellence.",
    linkedin: "https://linkedin.com",
    email: "sarah.johnson@university.edu"
  },
  {
    name: "Prof. Michael Chen",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Specializing in academic affairs and institutional development.",
    linkedin: "https://linkedin.com",
    email: "michael.chen@university.edu"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Dean of Students",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Dedicated to student success and campus life enhancement.",
    linkedin: "https://linkedin.com",
    email: "emily.rodriguez@university.edu"
  },
  {
    name: "Dr. James Wilson",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Driving innovation and research excellence across departments.",
    linkedin: "https://linkedin.com",
    email: "james.wilson@university.edu"
  }
]

export default function AdminTeam() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries who guide our institution towards excellence and innovation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-32 w-32 border-4 border-primary/10">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                    <div className="flex gap-4">
                      <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <MailIcon className="h-5 w-5" />
                      </a>
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