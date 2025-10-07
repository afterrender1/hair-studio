"use client";
import { useState } from "react";
import Image from "next/image";

// ✅ Import all your local images
import Haircut1 from "@/public/haircut1.png";
import Haircut2 from "@/public/haircut2.png";
import Haircut3 from "@/public/haircut3.png";
import Haircut4 from "@/public/haircut4.png";

import Shaving1 from "@/public/shaving1.png";
import Shaving2 from "@/public/shaving2.png";
import Shaving3 from "@/public/shaving3.png";
import Shaving4 from "@/public/shaving4.png";

import Trimming1 from "@/public/trimming1.png";
import Trimming2 from "@/public/trimming2.png";
import Trimming3 from "@/public/trimming3.png";
import Trimming4 from "@/public/trimming4.png";

import Hairstyle1 from "@/public/hairstyle1.png";
import Hairstyle2 from "@/public/hairstyle2.png";
import Hairstyle3 from "@/public/hairstyle3.png";
import Hairstyle4 from "@/public/hairstyle4.png";

// ✅ Organized all services with imported images
const allServices = {
  Haircut: [Haircut1, Haircut2, Haircut3, Haircut4],
  Shaving: [Shaving1, Shaving2, Shaving3, Shaving4],
  Trimming: [Trimming1, Trimming2, Trimming3, Trimming4],
  Hairstyle: [Hairstyle1, Hairstyle2, Hairstyle3, Hairstyle4],
};

export default function Services() {
  const [filter, setFilter] = useState("Haircut");
  const filters = Object.keys(allServices);

  return (
    <section className="py-16 bg-sky-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-sky-400">
          Our Services
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-sky-400 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-sky-100 border border-sky-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allServices[filter].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={img}
                alt={filter}
                className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-sky-400/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
                {filter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
