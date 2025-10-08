"use client";

import React, { useState, useEffect } from "react";
import { Send, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    goals: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allFilled = Object.values(formData).every((value) => value.trim() !== "");
    setIsFormValid(allFilled);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(formData);
      
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setFormData({ name: "", email: "", experience: "", goals: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I’d like to learn more about your hair coaching programs."
    );
    window.open(`https://wa.me/+15551234567?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-sky-50 to-blue-100 relative overflow-hidden"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-sky-400 mb-3">
            Hair Coaching Inquiry
          </h2>
          <p className="mt-4 mb-9 text-gray-700 text-lg md:text-2xl max-w-2xl mx-auto">
            Ready to elevate your hair skills? Let’s connect and start your journey with personalized coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-md border border-sky-200 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Apply for Hair Coaching
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white transition"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Hair Experience (Years) *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 years"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white transition"
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Coaching Goal *
                </label>
                <input
                  type="text"
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="e.g., Learn advanced haircuts, styling, etc."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your hair background and goals..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-400 outline-none bg-white transition resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300
                  ${isFormValid
                    ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {isSubmitting ? "Submitting..." : <>
                  Submit Inquiry <Send className="w-5 h-5" />
                </>}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-md border border-sky-200 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Info</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:contact@deigo.com" className="text-sky-500 hover:underline">
                      contact@deigo.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+15551234567" className="text-sky-500 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">United States - New York</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon–Fri • 11 AM – 8 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-md border border-sky-200 rounded-2xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300">
              <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Quick WhatsApp Chat</h3>
              <p className="text-gray-600 mb-4">
                Get instant answers about our hair coaching sessions.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full py-3 px-6 rounded-lg border text-green-600 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {showToast && (
          <div
            role="alert"
            className="fixed bottom-6 right-6 bg-sky-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out"
            style={{ animationDuration: "3s" }}
          >
            ✅ Inquiry Sent! We’ll contact you soon.
          </div>
        )}
      </div>
    </section>
  );
}
