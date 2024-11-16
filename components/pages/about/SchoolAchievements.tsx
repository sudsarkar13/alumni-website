"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "National Excellence Award",
    category: "Education",
    description: "Recognized for outstanding contribution to education"
  },
  // Add more achievements
];

const ACHIEVEMENT_IMAGES = {
  awards: "https://images.unsplash.com/photo-1569038786784-24a715a36507?q=80&w=2070&auto=format&fit=crop",
  recognition: "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=2069&auto=format&fit=crop",
};

export default function SchoolAchievements() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground">
            Celebrating excellence and recognition in education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <Trophy className="w-8 h-8 text-primary mb-4" />
                  <Badge className="mb-2">{achievement.year}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 