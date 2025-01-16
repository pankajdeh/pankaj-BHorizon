'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import integrity from "@/public/Images/integrity.png"
import OurValueHero from "@/public/Images/OurValueHero.jpg"
import round from "@/public/Images/round.png";
import WhatWeDo from './WhatWeDo.js';


const OurValue = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const data = [
  //   {
  //     text: `• IT Application Development: We design and develop custom software solutions tailored to meet your business needs, ensuring scalability, security, and seamless integration with your existing systems.`,
  //     delay: 200,
  //   },
  //   {
  //     text: `• AI, Machine Learning, and Data Science: We apply artificial intelligence and machine learning to automate processes, predict trends, and unlock data insights that drive smarter decision-making.`,
  //     delay: 300,
  //   },
  //   {
  //     text: `• Geospatial Development and GeoAI: We offer advanced GIS-based applications and integrate AI with geospatial data to provide actionable insights for location-based decision-making.`,
  //     delay: 300,
  //   },
  //   {
  //     text: `• Database Development and Custom Report Generation: We design high-performance, scalable databases and create custom reporting solutions that transform data into real-time insights for better business decisions.`,
  //     delay: 300,
  //   },
  //   {
  //     text: `• IT-Enabled Services (ITES): We provide comprehensive IT services, including cybersecurity, application support and maintenance (AMC), and hardware & networking solutions, ensuring the reliability, security, and smooth functioning of your IT infrastructure.`,
  //     delay: 300,
  //   },
  // ];

  return (
    <section className="overflow-hidden relative my-3">

      <Image
        alt="Person"
        src={round}
        className="absolute w-[750px] -left-[5%] mt-5 z-0 animate-spin-slow"
      />

      <div>
        <WhatWeDo/>
      </div>

      {/* <div className="container mx-auto px-6"> 

        <div className="flex items-center">
          

          <div className="w-full md:w-2/3 flex justify-center"> 

            <div className="w-full md:w-2/3 mt-5 mx-4"> 
              <div className="flex items-center gap-2">
                <h3
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="300"
                  className="text-4xl font-semibold"
                >
                  What We Do
                </h3>
              </div>

             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6" 
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1100"
                    data-aos-delay={item.delay}
                  >
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

         
          <div  className='bg-dot-pattern'>
            <div className="hidden md:block mt-10 p-6"> 
              <Image
                src={OurValueHero}
                alt="Methodology"
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="block md:hidden p-6">
              <Image
                src={OurValueHero}
                alt="Method"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div> */}

    </section>
  );
};

export default OurValue;
