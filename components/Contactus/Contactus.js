import React from 'react'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "../../public/Images/ContactUs.png"
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contactus = () => {
  return (
    <>
    <div className='w-full '>
    <div className="mx-auto w-full relative h-96 bg-black overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ContactUs} // Replace with your actual image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Red Accent Shapes */}
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-blue-600/30 transform rotate-45 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-600/30 transform rotate-45 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Contact Us</span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white">
          Contact Us
        </h1>
      </div>
    </div>

<div className='px-2 mx-auto '>
<ContactForm/>
</div>

<div>
<ContactMap/>

</div>

    </div>
    </>

  )
}

export default Contactus