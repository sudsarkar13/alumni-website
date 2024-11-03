'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { LinkedinIcon, TwitterIcon, GlobeIcon } from "lucide-react"

const alumniProfiles = [
  {
    name: "Sarah Johnson",
    graduation: "2019",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80",
    role: "Software Engineer",
    company: "Google",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Michael Chen",
    graduation: "2018",
    department: "Business Administration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80",
    role: "Senior Consultant",
    company: "Deloitte",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  // Add more profiles...
]

export default function AlumniDirectory() {
  return (
    <section className="py-20 bg-muted/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Alumni Directory</h2>
          <p className="text-muted-foreground">
            Connect with fellow alumni and expand your professional network
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <Input 
              placeholder="Search by name or company..." 
              className="md:w-1/2"
            />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Class Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={profile.image} 
                        alt={profile.name}
                        className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/10"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{profile.name}</h3>
                        <p className="text-muted-foreground text-sm">{profile.role} at {profile.company}</p>
                        <p className="text-xs text-primary mt-1">Class of {profile.graduation}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex gap-3">
                      {profile.social.linkedin && (
                        <LinkedinIcon className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      )}
                      {profile.social.twitter && (
                        <TwitterIcon className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      )}
                      {profile.social.website && (
                        <GlobeIcon className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 