"use client";
import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 py-20 md:py-28 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
            height={600}
            width={600}
              src="/image.png"
              alt="Professional hair stylist working with client"
           
            />
          </div>

          {/* Decorative gold ring */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-yellow-500 rounded-full opacity-40 hidden md:block"></div>
        </div>

        {/* Right text content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            Who <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">We Are</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Luxe Hair Studio</span>, 
            we believe that healthy, radiant hair begins with knowledge and care.  
            Our mission is to empower clients through expert coaching, science-based routines, 
            and a deep understanding of their unique hair needs.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            With years of professional experience in styling, trichology, and wellness, 
            our team blends artistry with education — helping you achieve effortless beauty 
            and long-term hair confidence.
          </p>

          <div className="pt-4">
            <a
              href="#services"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
