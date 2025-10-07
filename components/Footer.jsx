"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";
// import DoveLogo from "@/public/dove-logo.png"; // Replace with your dove image path in the public folder

export default function Footer() {
  return (
    <footer className="bg-sky-400 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* <Image
              src={DoveLogo}
              alt="Luxe Hair Studio Logo"
              width={40}
              height={40}
              className="object-contain"
            /> */}
            <h2 className="text-2xl font-bold">Luxe Hair Studio</h2>
          </div>
          <p className="text-white/90 mb-4">
            Elevate your style with expert cuts, treatments, and confidence.  
            Because your hair deserves the luxe touch.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-sky-100 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sky-100 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sky-100 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sky-100 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/90">
            <li>
              <a href="#about" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">Our Services</a>
            </li>
            <li>
              <a href="#learn" className="hover:text-white transition">Learn With Us</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition">Client Reviews</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" /> +92 323 5100033
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" /> info@luxestudio.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5" /> RJ Mall, Gate No 3, Karachi
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
          <p className="text-white/90">
            Monday – Saturday  
            <br />
            <span className="font-semibold">11:00 AM – 8:00 PM</span>
          </p>
          <p className="text-white/90 mt-2">Sunday – Closed</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Luxe Hair Studio. All rights reserved.
      </div>
    </footer>
  );
}