'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import type { ContactCard } from './type';

const contactCards: ContactCard[] = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    content: "+1 234 567 890",
    gradient: "from-emerald-400 to-cyan-400 dark:from-emerald-600 dark:to-cyan-600"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "contact@yourdomain.com",
    gradient: "from-violet-400 to-fuchsia-400 dark:from-violet-600 dark:to-fuchsia-600"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    content: "New York, NY",
    gradient: "from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600"
  }
];

export default function ContactCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="relative group"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 rounded-xl blur-lg dark:opacity-0 
              dark:group-hover:opacity-30"
              style={{ background: `linear-gradient(to right, ${card.gradient})` }}
            />
            <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm 
              rounded-xl p-6 shadow-lg transform transition-all duration-300 
              group-hover:-translate-y-2 border border-transparent dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${card.gradient} text-white`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{card.content}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 