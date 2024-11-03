"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon, MailIcon, BookOpenIcon } from "lucide-react"
import { motion } from "framer-motion";

const facultyMembers = [
  {
    name: "Dr. Robert Chen",
    role: "Professor of Computer Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    specialization: "Artificial Intelligence",
    research: ["Machine Learning", "Neural Networks"],
    publications: 45,
    linkedin: "https://linkedin.com",
    email: "robert.chen@university.edu"
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Associate Professor of Business",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    specialization: "Strategic Management",
    research: ["Corporate Strategy", "Innovation"],
    publications: 32,
    linkedin: "https://linkedin.com",
    email: "lisa.thompson@university.edu"
  },
  {
    name: "Prof. David Kumar",
    role: "Professor of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialization: "Robotics",
    research: ["Automation", "Control Systems"],
    publications: 58,
    linkedin: "https://linkedin.com",
    email: "david.kumar@university.edu"
  },
  {
    name: "Dr. Sarah Martinez",
    role: "Assistant Professor of Biology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    specialization: "Molecular Biology",
    research: ["Genetics", "Cell Biology"],
    publications: 28,
    linkedin: "https://linkedin.com",
    email: "sarah.martinez@university.edu"
  }
]

export default function FacultyMembers() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Faculty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished faculty members leading research and innovation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
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
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.research.map((topic, i) => (
                          <Badge key={i} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <BookOpenIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{member.publications} publications</span>
                      </div>
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