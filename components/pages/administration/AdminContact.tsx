"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { motion } from "framer-motion";

export default function AdminContact() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Have questions? We're here to help and answer any question you might have.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-muted-foreground">admin@university.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-sm text-muted-foreground">123 University Ave, City, State 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="border-primary/20" />
                    <Input placeholder="Last Name" className="border-primary/20" />
                  </div>
                  <Input placeholder="Email" type="email" className="border-primary/20" />
                  <Input placeholder="Subject" className="border-primary/20" />
                  <Textarea 
                    placeholder="Your message" 
                    className="min-h-[120px] border-primary/20" 
                  />
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 