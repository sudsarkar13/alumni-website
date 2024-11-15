import { motion } from "framer-motion";
import { Card, CardContent } from "./card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 pr-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 