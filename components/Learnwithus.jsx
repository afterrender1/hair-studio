"use client";
import React from "react";

export default function LearnWithUs() {
  const topics = [
    {
      title: "1:1 Hair Coaching",
      desc: "Personalized sessions to master your routine and learn what your hair truly needs.",
      img: "/learn1.jpg",
    },
    {
      title: "Healthy Hair Habits",
      desc: "Learn how nutrition, scalp care, and product choice work together for lasting results.",
      img: "/learn2.jpg",
    },
    {
      title: "Styling Masterclass",
      desc: "Discover salon-quality styling techniques you can easily do at home.",
      img: "/learn3.jpg",
    },
  ];

  // 🔁 Auto-generate more cards (repeat twice = 6 total)
  const extendedTopics = [...topics, ...topics];

  return (
    <section
      id="learn"
      className="w-full bg-white py-20 md:py-28 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Learn{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            With Us
          </span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Join our educational sessions and discover the science, artistry, and
          confidence behind every strand.
        </p>

        {/* 6 Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {extendedTopics.map((topic, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#book"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
          >
            Join a Session
          </a>
        </div>
      </div>
    </section>
  );
}
