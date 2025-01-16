// import {
//     FaLaptopCode,
//     FaRobot,
//     FaMapMarkedAlt,
//     FaDatabase,
//     FaNetworkWired,
//   } from 'react-icons/fa';
  
//   export default function WhatWeDo() {
//     const services = [
//       {
//         id: 1,
//         title: 'IT Application Development',
//         description:
//           'We design and develop custom software solutions tailored to meet your business needs, ensuring scalability, security, and seamless integration with your existing systems.',
//         icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
//       },
//       {
//         id: 2,
//         title: 'AI, Machine Learning, and Data Science',
//         description:
//           'We apply artificial intelligence and machine learning to automate processes, predict trends, and unlock data insights that drive smarter decision-making.',
//         icon: <FaRobot className="text-green-500 text-4xl" />,
//       },
//       {
//         id: 3,
//         title: 'Geospatial Development and GeoAI',
//         description:
//           'We offer advanced GIS-based applications and integrate AI with geospatial data to provide actionable insights for location-based decision-making.',
//         icon: <FaMapMarkedAlt className="text-purple-500 text-4xl" />,
//       },
//       {
//         id: 4,
//         title: 'Database Development and Custom Report Generation',
//         description:
//           'We design high-performance, scalable databases and create custom reporting solutions that transform data into real-time insights for better business decisions.',
//         icon: <FaDatabase className="text-yellow-500 text-4xl" />,
//       },
//       {
//         id: 5,
//         title: 'IT-Enabled Services (ITES)',
//         description:
//           'We provide comprehensive IT services, including cybersecurity, application support and maintenance (AMC), and hardware & networking solutions, ensuring the reliability, security, and smooth functioning of your IT infrastructure.',
//         icon: <FaNetworkWired className="text-red-500 text-4xl" />,
//       },
//     ];
  
//     return (
//       <div className="bg-gray-50 min-h-screen p-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">
//             What We Do
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div>{service.icon}</div>
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {service.title}
//                   </h2>
//                 </div>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
  


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaLaptopCode,
  FaRobot,
  FaMapMarkedAlt,
  FaDatabase,
  FaNetworkWired,
} from 'react-icons/fa';

export default function WhatWeDo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      id: 1,
      title: 'IT Application Development',
      description:
        'We design and develop custom software solutions tailored to meet your business needs, ensuring scalability, security, and seamless integration with your existing systems.',
      icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
      delay: 100,
    },
    {
      id: 2,
      title: 'AI, Machine Learning, and Data Science',
      description:
        'We apply artificial intelligence and machine learning to automate processes, predict trends, and unlock data insights that drive smarter decision-making.',
      icon: <FaRobot className="text-green-500 text-4xl" />,
      delay: 200,
    },
    {
      id: 3,
      title: 'Geospatial Development and GeoAI',
      description:
        'We offer advanced GIS-based applications and integrate AI with geospatial data to provide actionable insights for location-based decision-making.',
      icon: <FaMapMarkedAlt className="text-purple-500 text-4xl" />,
      delay: 300,
    },
    {
      id: 4,
      title: 'Database Development and Custom Report Generation',
      description:
        'We design high-performance, scalable databases and create custom reporting solutions that transform data into real-time insights for better business decisions.',
      icon: <FaDatabase className="text-yellow-500 text-4xl" />,
      delay: 400,
    },
    {
      id: 5,
      title: 'IT-Enabled Services (ITES)',
      description:
        'We provide comprehensive IT services, including cybersecurity, application support and maintenance (AMC), and hardware & networking solutions, ensuring the reliability, security, and smooth functioning of your IT infrastructure.',
      icon: <FaNetworkWired className="text-red-500 text-4xl" />,
      delay: 500,
    },
  ];

  return (
    <div className="bg-white min-h-screen p-6  mt-3">
      <div className="max-w-6xl mx-auto">
      

                <div className='mb-12'>
                <h3
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-delay="300"
                  className="text-4xl font-semibold "
                >
                  What We Do
                </h3>
                </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1100"
              data-aos-delay={service.delay}
            >
              <div className="flex items-center gap-4 mb-4">
                <div>{service.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
