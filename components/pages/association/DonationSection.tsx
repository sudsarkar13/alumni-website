"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Trophy, Users, Target } from "lucide-react";

const donationTiers = [
  {
    amount: 100,
    title: "Supporter",
    perks: ["Name on Donor Wall", "Newsletter Access"]
  },
  {
    amount: 500,
    title: "Patron",
    perks: ["Supporter Benefits", "Event Priority Access", "Exclusive Updates"]
  },
  {
    amount: 1000,
    title: "Benefactor",
    perks: ["Patron Benefits", "VIP Event Access", "Recognition Award"]
  }
];

export default function DonationSection() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedTier, setSelectedTier] = useState("");

  const handleDonation = async () => {
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedTier || customAmount,
          tier: selectedTier ? donationTiers.find(t => t.amount.toString() === selectedTier)?.title : 'Custom'
        }),
      });

      if (!response.ok) throw new Error('Donation failed');
      
      // Handle successful donation
    } catch (error) {
      // Handle error
      console.error('Donation error:', error);
    }
  };

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
          <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
          <p className="text-muted-foreground">
            Your contribution helps us create better opportunities for future generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <RadioGroup
                    value={selectedTier}
                    onValueChange={setSelectedTier}
                  >
                    {donationTiers.map((tier, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={tier.amount.toString()} id={`tier-${index}`} />
                        <Label htmlFor={`tier-${index}`}>
                          ${tier.amount} - {tier.title}
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom Amount</Label>
                    </div>
                  </RadioGroup>

                  {selectedTier === 'custom' && (
                    <div className="space-y-2">
                      <Label htmlFor="customAmount">Enter Amount</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                    </div>
                  )}

                  <Button 
                    className="w-full"
                    onClick={handleDonation}
                  >
                    Donate Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {donationTiers.map((tier, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{tier.title} Benefits</h3>
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-primary" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 