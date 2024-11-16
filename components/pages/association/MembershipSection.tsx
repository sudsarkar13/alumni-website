"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const membershipPlans = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "Access to alumni directory",
      "Newsletter subscription",
      "Basic event participation",
    ],
    recommended: false
  },
  {
    title: "Premium",
    price: "$50/year",
    features: [
      "All Basic features",
      "Exclusive networking events",
      "Mentorship program access",
      "Career resources",
      "Special recognition"
    ],
    recommended: true
  },
  {
    title: "Lifetime",
    price: "$500",
    features: [
      "All Premium features",
      "Lifetime membership",
      "VIP event access",
      "Leadership opportunities",
      "Legacy wall recognition"
    ],
    recommended: false
  }
];

export default function MembershipSection() {
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
          <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
          <p className="text-muted-foreground">
            Choose the membership that best suits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative ${plan.recommended ? 'border-primary' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {plan.title}
                  </CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 