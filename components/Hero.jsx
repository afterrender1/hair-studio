"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-white py-20 md:py-28 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left text content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Elevate Your Look with <br />
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              Luxe Hair Coaching
            </span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Personalized coaching sessions that help you master your hair care,
            understand your unique texture, and achieve salon-quality results at
            home.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              Book a Free Call
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-yellow-600 text-yellow-700 font-semibold text-sm hover:bg-yellow-50 transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right side - YouTube video */}
       <iframe className="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/TMfLA3fpGVo?si=joe_6CFo70bkQAKz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}
