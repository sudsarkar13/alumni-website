"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Download, Users } from "lucide-react";

interface AlumniData {
  id: number;
  name: string;
  role: string;
  company: string;
}

interface BatchData {
  totalStudents: number;
  alumni: AlumniData[];
}

export default function AlumniBatchDirectory() {
  const [selectedBatch, setSelectedBatch] = useState<string>("2023");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await fetch(
          `/api/batch?year=${selectedBatch}&search=${searchQuery}`
        );
        const data = await response.json();
        if (data.success) {
          setBatchData(data.data[selectedBatch]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch batch data:", error);
        setLoading(false);
      }
    };

    fetchBatchData();
  }, [selectedBatch, searchQuery]);

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          {/* Batch Selection and Search */}
          <div className="flex flex-wrap gap-4">
            <Select
              value={selectedBatch}
              onValueChange={setSelectedBatch}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023 Batch</SelectItem>
                <SelectItem value="2022">2022 Batch</SelectItem>
                <SelectItem value="2021">2021 Batch</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search alumni..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="w-4 h-4" />}
              />
            </div>
          </div>

          {/* Batch Statistics */}
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Total Alumni</h3>
                  <p className="text-3xl font-bold text-primary">
                    {batchData?.totalStudents || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {batchData?.alumni.map((alum, index) => (
              <motion.div
                key={alum.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{alum.name}</h3>
                    <p className="text-muted-foreground">{alum.role}</p>
                    <p className="text-primary">{alum.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Batch PDF Download */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Batch Directory
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 