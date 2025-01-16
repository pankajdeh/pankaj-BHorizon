'use client'

import { useState, useEffect } from 'react'

import AppHeader from "@/components/AppHeader/AppHeader";
import  HeroSection  from "@/components/HeroSection/HeroSection";
import Image from "next/image";
import { MarketingProcess } from '@/components/MarketingProcess/MarketingProcess';
// import AboutSection from '@/components/AboutSection/AboutSection';
import ProfessionalServicesGrid from '@/components/ServicesComponent/ProfessionalServicesGrid';
import Whychooseus from '@/components/Whychooseus/Whychooseus';
import AnimatedUIloader from '@/components/AnimatedUIloader/AnimatedUIloader';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import OurValue from '@/components/OurValue/OurValue';

export default function Home() {

  const [activeHero, setActiveHero] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % 3)
    }, 5000) // Change hero every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
 <div>
  {/* <AppHeader/> */}
  <HeroSection
        // active={activeHero} 
        // title={['SOFTWARE ROBUSTNESS', 'INNOVATIVE SOLUTIONS', 'EXPERT CONSULTING'][activeHero]}
        // description={[
        //   'We help companies to focus on core business by taking over complete responsibility. We provide both black-box and white-box testing support on demand.',
        //   'Our cutting-edge solutions drive business growth and efficiency. We leverage the latest technologies to deliver unparalleled results.',
        //   'With years of industry experience, our consultants provide strategic insights to help your business thrive in a competitive landscape.'
        // ][activeHero]}
      />
      {/* <MarketingProcess/> */}
      
      <ProfessionalServicesGrid/>
      <OurValue/>
      <MarketingProcess/>
      {/* <AboutSection/> */}
      <Whychooseus/>
      <AnimatedUIloader/>
      <Testimonials/>
     
 </div>
  );
}
