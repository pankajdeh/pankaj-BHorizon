import React from "react";
import OurValue from "./OurValue";
import Image from "next/image";
import wave from "@/public/Images/wave.webp";
import WhyYouNeedUs from "./WhyYouNeedUs";
// import ShineBorder from "@/components/ui/shine-border";
// import Link from "next/link";
// import MainServices from "@/components/ServicesComponent/MainServices";
import ServicesSection from "@/components/ServicesComponent/ServiceSection";


// const technologiesData = [
//   {
//     title: "IT Application Development",
//     description:
//       "We specialize in creating custom software and applications tailored to your business’s unique needs. Our approach combines innovative software design with robust, scalable architectures—whether through microservices or serverless models—to deliver secure, high-performance applications. We focus on user-centric design, ensuring intuitive, responsive interfaces for cross-platform compatibility, and integrate applications seamlessly with your existing systems for enhanced functionality.",
//     buttonLabel: "Learn More",
//     link: "/Services/ITApplicationDevelopment", // Added link property
//   },
//   {
//     title: "AI, Machine Learning, and Data Science",
//     description:
//       "Our team leverages the power of AI and Machine Learning to transform business processes through automation, predictive analytics, and data-driven decision-making. We develop and implement machine learning models to forecast trends, optimize workflows, and enhance customer experiences with AI tools like chatbots and recommendation engines. Additionally, our data science services include data extraction, cleaning, statistical analysis, and advanced visualization techniques, enabling businesses to make informed decisions and improve efficiency.",
//     buttonLabel: "Learn More",
//     link: "/Services/AI-MachineLearning&DataScience", // Added link property
//   },
//   {
//     title: "Geospatial Development and GeoAI",
//     description:
//       "We provide advanced Geospatial Development solutions, including custom GIS-based applications and geospatial analytics that help businesses gain insights from location-based data. Our GeoAI services merge AI with geospatial data to offer predictive spatial analysis, real-time data processing, and intelligent mapping. These solutions are ideal for urban planning, environmental monitoring, and applications requiring precise location-based intelligence, optimizing operations and decision-making.",
//     buttonLabel: "Learn More",
//     link: "/Services/GeospatialDevelopmentandGeoAI", // Added link property
//   },
//   {
//     title: "Database Development and Custom Report Generation",
//     description:
//       "Our Database Development services ensure that businesses have efficient, scalable database solutions that fit their specific needs. From relational database systems like Oracle and SQL Server to high-performance NoSQL databases, we provide end-to-end services including database design, development, optimization, and security. We also specialize in custom report generation, integrating tools such as Power BI, Tableau, and Crystal Reports to automate report generation, create interactive dashboards, and provide real-time business insights that drive smarter decision-making.",
//     buttonLabel: "Learn More",
//     link: "/Services/DatabaseDevelopment", // Added link property
//   },
//   {
//     title: "IT-Enabled Services (ITES)",
//     description:
//       "Our IT-Enabled Services (ITES) encompass critical areas such as Cybersecurity, Application Support and Maintenance (AMC), and Hardware & Networking. We offer robust cybersecurity solutions, including advanced threat detection, vulnerability assessments, and compliance services, ensuring the protection of your IT infrastructure. Our AMC services provide ongoing maintenance and updates for business-critical applications, ensuring they perform smoothly 24/7. Additionally, our hardware and networking solutions cover everything from IT infrastructure setup to network optimization, guaranteeing the seamless operation and security of your business systems.",
//     buttonLabel: "Learn More",
//     link: "/Services/IT-EnabledServices", // Added link property
//   },
// ];

const Page = () => {
  return (
    <>
      {/* <section className="overflow-hidden bg-white py-12">
        <div className="container mx-auto px-4">
       
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#002060]"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Our Services
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="200"
              className="mt-2 text-sm"
            >
              {`We are a forward-thinking IT company specializing in a comprehensive suite of services designed to empower businesses with cutting-edge technology solutions`}
            </p>
          </div>
          

          <div 
           className=""
           data-aos="fade-up"
           data-aos-duration="900"
           >
            <MainServices/>
          </div>

          {/* Grid Layout for Cards */}
          {/* <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {technologiesData.map((technology, index) => (
              <ShineBorder
                key={index}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="bg-white  shadow-lg p-6 flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#002060]">
                    {technology.title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-sm overflow-hidden line-clamp-4">
                    {technology.description}
                  </p>
                </div>
                <Link href={technology.link} className="mt-6"> 
                  <button
                    className="btn bg-gradient-to-r from-[#447ab1] to-[#447ab1] text-white py-3 px-6 rounded-md w-full transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  >
                    {technology.buttonLabel}
                  </button>
                </Link>
              </ShineBorder>
            ))}
          </div> */}

{/* 
        </div>
      </section>  */}
      <ServicesSection/>
      <WhyYouNeedUs />
      <Image src={wave} alt="wave" className="w-full relative -z-1 mt-5" />
      <OurValue />
  

    </>
  );
};

export default Page;
