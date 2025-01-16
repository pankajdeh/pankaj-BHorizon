  // <div className="bg-gradient-to-br from-gray-50 to-gray-100 "data-aos="fade-up" data-aos-duration="2000" >
    //   <div className=" mx-auto px-4 py-16 sm:px-6 lg:px-8">
    //     <motion.div 
    //       className="text-center mb-16"
    //       initial={{ opacity: 0, y: -20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What we do</h2>
    //       <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
    //       What services we offer
    //       </h1>
    //       <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
    //         Empowering businesses with cutting-edge technology and unparalleled expertise.
    //       </p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    //       {services.map((service, index) => (
    //         <motion.div
    //           key={index}
    //           className="relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl bg-white"
    //           onMouseEnter={() => setHoveredIndex(index)}
    //           onMouseLeave={() => setHoveredIndex(null)}
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //         >
    //           <div className="px-6 py-8">
    //             <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} text-white mb-5`}>
    //               <service.icon className="h-6 w-6" aria-hidden="true" />
    //             </div>
    //             <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
    //             <p className="text-gray-600">{service.description}</p>
    //           </div>
    //           <AnimatePresence>
    //             {hoveredIndex === index && (
    //               <motion.div
    //                 className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700"
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 exit={{ opacity: 0 }}
    //                 transition={{ duration: 0.3 }}
    //               >
    //                 <div className="text-center p-6">
    //                   <service.icon className="h-12 w-12 text-white mx-auto mb-4" aria-hidden="true" />
    //                   <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
    //                   <p className="text-white mb-4">{service.description}</p>
    //                   <button
    //                     className="px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
    //                     aria-label={`Learn more about ${service.title}`}
    //                   >
    //                     Explore Service
    //                   </button>
    //                 </div>
    //               </motion.div>
    //             )}
    //           </AnimatePresence>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from 'next/image';
import ServicesBg from "@/public/Images/ServicesBg.png";
import wave from "@/public/Images/wave.webp";
import round from "@/public/Images/round.png";
import { FaCode, FaRobot, FaMapMarkedAlt, FaDatabase, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

// import ServicesSection from './ServiceSection';

const services = [
  {
    icon: FaCode,
    title: "IT Application Development",
    description: "We create scalable, secure, and high-performance IT applications tailored to your business needs.",
    sentence: "Our IT solutions optimize business workflows and enhance user engagement.",
    href: "/Services/ITApplicationDevelopment",
  },
  {
    icon: FaRobot,
    title: "AI, Machine Learning, and Data Science",
    description: "Empowering your business with intelligent systems, predictive models, and data-driven insights.",
    sentence: "Leverage AI and ML to drive growth and innovation in your business.",
    href: "/services/ai-machine-learning",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Geospatial Development and GeoAI",
    description: "We offer geospatial development solutions that harness the power of location-based data.",
    sentence: "Transform geographical data into actionable insights for smarter decision-making.",
    href: "/services/geospatial-development",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: FaDatabase,
    title: "Database Development and Custom Report Generation",
    description: "Build robust, scalable databases with custom report generation to fuel your data-driven business.",
    sentence: "Manage your business's data seamlessly with our comprehensive database solutions.",
    href: "/services/database-development",
    color: "from-red-500 to-red-600",
  },
  {
    icon: FaGlobe,
    title: "IT-Enabled Services (ITES)",
    description: "We provide IT-enabled services that streamline business processes and improve operational efficiency.",
    sentence: "Optimize your business operations with our secure and scalable IT solutions.",
    href: "/services/it-enabled-services",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaCode,
    title: "IT Infrastructure, Networking & Continuity",
    description: "It Infrastructure Setup & Management ,Natworking Solution ,Data Backup & Digital Transformation Services",
    sentence: "It Infrastructure Setup & Management ,Natworking Solution ,Data Backup & Digital Transformation Services ",
    href: "/Services/ITApplicationDevelopment",
  },
  {
    icon: FaRobot,
    title: "Cybersecurity and IT Governance",
    description: "Cybersecurity Solutions ,It Audit and Compliance services & It Risk and Governance Consulting",
    sentence: "Leverage AI and ML to drive growth and innovation in your business.",
    href: "/services/ai-machine-learning",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaGlobe,
    title: "Business Intelligence and Business Analytics",
    description: "Business Intelligence  and Business Analytics",
    sentence: "Optimize your business operations with our secure and scalable IT solutions.",
    href: "/services/it-enabled-services",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ProfessionalServicesGrid() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
  
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
          {/* <Image src={ServicesBg} width={15}/> */}
        {/* <h2
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200"
          className="text-xl "
        >
          GET A TECHNOLOGY
        </h2> */}
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
          Our Services
        </h3>
        <p
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="400"
          className="text-base leading-relaxed text-gray-600"
        >
          {`From software development and digital transformation to consulting and support, we empower organizations to thrive in the digital era and achieve their strategic objectives.`}
        </p>

          {/* <div>
            <ServicesSection/>
          </div> */}

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
    </>
  );
}
