"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Download, TrendingUp, PieChart, DollarSign } from "lucide-react";

const financialData = [
  { year: "2019", amount: 250000 },
  { year: "2020", amount: 320000 },
  { year: "2021", amount: 420000 },
  { year: "2022", amount: 550000 },
  { year: "2023", amount: 680000 },
];

const stats = [
  {
    icon: DollarSign,
    label: "Total Funds",
    value: "$2.5M",
    change: "+12.5%",
    trend: "up"
  },
  {
    icon: TrendingUp,
    label: "Annual Growth",
    value: "15.3%",
    change: "+2.1%",
    trend: "up"
  },
  {
    icon: PieChart,
    label: "Fund Allocation",
    value: "98.2%",
    change: "+0.5%",
    trend: "up"
  }
];

export default function FinanceSection() {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Financial Overview</h2>
          <p className="text-muted-foreground">
            Transparent management of alumni contributions and fund allocation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                    <span className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold">Fund Growth</h3>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 