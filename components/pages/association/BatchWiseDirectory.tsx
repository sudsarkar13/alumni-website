"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Download, Users } from "lucide-react";
import BatchPDFViewer from "@/components/batch/BatchPDFViewer";

export default function BatchWiseDirectory() {
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const batches = Array.from({ length: 10 }, (_, i) => (2024 - i).toString());

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
          <h2 className="text-3xl font-bold mb-4">Alumni Directory</h2>
          <p className="text-muted-foreground">
            Find and connect with your batchmates
          </p>
        </motion.div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select
                value={selectedBatch}
                onValueChange={setSelectedBatch}
              >
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select Batch" />
                </SelectTrigger>
                <SelectContent>
                  {batches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      Batch {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex-1 relative">
                <Input
                  placeholder="Search alumni..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {selectedBatch && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BatchPDFViewer 
              batchYear={selectedBatch} 
              pdfUrl={`/api/batch/${selectedBatch}/pdf`} 
            />
          </motion.div>
        )}
      </div>
    </section>
  );
} 