"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
 
export function SignupFormDemo() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        serviceRequired: "",
        message: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

      };

    //   console.log(formdata)

      const handleServiceChange = (selectedKeys) => {
        const selectedKey = Array.from(selectedKeys)[0];
        const selectedLabel = services.find(
          (service) => service.key === selectedKey
        ).label;
        setFormData({
          ...formData,
          serviceRequired: selectedLabel,
        });
      };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    // if (
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.mobileNumber ||
    //   !formData.email ||
    //   !formData.serviceRequired
    // ) {
    //   toast.error("Please fill out all required fields");
    //   console.log("Please fill out all required fields");
    //   return;
    // }

    // const sendForm = async () => {
    //   const response = await fetch("/api/Contactus", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to send message");
    //   }

    //   setFormData({
    //     firstName: "",
    //     lastName: "",
    //     mobileNumber: "",
    //     email: "",
    //     serviceRequired: "",
    //     message: "",
    //   });
    // };

    

    // toast.promise(sendForm(), {
    //   loading: "Sending message...",
    //   success: "Message sent successfully!",
    //   error: "Failed to send message. Please try again.",
    // });
  };

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>
  */}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" 
                placeholder="Tyler" 
                type="text"  
                name="firstName"
                variant="bordered"
              
                label="First Name"
                radius="sm"
                className="w-full"
                size="lg"
                value={formData.firstName}
                onChange={handleChange} />

          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Mobile Number</Label>
          <Input id="number" placeholder="123456789" type="number" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Message</Label>
        
          <Input
                name="message"
                variant="bordered"
                placeholder="Your message (Optional)"
                label="Message"
                labelPlacement="outside"
                className="w-full h-[40px]  "
                value={formData.message}
                onChange={handleChange}
                // startContent={
                //   <FcComments className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
              />
        </LabelInputContainer>


        
        {/* bg-gradient-to-br */}
        <button
          className=" bg-[#132b57] relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
 
        <div className="flex flex-col space-y-4">

         
        </div>
      </form>
    </div>
  );
}
 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};