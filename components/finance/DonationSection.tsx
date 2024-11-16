"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, CreditCard, History, FileText } from "lucide-react";

const donationTiers = [
  { amount: 1000, benefits: "Basic Supporter Badge" },
  { amount: 5000, benefits: "Silver Supporter Badge + Newsletter" },
  { amount: 10000, benefits: "Gold Supporter Badge + Event Access" }
];

export default function DonationSection() {
  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handleDonation = async () => {
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          method: paymentMethod,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Handle successful donation
        console.log("Donation successful");
      }
    } catch (error) {
      console.error("Donation failed:", error);
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Donation Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Make a Donation</h2>
              </div>

              <div className="grid gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {donationTiers.map((tier, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant={amount === tier.amount.toString() ? "default" : "outline"}
                          className="w-full h-auto py-4 flex flex-col gap-2"
                          onClick={() => setAmount(tier.amount.toString())}
                        >
                          <span className="text-xl font-bold">₹{tier.amount}</span>
                          <span className="text-sm text-muted-foreground">
                            {tier.benefits}
                          </span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Or Enter Custom Amount</h3>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="max-w-xs"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Payment Method</h3>
                  <Select
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <SelectTrigger className="max-w-xs">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="netbanking">Net Banking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleDonation}
                  disabled={!amount || !paymentMethod}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceed to Pay
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Donation History & Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <History className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Recent Donations</h3>
                </div>
                {/* Add donation history list here */}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Financial Reports</h3>
                </div>
                {/* Add financial reports list here */}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 