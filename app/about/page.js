'use client'
import AboutSection from '@/components/AboutSection/AboutSection'
import React from 'react'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AboutusHero from "../../public/Images/AboutusHero.jpg"
import wave from "@/public/Images/wave.webp";
import AnimatedUIloader from '@/components/AnimatedUIloader/AnimatedUIloader';
import ServicesSection from '@/components/ServicesComponent/ServiceSection';
import "aos/dist/aos.css"; 
import AOS from "aos";
import { useEffect } from "react";

const page = () => {
    useEffect(() => {
      AOS.init();
    }, []);

  return (

    <>
    <div>
         <div className="relative h-96 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={AboutusHero} // Replace with your actual image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Red Accent Shapes */}
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-blue-600/30 transform rotate-45 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-600/30 transform rotate-45 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">About Us</span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white">
        About Us
        </h1>
      </div>
    </div>

        
        <AboutSection/></div>
        <div>
        <AnimatedUIloader/>
      </div>
      <div data-aos="fade-up" 
        data-aos-duration="900" 
        data-aos-delay="200">
        <ServicesSection/>
      </div>
    {/* <Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/> */}
    </>
    
  )
}

export default page