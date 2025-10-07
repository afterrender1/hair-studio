"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Review1 from "@/public/review1.png";
import Review2 from "@/public/review2.png";
import Review3 from "@/public/review3.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "I came in for a haircut and left feeling like a whole new person! The team at Luxe Hair Studio really listens and tailors every detail to your style. My stylist explained what would suit my face shape and gave me the best fade I’ve ever had. Highly recommended!",
    name: "Kristian Watson",
    role: "Business Manager",
    image: Review1, // Replace with actual image path
  },
  {
    id: 2,
    rating: 4,
    text: "From the ambiance to the service, everything felt luxurious yet welcoming. I got a beard trim and scalp treatment — both were done with such precision. It’s rare to find a salon that balances skill and comfort so perfectly.",
    name: "Kristian Watson",
    role: "UI Developer",
    image: Review2, // Replace with actual image path
  },
  {
    id: 3,
    rating: 4,
    text: "LI’ve been visiting Luxe Hair Studio for over a year now. Every visit feels consistent and personal. They always use top-quality products and ensure my hair stays healthy and stylish. The staff truly care about their clients",
    name: "Kristian Watson",
    role: "Business CEO",
    image: Review3, // Replace with actual image path
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-4">
            What our Client Says About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                    <span key={i + testimonial.rating} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm mb-6">{testimonial.text}</p>

                {/* Author Info */}
                <div className="flex items-start justify-start gap-4 ">
                  <Image className="rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                   height={200}
                   width={30}
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}