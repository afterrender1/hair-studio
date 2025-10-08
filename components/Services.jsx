"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const allServices = {
  Haircut: [
    { img: Haircut1, name: "Classic Haircut" },
    { img: Haircut2, name: "Modern Cut" },
    { img: Haircut3, name: "Fade Style" },
    { img: Haircut4, name: "Gentlemen’s Trim" },
  ],
  Shaving: [
    { img: Shaving1, name: "Clean Shave" },
    { img: Shaving2, name: "Royal Shave" },
    { img: Shaving3, name: "Beard Styling" },
    { img: Shaving4, name: "Hot Towel Shave" },
  ],
  Trimming: [
    { img: Trimming1, name: "Beard Trim" },
    { img: Trimming2, name: "Neckline Trim" },
    { img: Trimming3, name: "Mustache Trim" },
    { img: Trimming4, name: "Precision Trim" },
  ],
  Hairstyle: [
    { img: Hairstyle1, name: "Slick Back" },
    { img: Hairstyle2, name: "Pompadour" },
    { img: Hairstyle3, name: "Textured Crop" },
    { img: Hairstyle4, name: "Side Part" },
  ],
};

export default function Services() {
  const [filter, setFilter] = useState("Haircut");
  const [mounted, setMounted] = useState(false); // ✅ add mounted state
  const filters = Object.keys(allServices);

  useEffect(() => {
    setMounted(true); // ✅ only render after client mount
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.12, ease: "easeIn" } },
  };

  if (!mounted) return null; // ✅ prevent SSR mismatch

  return (
    <section className="py-16 md:py-20 bg-sky-50 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-sky-400">
            Services
          </h2>
          <p className="mt-4 mb-9 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            Discover professional grooming and styling crafted just for you.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-1 sm:gap-5 mb-10 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-t-md font-semibold text-sm sm:text-base transition-all duration-300 ${
                filter === f
                  ? "bg-sky-400 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-sky-100 border border-sky-200"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {allServices[filter].map((item, index) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.15, delay: index * 0.03 }}
                className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-white hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform transition-all"
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
                <div className="text-center py-3 sm:py-4 px-2">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
