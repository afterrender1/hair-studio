"use client";
import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="w-full bg-sky-50 py-16 sm:py-20 md:py-28 border-t border-sky-100"
    >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center mb-8">
            Who{" "}
            <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              We Are
            </span>
          </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left image */}
        
        <div className="relative w-full">
          
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-80 sm:h-96 md:h-[600px]">
            <Image
              src="/teamimg.png"
              alt="Professional hair stylist working with client"
              fill
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>

          {/* Decorative sky ring */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-sky-400 rounded-full opacity-40 hidden md:block"></div>
        </div>

        {/* Right text content */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
      

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Deigo Hair Studio</span>, 
            we believe that healthy, radiant hair begins with knowledge and care.  
            Our mission is to empower clients through expert coaching, science-based routines, 
            and a deep understanding of their unique hair needs.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            With years of professional experience in styling, trichology, and wellness, 
            our team blends artistry with education — helping you achieve effortless beauty 
            and long-term hair confidence.
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <a
              href="#services"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white text-sm sm:text-base font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
