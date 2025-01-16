



'use client'
import { Button } from "@/components/ui/button"
import ITApplicationDevelopments from  "../../../public/Images/ITApplicationDevelopment.png"
import Link from "next/link"
import Image from "next/image"
import IndustriesGrid from "./IndustriesGrid";
import { motion, AnimatePresence } from 'framer-motion';
import ServicesBg from "@/public/Images/ServicesBg.png";
import WhyYouNeedUs from "./WhyYouNeedUs";

import AOS from "aos";
import round from "@/public/Images/round.png";
import Service1BusinessImpactROI from "@/public/Images/Service1BusinessImpactROI.png";
import wave from "@/public/Images/wave.webp";
import "aos/dist/aos.css"; 
import { FaMap, FaBrain, FaLayerGroup, FaLocationArrow } from "react-icons/fa";
import { useEffect } from "react";
import BusinessImpact from "./BusinessImpact"

export default function GeospatialDevelopmentandGeoAI() {

    const steps = [
        {
          icon: "💻", // Custom software and application design
          title: "Advanced Geospatial Analysis",
        },
        {
          icon: "🔒", // Scalable, secure architectures
          title: "Scalable, secure architectures",
        },
        {
          icon: "🔗", // Seamless system integration
          title: "Seamless system integration",
        },
      ];

      const models = [
        {
          title: "Advanced Geospatial Analysis",
          description:
            "We utilize AI-powered geospatial tools to process, analyze, and visualize data in real time.",
          icon: "🌍", // Represents geospatial and global analysis
        },
        {
          title: "Integration with Enterprise Systems",
          description:
            "Our team ensures your geospatial data seamlessly integrates with mapping tools, spatial analysis platforms, and other business systems.",
          icon: "🔗", // Represents integration and connection
        },
        {
          title: "Scalable Solutions",
          description:
            "From mapping and urban planning to autonomous systems, we deliver scalable solutions that grow with your needs.",
          icon: "📈", // Represents growth and scalability
        },
      ];
      
      
  useEffect(() => {
    AOS.init();
  }, []);
      
  const services = [
    {
      icon: FaMap,
      title: "GIS-Based Application Development",
      description: "Build robust, scalable GIS applications to manage and analyze geospatial data effectively.",
      sentence: "Our IT solutions optimize business workflows and enhance user engagement.",
      href: "/Contactus",
      color: "from-blue-500 to-blue-600", // Added color gradient for visual appeal
    },
    {
      icon: FaBrain,
      title: "Advanced Geospatial Analysis Using AI",
      description: "Combine artificial intelligence with geospatial technologies to uncover patterns and opportunities hidden in your data.",
      sentence: "Leverage AI and ML to drive growth and innovation in your business.",
      href: "/Contactus",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaLayerGroup,
      title: "Geospatial Data Integration with Enterprise Systems",
      description: "Seamlessly integrate geospatial data with existing systems to streamline workflows and improve efficiency.",
      sentence: "Transform geographical data into actionable insights for smarter decision-making.",
      href: "/Contactus",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: FaLocationArrow,
      title: "Location-Based Decision-Making Solutions",
      description: "Develop location intelligence tools to support critical decisions with real-time insights.",
      sentence: "Empower your business with actionable geospatial insights for smarter decision-making.",
      href: "/Contactus",
      color: "from-orange-500 to-orange-600", // Slight variation in color to differentiate this service
    },
  ];
  



      
  return (

    <>

<div className="bg-gradient-to-r from-[#1a0b2e]/90 to-blue-900 text-white py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl font-bold" data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="200">
         Harness the Power of Geospatial Development and GeoAI

          </h1>
          <p className="text-sm" data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="300">
          {`  Transform location-based data into actionable insights.
Leverage cutting-edge geospatial technologies and AI-driven solutions to optimize urban
planning, streamline logistics, and enhance decision-making processes. Whether you need
GIS-based applications, advanced spatial analysis, or seamless integration with enterprise
systems, our expertise ensures your success.`}
          </p>
          <button data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="400" className="bg-red-500 hover:bg-red-600 text-white py-1 px-6 rounded-md text-lg">
            Consult Our Experts
          </button>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={ITApplicationDevelopments}
            alt="Blockchain Illustration"
            className="w-3/4 lg:w-full" data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          />
        </div>
      </div>
    </div>






    <section className="mt-5 relative overflow-hidden  mx-auto px-4">
  <Image
  alt="Person"
    src={round}
    className="absolute  w-[650px] -right-[10%] z-0 animate-spin-slow"
  />


  <div className="mx-auto lg:py-12 py-8">
    <div className="flex lg:flex-row gap-4 justify-around  flex-col lg:mx-20">
      <div className="bg-dot-pattern">
        <Image
          src={ServicesBg}
          alt="ServicesBg"
          data-aos="flip-left"
          className="lg:w-[915px] 2xl:w-[800px] p-4"
        />
      </div>
      <div className="pt-12 md:pt-0 relative mx-4">
        <div >
       
        <div className="flex items-center gap-2">
        <div className="w-5 h-0.5 bg-green-500" />
        <h1 className="text-sm font-medium text-blue-500" data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200">GET A TECHNOLOGY</h1>
      </div>

        </div>
      
        <h3
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="300"
          className="text-4xl font-semibold"
        >
          What Services We Offered
        </h3>
        <p
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="400"
          className="text-base leading-relaxed text-gray-600"
        >
          {`From software development and digital transformation to consulting and support, we empower organizations to thrive in the digital era and achieve their strategic objectives.`}
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 "
              data-aos="fade-up"
              data-aos-duration="1000"
              
              data-aos-delay={200 + index * 200}
            >
              <div className=" rounded-lg p-4 hover:shadow-xl ">
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <Link
                            href={service.href}
                            className="mt-3 inline-block text-blue-600 hover:underline"
                          >
                            Learn more
                          </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


<Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/>





<div className=" py-16">
      <div className="container mx-auto text-center px-4"  data-aos="fade-up" 
        data-aos-duration="900" 
        data-aos-delay="200">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <div className="w-12 mx-auto mb-10 border-b-2 border-gray-400"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {models.map((model, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="300"
    >
      {/* Icon */}

      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 -z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-2xl opacity-20 -z-10"></div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-6 w-20 h-20 flex items-center justify-center text-4xl text-white">
        {model.icon}
      </div>
      {/* Title */}
      <p className="mt-6 text-xl font-semibold text-gray-800 text-center">
        {model.title}
      </p>
      {/* Description */}
      <p className="text-sm text-gray-600 mt-4 text-center group-hover:text-gray-800">
        {model.description}
      </p>
    </div>
  ))}
</div>



      </div>
    </div>


  

    <IndustriesGrid/>
    <WhyYouNeedUs/>
    <BusinessImpact/>
    
    </>

  )
}

