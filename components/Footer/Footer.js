import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import wave from "@/public/Images/wave.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

import logo from "@/public/logo.png"
// import Image from "next/image";


import Image from "next/image";
function Footer() {
  return (
    <>
    <Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/>

    <footer className="bg-[#f9fbfe]  py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block  ">
            {/* <div className="text-black  text-xl font-bold   ">Beyond Horizon</div> */}
            <Image width={80} height={20}  src={logo} alt="logo" />
            
              {/* <Image
                src="/placeholder.svg?height=80&width=150"
                alt="Beyond Horizon"
                className="h-20"
              /> */}
            </Link>
            <p className="text-gray-600 text-sm">
            Beyond Horizon IT Services delivers end-to-end digital transformation solutions and
              technology services, ranging from ideation to designing and from development to
              deployment.
            </p>

        <div>
        <div className="flex space-x-6  mt-4">
      {/* Facebook */}
      <Link
        href="#"
        className="group relative text-[#132b57] hover:text-[#365b8b] transition-all duration-300"
        aria-label="Facebook"
      >
        <FaFacebookF
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="sr-only">Facebook</span>
      </Link>

      {/* Instagram */}
      <Link
        href="#"
        className="group relative text-[#132b57] hover:text-[#365b8b] transition-all duration-300"
        aria-label="Instagram"
      >
        <FaInstagram
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="sr-only">Instagram</span>
      </Link>

      {/* LinkedIn */}
      <Link
        href="#"
        className="group relative text-[#132b57] hover:text-[#365b8b] transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="sr-only">LinkedIn</span>
      </Link>

      {/* Twitter */}
      <Link
        href="#"
        className="group relative text-[#132b57] hover:text-[#365b8b] transition-all duration-300"
        aria-label="Twitter"
      >
        <FaTwitter
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        />
        <span className="sr-only">Twitter</span>
      </Link>
    </div>
        </div>

          </div>

          {/* First Useful Links Column  - [#365b8b]*/}
          {/* <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Services/ITApplicationDevelopment" className="text-gray-600 hover:text-blue-600">
                IT Application Development
                </Link>
              </li>
              <li>
                <Link href="/Services/AI-MachineLearning&DataScience" className="text-gray-600 hover:text-blue-600">
                AI, Machine Learning, and Data Science
                </Link>
              </li>
              <li>
                <Link href="/Services/GeospatialDevelopmentandGeoAI" className="text-gray-600 hover:text-blue-600">
                Geospatial Development and GeoAI
                </Link>
              </li>
              <li>
                <Link href="/Services/DatabaseDevelopment" className="text-gray-600 hover:text-blue-600">
                Database Development and Custom Report Generation
                </Link>
              </li>
              <li>
                <Link href="/Services/IT-EnabledServices" className="text-gray-600 hover:text-blue-600">
                IT-Enabled Services (ITES)
                </Link>
              </li>
              <li>
                <Link href="/Services/BusinessIntelligence" className="text-gray-600 hover:text-blue-600">
                Business Intelligence and Business Analytics
                </Link>
              </li>

              <li>
                <Link href="/Services/Cybersecurity" className="text-gray-600 hover:text-blue-600">
                Cybersecurity and IT Governance
                </Link>
              </li>

              <li>
                <Link href="/Services/ITInfrastructure" className="text-gray-600 hover:text-blue-600">
                IT Infrastructure, Networking & Continuity
                </Link>
              </li>
            </ul>
          </div> */}



<div className="lg:mt-0 mt-4 ">
      <h3 className="text-lg font-semibold text-black mb-4">Services</h3>
      <ul className="space-y-4">
        {[
          { href: "/Services/ITApplicationDevelopment", label: "IT Application Development" },
          { href: "/Services/AI-MachineLearning&DataScience", label: "AI, Machine Learning, and Data Science" },
          { href: "/Services/GeospatialDevelopmentandGeoAI", label: "Geospatial Development and GeoAI" },
          { href: "/Services/DatabaseDevelopment", label: "Database Development and Custom Report Generation" },
          { href: "/Services/IT-EnabledServices", label: "IT-Enabled Services (ITES)" },
          { href: "/Services/BusinessIntelligence", label: "Business Intelligence and Business Analytics" },
          { href: "/Services/Cybersecurity", label: "Cybersecurity and IT Governance" },
          { href: "/Services/ITInfrastructure", label: "IT Infrastructure, Networking & Continuity" },
        ].map((service, index) => (
          <li key={index}>
            <Link
              href={service.href}
              className="flex gap-x-4 text-gray-600 hover:text-[#132b57] group transition-all duration-300"
            >
              <FaArrowRight
                className="text-[#132b57] transition-transform duration-300 group-hover:translate-x-1"
              />
              <span>{service.label}</span>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>


          {/* Contact Info */}

<div className="space-y-6  text-black mt-4 lg:mt-0">
  <div className="text-lg  font-semibold"> Contact Us</div>
  {/* Email Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] lg:p-3 md:p-3 p-2 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <Mail className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="lg:text-md md:text-md text-sm text-black group-hover:text-[#365b8b] transition-colors duration-300">
        support@beyondhorizontech.com
      </span>
      <span className=" lg:text-md md:text-md text-sm text-black group-hover:text-[#365b8b] transition-colors duration-300">
        projects@beyondhorizontech.com
      </span>
    </div>
  </div>

  {/* Phone Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] lg:p-3 md:p-3 p-2 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <Phone className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <span className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
      +971 582810106
    </span>
  </div>

  {/* Address Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] lg:p-3 md:p-3 p-2 group-hover:bg-[#365b8b]  rounded-full transition-all duration-300 ">
      <MapPin className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
      <p>Abu Dhabi, United Arab Emirates</p>
    </div>
  </div>
</div>



        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Copyright © 2024 Beyond Horizon IT Services
          </p>
        </div>
      </div>
    </footer>
    </>

  );
}

export default Footer;
