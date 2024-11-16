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
import { Search, Download, Users, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface AlumniData {
  id: number;
  name: string;
  role: string;
  company: string;
  batch?: string;
  email?: string;
}

interface BatchData {
  totalStudents: number;
  alumni: AlumniData[];
}

export default function AlumniBatchDirectory() {
  const router = useRouter();
  const [selectedBatch, setSelectedBatch] = useState<string>("2023");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Generate batch years dynamically
  const currentYear = new Date().getFullYear();
  const batchYears = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString());

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/batch?year=${selectedBatch}&search=${searchQuery}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch batch data');
        }

        const data = await response.json();
        if (data.success) {
          setBatchData(data.data[selectedBatch]);
        } else {
          throw new Error(data.message || 'Failed to fetch batch data');
        }
      } catch (error) {
        console.error("Failed to fetch batch data:", error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchBatchData, 300);
    return () => clearTimeout(debounceTimeout);
  }, [selectedBatch, searchQuery]);

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/batch/download?year=${selectedBatch}`);
      if (!response.ok) throw new Error('Failed to download directory');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `batch-${selectedBatch}-directory.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

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
                {batchYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year} Batch
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alumni..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-destructive text-center p-4">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : (
            <>
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
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{alum.name}</h3>
                        <p className="text-muted-foreground">{alum.role}</p>
                        <p className="text-primary">{alum.company}</p>
                        {alum.email && (
                          <p className="text-sm text-muted-foreground mt-2">{alum.email}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Batch PDF Download */}
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4" />
                  Download Batch Directory
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
} 