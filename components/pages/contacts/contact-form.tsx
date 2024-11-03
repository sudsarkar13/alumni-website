'use client';

import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import type { ContactFormData } from './type';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 
        shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent 
        dark:border-gray-700 relative overflow-hidden group"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50
        dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-0 group-hover:opacity-100 
        transition-opacity duration-500" 
      />
      
      {/* Animated Accent Lines */}
      <motion.div
        className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r 
            from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: 'name', type: 'text', icon: <User className="h-5 w-5" />, label: 'Full Name', placeholder: 'John Doe' },
            { id: 'email', type: 'email', icon: <Mail className="h-5 w-5" />, label: 'Email Address', placeholder: 'john@example.com' }
          ].map((field) => (
            <motion.div
              key={field.id}
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor={field.id} 
                className="block text-sm font-medium mb-2 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                  text-transparent bg-clip-text
                  group-hover:from-indigo-400 group-hover:to-pink-400 
                  transition-all duration-300"
              >
                {field.label}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 
                  transition-all duration-300 group-hover:text-indigo-500 
                  group-hover:scale-110 z-10"
                >
                  {field.icon}
                </div>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-white dark:bg-gray-800 py-4 pl-12 pr-4 
                    rounded-xl border border-gray-200 dark:border-gray-700
                    shadow-sm focus:shadow-lg
                    transition-all duration-300
                    focus:border-transparent focus:outline-none focus:ring-2 
                    focus:ring-indigo-500 dark:focus:ring-indigo-400
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    group-hover:shadow-md group-hover:border-indigo-300 
                    dark:group-hover:border-indigo-700"
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                  required
                />
                <div className="absolute inset-0 rounded-xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 
                  blur-xl pointer-events-none" 
                />
              </div>
            </motion.div>
          ))}

          <motion.div
            className="relative group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" 
              className="block text-sm font-medium mb-2
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text
                group-hover:from-indigo-400 group-hover:to-pink-400 
                transition-all duration-300"
            >
              Your Message
            </label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-gray-400 
                transition-all duration-300 group-hover:text-indigo-500 
                group-hover:scale-110 z-10"
              >
                <MessageSquare className="h-5 w-5" />
              </div>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message here..."
                className="w-full bg-white dark:bg-gray-800 py-4 pl-12 pr-4 
                  rounded-xl border border-gray-200 dark:border-gray-700
                  shadow-sm focus:shadow-lg
                  transition-all duration-300
                  focus:border-transparent focus:outline-none focus:ring-2 
                  focus:ring-indigo-500 dark:focus:ring-indigo-400
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                  group-hover:shadow-md group-hover:border-indigo-300 
                  dark:group-hover:border-indigo-700
                  resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <div className="absolute inset-0 rounded-xl opacity-0 
                group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 
                blur-xl pointer-events-none" 
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full group mt-8"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000 
              group-hover:duration-200 animate-gradient"
            />
            <div className="relative flex items-center justify-center gap-2 px-8 py-4
              bg-white dark:bg-gray-800 rounded-lg leading-none
              transition-all duration-200 group-hover:bg-opacity-90"
            >
              <Send className="h-5 w-5 text-indigo-500 dark:text-indigo-400 transition-transform 
                duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 
                to-pink-500 bg-clip-text text-transparent">
                Send Message
              </span>
            </div>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
} 