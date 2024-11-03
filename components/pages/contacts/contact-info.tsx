'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Check, Clock, MessageCircle, Sparkles } from 'lucide-react';
import type { SocialLink } from './type';
import { socialLinks } from './data';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gradient-to-br from-indigo-600 to-purple-600 
        dark:from-indigo-900 dark:to-purple-900 rounded-2xl p-8 shadow-lg 
        text-white relative overflow-hidden backdrop-blur-sm"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold"
        >
          Let's Connect
          <div className="h-1 w-20 bg-white/30 rounded-full mt-2" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-3 mb-8 text-white/80 text-sm leading-relaxed"
        >
          Ready to transform your ideas into reality? I'm here to help bring your vision to life. 
          Whether you have a specific project in mind or just want to explore possibilities, 
          let's start a conversation.
        </motion.p>

        {/* Contact Details */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/70">Email</p>
              <p className="group-hover:translate-x-2 transition-transform duration-300">
                contact@yourdomain.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/70">Phone</p>
              <p className="group-hover:translate-x-2 transition-transform duration-300">
                +1 234 567 890
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-white/70">Location</p>
              <p className="group-hover:translate-x-2 transition-transform duration-300">
                New York, NY
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect on Social</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 
                  transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm 
                  group-hover:blur-md transition-all duration-300" />
                <div className="relative">
                  {link.platform === 'GitHub' && <Github className="h-5 w-5" />}
                  {link.platform === 'LinkedIn' && <Linkedin className="h-5 w-5" />}
                  {link.platform === 'Twitter' && <Twitter className="h-5 w-5" />}
                </div>
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap 
                    text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                >
                  {link.platform}
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 
            transition-all duration-300 space-y-2"
          >
            <p className="text-sm leading-relaxed">
              Available for freelance opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <p className="text-sm text-white/70 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Response time: within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 