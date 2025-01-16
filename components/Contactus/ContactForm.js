import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { Select, SelectItem, Textarea, Button ,Input} from "@nextui-org/react";

import ContactdetailsForm from "./ContactdetailsForm";
// import { SignupFormDemo } from "./ContactTry";

export default function ContactForm() {
  return (

    <div>
    <div className="container mx-auto px-8 py-12">
      <div className="mx-auto">
      {/* max-w-5xl */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Have Questions?</h1>
          <h2 className="text-4xl font-bold">Get in touch!</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:gap-0 gap-8">
          {/* Left Column - Company Info */}
          <div className="bg-[#132b57] lg:w-[90%] w-[90%]  lg:h-[70%]  h-full text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Company info</h3>
            <p className="mb-8 text-gray-100">
              Ignissimos ducimus qui blanditiis prae
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <span>info@email.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <span>+1 (212) 621-5896</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p>Germany —785 15h Street, Office 478</p>
                  <p>Berlin, De 81556</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          {/* <div className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-gray-300 focus:border-red-700 rounded-none px-0"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                className="w-full border-b border-gray-300 focus:border-red-700 rounded-none px-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Phone number"
                className="w-full border-b border-gray-300 focus:border-red-700 rounded-none px-0"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 focus:border-red-700 rounded-none px-0"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Message"
                className="w-full border-b border-gray-300 focus:border-red-700 rounded-none px-0"
              />
            </div>
            <Button
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-2"
            >
              GET IN TOUCH
            </Button>
          </div> */}

          <ContactdetailsForm/>
          <div className=" w-[100%]" >
          {/* <SignupFormDemo/> */}
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
}
