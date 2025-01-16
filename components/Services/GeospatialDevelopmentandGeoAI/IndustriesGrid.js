"use client";

import { Card } from "@/components/ui/card";
import {
  Truck,
  Heart,
  GraduationCap,
  Building2,
  Store,
  Coins,
  Play,
  Scale,
  Landmark,
  Fuel,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import integrity from "@/public/Images/integrity.png";
import OurValueHero from "@/public/Images/OurValueHero.jpg";
import Hero1 from "@/public/Images/Hero1.png";
import round from "@/public/Images/round.png";
import Marquee from "@/components/ui/marquee";

export default function IndustriesGrid() {
  useEffect(() => {
    AOS.init();
  }, []);



const reviews = [
  { icon: Truck, name: "Transportation & Logistics" },


  { icon: Building2, name: "Urban Planning & Development" },

  { icon: Coins, name: "Energy & Utilities" },

  { icon: Landmark, name: "Environmental Services" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({ Icon, name }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Icon */}
        <div className="text-blue-500">
          <Icon size={32} />
        </div>
        {/* Name */}
        <figcaption className="mt-2 text-center text-sm font-medium text-gray-800 dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};



  const [activeCard, setActiveCard] = useState(null);

 

  return (
    <>
      {/* <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Industries <span className="border-b-4 border-[#447ab1] pb-1">We Serve</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {industries.map((industry, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center justify-center p-6 transition-all duration-300 cursor-pointer ${
              activeCard === index
                ? "bg-[#447ab1] text-white transform -translate-y-1 shadow-lg"
                : "hover:border-[#447ab1] hover:shadow-md"
            }`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <industry.icon
              className={`w-12 h-12 mb-4 transition-colors duration-300 ${
                activeCard === index ? "text-white" : "text-[#447ab1]"
              }`}
            />
            <h3 className="text-center font-medium">{industry.name}</h3>
          </Card>
        ))}
      </div>
    </div> */}

      <section className="overflow-hidden relative my-auto">
        <Image
          alt="Person"
          src={round}
          className="absolute  w-[650px] -left-[5%]  mt-5 z-0 animate-spin-slow"
        />

        <div className="relative z-10 mx-auto">
          <div className="flex flex-wrap">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full md:w-1/2 mt-5 mx-4">
                {/* <h2 className="text-3xl font-bold" data-aos="fade-left" data-aos-duration="700">
                  OUR FOCUS
                </h2> */}{" "}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-0.5 bg-green-500" />
                  <h1
                    className="text-sm font-medium text-blue-500"
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="200"
                  >
                    Industries{" "}
                  </h1>
                </div>
                <h3
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="300"
                  className="text-4xl font-semibold"
                >
                  Industries We Empower
                </h3>

               <div className="my-4">
               <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg  ">
               <Marquee pauseOnHover vertical className="[--duration:20s]">
  {firstRow.map((review) => (
    <ReviewCard key={review.name} Icon={review.icon} name={review.name} />
  ))}
</Marquee>
<Marquee reverse pauseOnHover vertical className="[--duration:20s]">
  {secondRow.map((review) => (
    <ReviewCard key={review.name} Icon={review.icon} name={review.name} />
  ))}
</Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
               </div>
                {/* Icons and Text */}
                </div>
            </div>

            {/* Right Content Section */}
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-dot-pattern"
            >
              <div className="hidden md:block mt-10 p-4 ">
                <Image
                  src={Hero1}
                  alt="Methodology"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="block md:hidden p-4">
                <Image
                  src={Hero1}
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
    </>
  );
}
