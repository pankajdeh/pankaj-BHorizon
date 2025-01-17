import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import ContactdetailsForm from "./ContactdetailsForm";


export default function ContactForm() {
  return (

    <div className="bg-blue-50 w-full ">
    <div className="container mx-auto  lg:px-8 md:px-6 px-0 py-12">

        <div className=" grid md:grid-cols-2  lg:gap-0 gap-8">
          {/* Left Column - Company Info - w-full   bg-[#132b57]   - lg:w-[90%] w-[90%]  lg:h-[70%] */}
          <div className=" text-wrap h-full text-white lg:p-8 md:p-6 p-4 rounded-lg">
            <h3 className="text-black lg:text-5xl md:text-3xl text-2xl font-semibold mb-10">Contact Us</h3>
           
<div className="space-y-6 ">
  {/* Email Section */}
  <div className="mx-auto w-full wrap flex items-center lg:gap-4 md:gap-4 gap-2 group">

    <div className="bg-[#447ab1] lg:p-3 md:p-3 p-2 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <Mail className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>

    <div className="flex flex-col">
      <span className="text-wrap lg:text-md md:text-md text-sm text-black group-hover:text-[#365b8b] transition-colors duration-300">
        support@beyondhorizontech.com
      </span>
      <span className="text-wrap lf:text-md md:text-md text-sm text-black group-hover:text-[#365b8b] transition-colors duration-300">
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
    <div className="bg-[#447ab1] lg:p-3 md:p-3 p-2 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <MapPin className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
      <p>Abu Dhabi, United Arab Emirates</p>
    </div>
  </div>
</div>

            <div className="mt-14 ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2  text-black ">Customer Support</h3>
                    <p className="text-sm text-gray-600">Our support team is available around the clock to address any concerns or queries you may have.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2  text-black ">Feedback and Suggestions</h3>
                    <p className="text-sm text-gray-600">We value your feedback and are continuously working to improve our service.</p>
                  </div>
                 
                </div>
            </div>
          </div>

        <div>
          <ContactdetailsForm/>
          </div>
          
        </div>
      
    </div>



    </div>
  );
}
