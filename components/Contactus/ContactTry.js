import React from 'react';

 const ContactTry = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8 flex flex-col lg:flex-row gap-8 items-start justify-center">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Email, call, or complete the form to learn how we can solve your messaging problem.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-gray-600">info@snappy.io</p>
          </div>
          <div>
            <p className="text-gray-600">321-221-231</p>
          </div>
          <div>
            <a href="#" className="text-blue-600 hover:underline">Customer Support</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">Our support team is available around the clock to address any concerns or queries you may have.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Feedback and Suggestions</h3>
            <p className="text-sm text-gray-600">We value your feedback and are continuously working to improve our service.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Media Inquiries</h3>
            <p className="text-sm text-gray-600">For media-related questions, please contact us at media@snappyapp.com.</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      
    </div>
  );
};

export default ContactTry;