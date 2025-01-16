'use client'
import { Lightbulb, Code, TrendingUp } from 'lucide-react'
import wave from "@/public/Images/wave.webp";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function WhyYouNeedUs() {



    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200" >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Why You Need Us
          </h1> */}

          <h2 className="text-3xl font-bold text-center mt-10">
    {/* Our Approach <span className="border-b-4 border-[#447ab1] pb-1">(How We Do It)</span> */}
    Why You Need Us
      </h2>

          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Empowering your business with cutting-edge solutions and expertise
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard 
            icon={<Lightbulb className="h-8 w-8 text-indigo-600" />}
            title="Unlock Hidden Business Insights"
            description="Use the power of AI and machine learning to discover opportunities others miss"
          />
          <FeatureCard 
            icon={<Code className="h-8 w-8 text-indigo-600" />}
            title="Enhance Decision-Making"
            description="Make confident, predictive decisions with reliable data models and insights."
          />
          <FeatureCard 
            icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
            title="Stay Ahead of Market Trends"
            description="Adapt and thrive in an ever-changing business landscape with advanced data science
solutions."
          />
        </div>

        {/* <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Get Started
          </a>
        </div> */}
      </div>
    </div>
    <Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/>
    </>
 
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

