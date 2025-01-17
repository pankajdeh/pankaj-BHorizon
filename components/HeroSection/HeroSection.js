'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import  HeroImage from "../../public/Images/Hero.png"
import  Aboutus from "../../public/Images/Aboutus.png"

const heroContent = [
  {
    id: 1,
    title: "ANALYTICAL REPORTING",
    description: "Acquiring and utilising accurate information in the form of analytical data is fundamental to many. We at Beyond Horizon It Services give consistent reporting that incorporates analysis of various factors and performance based on the results.",
    image: HeroImage,
  },
  {
    id: 2,
    title: "DATA INSIGHTS",
    description: "Transform your raw data into actionable insights with our advanced analytics platform. Get deeper understanding of your business metrics and performance indicators.",
    image: Aboutus,
  },
  {
    id: 3,
    title: "BUSINESS METRICS",
    description: "Track and analyze key performance indicators with our comprehensive business metrics solutions. Make data-driven decisions with confidence.",
    image: HeroImage,
  }
]

export default function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
    
    <div className="hidden md:block lg:block  relative mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8 overflow-hidden bg-contain bg-no-repeat"
    style={{
      background: 'url("/Images/slider-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
      {/* Text Section */}
      <div className="   order-1 lg:order-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-[#447ab1] sm:text-6xl  md:text-6xl">
              {heroContent[currentSlide].title}
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              {heroContent[currentSlide].description}
            </p>
            <Button 
              size="lg"
              className="bg-[#447ab1] hover:bg-blue-700"
            >
              Contact Us
            </Button>
          </motion.div>
        </AnimatePresence>
  
        <div className="mt-12 flex flex gap-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`text-xl font-semibold transition-colors duration-200 ${
                currentSlide === index ? 'text-blue-600' : 'text-gray-400'
              }`}
              aria-label={`Show slide ${index + 1}`}
            >
              {/* {String(index + 1).padStart(2, '0')} */}
              {currentSlide === index ? '●' : '○'}
            </button>
          ))}
        </div>


      </div>
  
      {/* Image Section */}
      <div className="relative order-2 lg:order-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div style={{
    borderRadius: '63% 37% 23% 77% / 35% 43% 57% 75% '}} className="relative h-[400px] mt-10 lg:w-[500px] overflow-hidden  bg-white/50 backdrop-blur-3xl  shadow-xl">
              <Image
                src={heroContent[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                fill
                className="object-fill"
                priority
                style={{
                  borderRadius: '63% 37% 23% 77% / 35% 43% 57% 75% '}}
              />
            </div>
            {/* Decorative circle */}
            {/* <div className="absolute bottom-4 -left-4 h-24 w-24 rounded-full bg-red-300/50 backdrop-blur-sm" /> */}
            {/* <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-red-300/50 backdrop-blur-sm" /> */}
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-purple-100/50 backdrop-blur-sm" />
            {/* <div className="absolute -top-4 left-0 right-4 h-24 z-10 w-24 rounded-full bg-purple-100/50 backdrop-blur-sm" /> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </div>

    <div
      className="lg:hidden md:hidden relative mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'url("/Images/slider-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto"
            >
              <h1 className="mb-4 text-xl font-bold tracking-tight text-[#447ab1] sm:text-3xl">
                {heroContent[currentSlide].title}
              </h1>
              <p className="mb-6 text-sm text-gray-600">
                {heroContent[currentSlide].description}
              </p>
              <Button
                size="lg"
                className="w-full lg:w-auto bg-[#447ab1] hover:bg-blue-700"
              >
                Contact Us
              </Button>
            </motion.div>
          </AnimatePresence>


<div className="mt-8 flex justify-center gap-4 lg:justify-start">
  {heroContent.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`text-lg font-semibold transition-colors duration-200 ${
        currentSlide === index ? 'text-blue-600' : 'text-gray-400'
      }`}
      aria-label={`Show slide ${index + 1}`}
    >
       {/* {String(index + 1).padStart(2, '0')} */}
      {currentSlide === index ? '●' : '○'}
    </button>
  ))}
</div>



        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto"
            >
              <div
                style={{
                  borderRadius: '63% 37% 23% 77% / 35% 43% 57% 75%',
                }}
                className="relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] overflow-hidden bg-white/50 backdrop-blur-3xl shadow-xl mx-auto"
              >
                <Image
                  src={heroContent[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority
                  style={{
                    borderRadius: '63% 37% 23% 77% / 35% 43% 57% 75%',
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
    </>
 
  
  )
}
