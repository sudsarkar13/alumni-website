"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const documents = [
  {
    title: "Batch 2023 Yearbook",
    type: "Yearbook",
    size: "15.2 MB",
    uploadDate: "2024-03-15",
    downloads: 234
  },
  {
    title: "Alumni Directory 2023",
    type: "Directory",
    size: "8.5 MB",
    uploadDate: "2024-03-10",
    downloads: 156
  },
  {
    title: "Graduation Ceremony Photos",
    type: "Gallery",
    size: "125 MB",
    uploadDate: "2024-03-05",
    downloads: 89
  }
];

export default function BatchDocuments() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: "easeIn" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Batch Documents</h2>
          <p className="text-muted-foreground">
            Access and download important batch-related documents and materials
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex-1 min-w-[200px] relative">
            <Input
              placeholder="Search documents..."
              className="w-full pl-10"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Document Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="yearbook">Yearbooks</SelectItem>
              <SelectItem value="directory">Directories</SelectItem>
              <SelectItem value="gallery">Galleries</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
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
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{doc.title}</h3>
                      <div className="text-sm text-muted-foreground mb-4">
                        <p>Type: {doc.type}</p>
                        <p>Size: {doc.size}</p>
                        <p>{doc.downloads} downloads</p>
                      </div>
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="outline" size="lg">
            Load More Documents
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 