"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion";

const departments = [
  {
    name: "Computer Science",
    description: "Exploring the frontiers of computing and digital innovation",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    faculty: 45,
    programs: ["B.S.", "M.S.", "Ph.D."]
  },
  {
    name: "Business Administration",
    description: "Developing future leaders in global business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    faculty: 38,
    programs: ["BBA", "MBA", "DBA"]
  },
  {
    name: "Engineering",
    description: "Creating solutions for tomorrow's challenges",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    faculty: 52,
    programs: ["B.E.", "M.E.", "Ph.D."]
  },
  {
    name: "Life Sciences",
    description: "Advancing knowledge in biology and healthcare",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    faculty: 41,
    programs: ["B.Sc.", "M.Sc.", "Ph.D."]
  }
]

export default function FacultyDepartments() {
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
          <h2 className="text-3xl font-bold mb-4">Academic Departments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse academic departments and their cutting-edge programs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <p className="font-medium">{dept.faculty} Faculty Members</p>
                        <p className="text-muted-foreground">{dept.programs.join(" • ")}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
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