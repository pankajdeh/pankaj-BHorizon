import React from 'react';
import Image from 'next/image';

const WhyNeed = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-8 px-3 lg:py-13 lg:px-6">
        {/* <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Highlighted Features
          </h2>
        </div> */}

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">Expertise Across Domains:</h3>
                <p className="text-sm">
                We bring a wealth of knowledge and experience in multiple domains, ensuring that we have the right solution for every need—whether it’s application development, AI integration, geospatial analytics, or database management. Our expertise helps you stay ahead of technological trends and competition.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">End-to-End Solutions: </h3>
                <p className="text-sm">
                We provide comprehensive services from initial design to deployment and ongoing maintenance, offering a one-stop-shop for all your IT needs. With us, you won’t have to juggle multiple vendors or deal with the complexity of managing several solutions.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">Scalable and Future-Proof:</h3>
                <p className="text-sm">
                 We design solutions that scale with your business growth. As your needs evolve, our flexible and adaptive approach ensures that we can quickly pivot and upgrade systems, keeping you aligned with your business goals.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6"> Minimized Risk: </h3>
                <p className="text-sm">
               In today’s digital landscape, security threats and data breaches are a constant concern. With our cybersecurity and IT risk management services, we safeguard your critical business data and ensure compliance with industry standards, giving you peace of mind.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold mb-6">Reliability and Support:</h3>
                <p className="text-sm">
                 Our 24/7 support ensures that you have continuous access to expert help whenever you need it, reducing downtime and enabling you to focus on what matters most—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyNeed;
