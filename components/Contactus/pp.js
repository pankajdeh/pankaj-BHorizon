"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

import { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    serviceRequired: [],
    message: "",
  });

  const [errors, setErrors] = useState({ mobileNumber: "" });

  // const [isVerified, setIsVerified] = useState(false);

  const services = [
    { key: "ESG & Decarbonisation", label: "ESG & Decarbonisation" },
    { key: "Climate Change Services", label: "Climate Change Services" },
    { key: "Safety & Risk Assessment", label: "Safety & Risk Assessment" },
    { key: "Trainings & Auditing ", label: "Trainings & Auditing " },
    { key: "Engineering Services", label: "Engineering Services" },
    { key: "Other", label: "Other" },
  ];

  // validate number

  const validateNumber = (number) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(number)) {
      return "Please enter a valid 10-digit mobile number";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //validate mobile number when user types;
    if (name === "mobileNumber") {
      const mobileError = validateNumber(value);
      setErrors((prev) => ({
        ...prev,
        mobileNumber: mobileError,
      }));
    }
  };

  const handleServiceChange = (selectedKeys) => {
    const selectedLabels = Array.from(selectedKeys).map((key) => {
      return services.find((service) => service.key === key)?.label;
    });
    setFormData({
      ...formData,
      serviceRequired: selectedLabels,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission
  
  const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      mobileNumber: e.target.mobileNumber.value,
      email: e.target.email.value,
      serviceRequired: e.target.serviceRequired.value,
      message: e.target.message.value,
    };
  
      // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.mobileNumber ||
      !formData.serviceRequired
    )
    {
      toast.error("Please fill out all required fields");
      return;
    }

      const mobileError = validateNumber(formData.mobileNumber);
    if (mobileError) {
      setErrors((prev) => ({ ...prev, mobileNumber: mobileError }));
      return;
    }

    try {

      await toast.promise(
        (async () => {
          // First, send data to Google Sheets
          await sendToSheet(formData);
          // Then, send the email/form data
          await sendForm(formData);
        })(),
        {
          loading: "Processing your request...",
          success: "Email sent successfully!",
          error: "Failed to process your request. Please try again.",
        }
      );



        // Manually reset form fields
    e.target.firstName.value = '';
    e.target.lastName.value = '';
    e.target.mobileNumber.value = '';
    e.target.email.value = '';
    e.target.serviceRequired.value = '';
    e.target.message.value = '';
      
  
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const sendToSheet = async (formData) => {
    const sheetData = [
      [formData.firstName, formData.lastName, formData.mobileNumber, formData.email, formData.serviceRequired, formData.message]
    ];

    try {
      // const response = await fetch('/api/Contact', {
        const response = await fetch("https://v1.nocodeapi.com/pankaj26/google_sheets/XPStxcgbtVAVhida?tabId=Sheet1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData),
        // body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log('Google Sheet Update Success:', result);
      console.log("result: ",result)
      return result;  // Ensure the result is returned
    } catch (error) {
      console.error('Error updating Google Sheet:', error);
      throw error;  // Re-throw the error to handle in the calling function
    }
  };
  
  const sendForm = async (formData) => {
    try {
      const response = await fetch("/api/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      const result = await response.json();
      console.log("Email sent successfully:", result);
      return result;  // Ensure the result is returned
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;  // Re-throw the error to handle in the calling function
    }
  };
  
  
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send to Google Sheets
  //     await sendToSheet(formData);

  //     // Send via email
  //     await sendEmail(formData);

  //     alert("Form Submitted Successfully");
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }

  //   // Check if any required field is empty
  //   // if (
  //   //   !formData.firstName ||
  //   //   !formData.lastName ||
  //   //   !formData.mobileNumber ||
  //   //   !formData.email ||
  //   //   !formData.serviceRequired
  //   // )
  //   // {
  //   //   toast.error("Please fill out all required fields");
  //   //   return;
  //   // }

  //   // const mobileError = validateMobileNumber(formData.mobileNumber);
  //   // if (mobileError) {
  //   //   setErrors((prev) => ({ ...prev, mobileNumber: mobileError }));
  //   //   return;
  //   // }


  //   // const sendToSheet = async (formData) => {
  //   //   console.log("formdata 1: ",formData)
  //   //   try {
  //   //     const response = await fetch("/api/contact", {
  //   //       method: "POST",
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       body: JSON.stringify(formData),
  //   //     });

  //   //     const result = await response.json();
  //   //     console.log("Success:", result);
  //   //     alert("Form Submitted Successfully");
  //   //   } catch (error) {
  //   //     console.error("Error:", error);
  //   //   }
  //   // };

  //   // toast.promise(sendtoSheet(), {
  //   //   loading: "Sending message...",
  //   //   success: "Message sheet sent successfully!",
  //   //   error: "Failed to send message. Please try again.",
  //   // });

  //   const sendForm = async () => {
  //     console.log("formdata 2: ",formData)

  //     const response = await fetch("/api/Contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to send message");
  //     }

  //     // setFormData({
  //     //   firstName: "",
  //     //   lastName: "",
  //     //   mobileNumber: "",
  //     //   email: "",
  //     //   serviceRequired: [],
  //     //   message: "",
  //     // });
  //   };

  //   toast.promise(sendForm(), {
  //     loading: "Sending message...",
  //     success: "Message sent successfully!",
  //     error: "Failed to send message. Please try again.",
  //   });
  // };

  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-start px-3 py-1 w-full ring-1 ring-gray-200 p-4 rounded-md ">
        <div className="flex flex-col w-full justify-start items-start p-2 py-4 gap-4">
          {/* <form className="w-full" onSubmit={handleSubmit}> */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 place-content-center justify-between items-start">
              <Input
                type="text"
                name="firstName"
                variant="bordered"
                labelPlacement="outside"
                // label="First Name"
        
                label={
                  <span className="flex items-center">
                    First Name <span className="text-red-500">*</span>
                  </span>
                }
                required
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="First Name"
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                variant="bordered"
             
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                labelPlacement="outside"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <div>
                <Input
                  type="text"
                  name="mobileNumber"
                  variant="bordered"
                  
                  label={
                    <span className="flex items-center">
                     Mobile Number<span className="text-red-500">*</span>
                    </span>
                  }
                  radius="sm"
                  labelPlacement="outside"
                  required
                  className="w-full rounded-none"
                  size="lg"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  startContent={
                    <FcCallback className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                {errors.mobileNumber && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <Input
                type="text"
                name="email"
                variant="bordered"
                label="Email"
                labelPlacement="outside"
               
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                startContent={
                  <FcAddressBook className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            <div className="w-full  mt-12">
             

              <Select
                name="serviceRequired"
                // label="inquiry"
              
                labelPlacement="outside"
                  variant="bordered"
                label={
                  <span className="flex   items-center">
                   Services <span className="text-red-500">*</span>
                  </span>
                }
                placeholder="Select inquiry type (one or multiple)"
                size="lg"
                required
                radius="sm"
                className="mt-4 w-3/4 max-w-xl md:max-w-80 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl "
                selectionMode="multiple"
                selectedKeys={
                  new Set(
                    formData.serviceRequired.map(
                      (serviceLabel) =>
                        services.find(
                          (service) => service.label === serviceLabel
                        )?.key
                    )
                  )
                }
                onSelectionChange={handleServiceChange}
                menuClass="w-full max-w-xl md:max-w-10 overflow-auto "
              >
                {services.map((service) => (
                  <SelectItem
                    key={service.key}
                    value={service.key}
                    className="text-ellipsis  whitespace-nowrap "
                  >
                  
                    {service.label}
                  </SelectItem>
                ))}
              </Select>

            </div>

            <div className="w-full mt-4">
              <Textarea
                name="message"
                variant="bordered"
                placeholder="Your message (Optional)"
                label="Message"
                labelPlacement="outside"
                className="w-full"
                value={formData.message}
                onChange={handleChange}
                startContent={
                  <FcComments className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            <div className="w-full flex justify-center items-center mt-4">
              <Button
                // onClick={() => setIsModalOpen(true)}
                type="submit"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Contactform;