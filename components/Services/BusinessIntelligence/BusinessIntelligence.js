



'use client'
import { Button } from "@/components/ui/button"
import ITApplicationDevelopments from  "../../../public/Images/ITApplicationDevelopment.png"
import Link from "next/link"
import Image from "next/image"
import IndustriesGrid from "./IndustriesGrid";
import { motion, AnimatePresence } from 'framer-motion';
import ServicesBg from "@/public/Images/ServicesBg.png";
import WhyYouNeedUs from "./WhyYouNeedUs";
import BusinessImpact from "./BusinessImpact";
import AOS from "aos";
import round from "@/public/Images/round.png";
import Service1BusinessImpactROI from "@/public/Images/Service1BusinessImpactROI.png";
import wave from "@/public/Images/wave.webp";
import "aos/dist/aos.css"; 
import { FaCode, FaRobot, FaMapMarkedAlt, FaDatabase, FaGlobe } from 'react-icons/fa';
import { useEffect } from "react";

export default function BusinessIntelligence() {

    const steps = [
        {
          icon: "💻", // Custom software and application design
          title: "Custom software and application design",
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
          title: "Expertise You Can Trust",
          description:
            "Decades of experience in cloud computing and IT services.",
          icon: "⏰", // Represents time and continuous availabilit
        },
        {
          title: " Customized Solutions",
          description:
            "Tailored to meet the unique demands of your business.",
          icon: "🛡️", // Represents protection and security
        },
        {
          title: "Proactive Support",
          description:
            "Round-the-clock monitoring and dedicated assistance.",
          icon: "🖧", // Represents network and infrastructure setup
        },
        {
          title: "Cost Efficiency",
          description:
            "Streamlined processes to optimize your IT investment.",
          icon: "🔧", // Represents maintenance and smooth operations
        },
      ];
      
      
  useEffect(() => {
    AOS.init();
  }, []);
      
const services = [
  {
    icon: FaCode,
    title: "Cloud Computing Services",
    description: "Unlock the potential of the cloud with secure, scalable, and efficient cloud solutions. From migration to management, we ensure your business stays agile and ready for the future.",
    sentence: "Our IT solutions optimize business workflows and enhance user engagement.",
    href: "/Contactus",
  },
  {
    icon: FaRobot,
    title: "IT Support and Managed Services",
    description: "Ensure uninterrupted operations with 24/7 IT support and proactive management. We handle system monitoring, troubleshooting, and optimization to keep your IT environment running smoothly.",
    sentence: "Leverage AI and ML to drive growth and innovation in your business.",
    href: "/Contactus",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Application Support and Maintenance (AMC)",
    description: "Maximize the performance and reliability of your business applications with our comprehensive support and maintenance services. From routine updates to troubleshooting, we’ve got you covered.",
    sentence: "Transform geographical data into actionable insights for smarter decision-making.",
    href: "/Contactus",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Hardware and Software Procurement",
    description: "Simplify your IT procurement process. We source and deliver high-quality hardware and software tailored to your specific business needs, ensuring compatibility and long-term value",
    sentence: "Transform geographical data into actionable insights for smarter decision-making.",
    href: "/Contactus",
    color: "from-yellow-500 to-yellow-600",
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
        Cloud Computing and IT-Enabled Services (ITES)


          </h1>
          <p className="text-sm" data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="300">
          {` In an era of rapid technological advancement, businesses need reliable and scalable solutions
to stay competitive. Our Cloud Computing and IT-Enabled Services are designed to enhance
productivity, reduce operational costs, and ensure your systems run seamlessly, so you can
focus on what matters most—your business growth.`}
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
        <h2 className="text-3xl font-bold mb-6"> Why Choose Us</h2>
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

