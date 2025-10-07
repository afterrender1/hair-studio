"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl font-bold">Diego Hair Studio</h2>
          </div>
          <p className="text-white/90 mb-4">
            Elevate your hair game with expert coaching, styling, and guidance. Your hair deserves the best.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-sky-200 transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-sky-200 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-sky-200 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-sky-200 transition"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="#learn" className="hover:text-white transition">Learn With Us</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Client Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" /> contact@deigo.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5" /> New York, United States
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2 text-white/90">
            <li className="flex items-center gap-3"><Clock className="w-5 h-5" /> Mon – Fri: 11:00 AM – 8:00 PM</li>
            <li className="flex items-center gap-3"><Clock className="w-5 h-5" /> Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Afterrender. All rights reserved.
      </div>
    </footer>
  );
}
