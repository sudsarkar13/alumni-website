"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const news = [
  {
    title: "Alumni Achievement: Dr. Sarah Chen's Breakthrough Research",
    date: "March 15, 2024",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Our distinguished alumna makes history with groundbreaking research in quantum computing.",
    readTime: "5 min"
  },
  {
    title: "Annual Alumni Meet 2024: A Grand Success",
    date: "March 10, 2024",
    category: "Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Over 500 alumni gathered for our biggest reunion yet, sharing memories and creating new ones.",
    readTime: "4 min"
  },
  {
    title: "New Scholarship Program Launched",
    date: "March 5, 2024",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Alumni association announces new scholarship opportunities for underprivileged students.",
    readTime: "3 min"
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: "easeIn" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest stories and achievements from our alumni community
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="achievement">Achievements</SelectItem>
              <SelectItem value="event">Events</SelectItem>
              <SelectItem value="announcement">Announcements</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="latest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="ghost" className="group/btn w-full">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 