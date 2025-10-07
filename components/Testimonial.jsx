"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import Review1 from "@/public/review1.png";
import Review2 from "@/public/review2.png";
import Review3 from "@/public/review3.png";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Diego Hair Studio’s coaching boosted my confidence with advanced cutting techniques and practical, one-on-one guidance. Truly transformative!",
    name: "Ethan Carter",
    role: "Salon Owner — California",
    image: Review1,
  },
  {
    id: 2,
    rating: 5,
    text: "Before joining Diego’s coaching program, I struggled with modern fades and precision styling. Within weeks, my technique and speed improved dramatically.",
    name: "Emily Parker",
    role: "Professional Barber — Los Angeles",
    image: Review2,
  },
  {
    id: 3,
    rating: 4,
    text: "The mentorship I received from Diego Hair Studio was exactly what I needed to take my hairstyling career to the next level. Diego’s feedback is always constructive and inspiring.",
    name: "Logan Mitchell",
    role: "Hair Stylist — Los Angeles",
    image: Review3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-sky-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our customers love the Deigo experience — professional, personalized, and always premium.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="py-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                    <span key={i + testimonial.rating} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    className="rounded-full shadow-sm"
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={60}
                    width={60}
                    style={{ objectFit: "cover" }}
                  />
                  <div>
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
