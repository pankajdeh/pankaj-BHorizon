'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import integrity from "@/public/Images/integrity.png"
import OurValueHero from "@/public/Images/OurValueHero.jpg"
import round from "@/public/Images/round.png";

const OurValue = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="overflow-hidden relative my-3">

          <Image
          alt="Person"
            src={round}
            className="absolute  w-[650px] -left-[5%]  mt-5 z-0 animate-spin-slow"
          />

      <div className="container mx-auto">


        <div className="flex flex-wrap">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">


          <div className="w-full md:w-1/2 mt-5 mx-4">

        

            {/* <h2 className="text-3xl font-bold" data-aos="fade-left" data-aos-duration="700">
              OUR FOCUS
            </h2> */}  <div className="flex items-center gap-2">
        <div className="w-5 h-0.5 bg-green-500" />
        <h1 className="text-sm font-medium text-blue-500" data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200">OUR FOCUS</h1>
      </div>
      <h3
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="300"
          className="text-4xl font-semibold"
        >
          Our Values
        </h3>

            {/* Icons and Text */}
            <div className="flex flex-wrap mt-5">
              <div className="w-1/2 md:w-1/3">
                <div
                  className="text-center p-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1100"
                  data-aos-delay="200"
                >
                  <div className="hidden">
                    <Image src={integrity} alt="Promote" width={100} height={100} />
                  </div>
                  <div className="block mx-auto  items-center">
                    <Image src={integrity}  alt="Promote Highlight" width={100} height={100} />
                  </div>
                  <h4 className="mt-2 text-lg font-medium">Integrity</h4>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3">
                <div
                  className="text-center p-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1100"
                  data-aos-delay="300"
                >
                  <div className="hidden">
                    <Image src={integrity} alt="Chat" width={100} height={100} />
                  </div>
                  <div className="block mx-auto">
                    <Image src={integrity} alt="Chat Highlight" width={100} height={100} />
                  </div>
                  <h4 className="mt-2 text-lg font-medium">Excellence</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-5">
              <div className="w-1/2 md:w-1/3">
                <div
                  className="text-center p-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1100"
                  data-aos-delay="400"
                >
                  <div className="hidden">
                    <Image src={integrity} alt="Program" width={100} height={100} />
                  </div>
                  <div className="block mx-auto">
                    <Image src={integrity} alt="Program Highlight" width={100} height={100} />
                  </div>
                  <h4 className="mt-2 text-lg font-medium">Collaboration</h4>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3">
                <div
                  className="text-center p-4"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1100"
                  data-aos-delay="500"
                >
                  <div className="hidden">
                    <Image src={integrity} alt="Design" width={100} height={100} />
                  </div>
                  {/* <div className="block ">
                    <Image src={integrity} alt="Design Highlight" width={100} height={100} />
                  </div> */}
                  {/* <h4 className="mt-2 text-lg font-medium">we design</h4> */}
                </div>
              </div>
            </div>
          </div>

         
          </div>

          {/* Right Content Section */}
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='bg-dot-pattern'>
              <div className="hidden md:block mt-10 p-4 ">
                <Image
                 src={OurValueHero}
                  alt="Methodology"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="block md:hidden p-4">
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
      </div>
    </section>
  );
};

export default OurValue;
