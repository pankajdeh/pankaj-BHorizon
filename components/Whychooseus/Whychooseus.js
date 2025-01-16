'use client'

import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import Aboutus from "../../public/Images/Aboutus.png"
import Image from "next/image"
import wave from "@/public/Images/wave.webp";


export default function Whychooseus() {
  const features = [
    { id: 1, text: "Transparent" },
    { id: 2, text: "Proactive" },
    { id: 3, text: "Affordable" },
    { id: 4, text: "Flexible" },
  ]

  return (
    <>
    
    <Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/>
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-8">
      <span className="text-blue-600">Why</span> Choose Us?
    </h2>
    <div className="border-l-4 border-blue-600 pl-6">
      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
        {`Custom software offers tailored solutions precisely aligned with your business needs, providing greater flexibility, scalability, and efficiency compared to off-the-shelf alternatives. By investing in custom software, businesses gain control over features, security, and integration, ensuring seamless alignment with organizational goals. This bespoke approach fosters innovation, streamlines processes, and ultimately drives competitive advantage in today's dynamic market landscape.`}
      </p>
    </div>
  </section>
    </>
   

  )
}
