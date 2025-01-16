'use client'
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, } from 'lucide-react';
import Aboutus from "@/public/Images/Aboutus.png"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Julian Clarke",
    position: "CEO, Versafit",
    message:
      "They manifested our concepts, and were quite responsive. I could easily say it is one of the most trouble-free implementations I have encountered.",
    image: Aboutus
  },
  {
    name: "Emily Smith",
    position: "Product Manager, TechCorp",
    message:
      "The team was exceptional in delivering exactly what we needed, on time, and within budget.",
    image: Aboutus
  },
  {
    name: "John Doe",
    position: "CTO, StartUp Hub",
    message:
      "Beyond impressed by their dedication and attention to detail. They are a great partner for any tech project.",
    image: Aboutus
  },
];

export default function Testimonials() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000"  className="relative bg-dot-pattern min-h-[400px] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Client <span className="relative">
            Testimonials
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#447ab1]"></span>
          </span>
        </h2>

        <div className="relative mt-8">
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-2 shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="mx-16">
            <p className="text-gray-700 text-lg italic mb-12 leading-relaxed">
              "{testimonials[currentIndex].message}"
            </p>
            
            <div className="flex flex-col items-center justify-center">
              <Image
                src={testimonials[currentIndex].image}
                alt=""
                className="w-20 h-20 rounded-full border-2 border-gray-200 mb-4"
              />
              <p className="text-gray-800 font-semibold text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-500">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-2 shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-[#447ab1] w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

