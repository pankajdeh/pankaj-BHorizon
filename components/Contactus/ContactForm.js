import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Select, SelectItem, Textarea, Button ,Input} from "@nextui-org/react";

import ContactdetailsForm from "./ContactdetailsForm";
import ContactTry from "./ContactTry";


export default function ContactForm() {
  return (

    <div className="bg-blue-50  ">
    <div className="container mx-auto px-8 py-12">
      <div className="mx-auto">
      {/* max-w-5xl */}
        {/* <div className="mb-8">
          <h1 className="text-4xl font-bold">Have Questions?</h1>
          <h2 className="text-4xl font-bold">Get in touch!</h2>
        </div> */}

        <div className="mx-auto w-full  overflow-x-hidden grid md:grid-cols-2 lg:gap-0 gap-8">
          {/* Left Column - Company Info - bg-[#132b57] */}
          <div className=" lg:w-[90%] w-[90%]  lg:h-[70%]  h-full text-white p-8 rounded-lg">
            <h3 className="text-black lg:text-5xl md:text-3xl text-2xl font-semibold mb-10">Contact Us</h3>
           

<div className="space-y-6">
  {/* Email Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] p-3 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <Mail className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
        support@beyondhorizontech.com
      </span>
      <span className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
        projects@beyondhorizontech.com
      </span>
    </div>
  </div>

  {/* Phone Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] p-3 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
      <Phone className="text-white w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </div>
    <span className="text-black group-hover:text-[#365b8b] transition-colors duration-300">
      +971 582810106
    </span>
  </div>

  {/* Address Section */}
  <div className="flex items-center gap-4 group">
    <div className="bg-[#447ab1] p-3 rounded-full transition-all duration-300 group-hover:bg-[#365b8b]">
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
                  {/* <div>
                    <h3 className="font-semibold mb-2">Media Inquiries</h3>
                    <p className="text-sm text-gray-600">For media-related questions, please contact us at media@snappyapp.com.</p>
                  </div> */}
                </div>
            </div>
          </div>

          <ContactdetailsForm/>
          
        </div>
      </div>
    </div>



    </div>
  );
}
