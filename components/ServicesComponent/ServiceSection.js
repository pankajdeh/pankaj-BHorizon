import { FaLaptopCode, FaDatabase, FaCloud, FaShieldAlt, FaNetworkWired, FaChartLine } from 'react-icons/fa';
import { MdScience, MdBusinessCenter } from 'react-icons/md';
// import ShineBorder from "@/components/ui/shine-border";
// import Link from 'next/link';
import MainServices from './MainServices';

const ServicesSection = () => {
  
  // const services = [
  //   {
  //     icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
  //     title: 'IT Application Development and Integration',
  //     details: [
  //       'Software Design and Architecture',
  //       'Application Design',
  //       'Usecase Design',
  //     ],
  //     link: '/Services/ITApplicationDevelopment',
  //   },
  //   {
  //     icon: <MdScience className="text-green-600 text-4xl" />,
  //     title: 'Artificial Intelligence, Machine Learning, and Data Science',
  //     details: ['AI and Machine Learning Solutions', 'Data Science'],
  //     link: '/Services/AI-MachineLearning&DataScience',
  //   },
  //   {
  //     icon: <MdBusinessCenter className="text-orange-500 text-4xl" />,
  //     title: 'Cloud Computing and IT-Enabled Services (ITES)',
  //     details: ['Cloud Computing', 'Business Analytics'],
  //     link: '/Services/BusinessIntelligence',
  //   },
  //   {
  //     icon: <FaChartLine className="text-purple-500 text-4xl" />,
  //     title: 'Geospatial Development, Analytics, and GeoAI',
  //     details: [
  //       'Geospatial Application Development',
  //       'Geospatial Analytics',
  //       'GeoAI',
  //     ],
  //     link: '/Services/GeospatialDevelopmentandGeoAI',
  //   },
  //   {
  //     icon: <FaDatabase className="text-red-500 text-4xl" />,
  //     title: 'Database Development and Report Generation',
  //     details: [
  //       'Database Design and Development',
  //       'Relational Database Management Systems',
  //       'NoSQL Database Solutions',
  //       'Report Generation and Data Reporting',
  //     ],
  //     link: '/Services/DatabaseDevelopment',
  //   },
  //   {
  //     icon: <FaNetworkWired className="text-teal-500 text-4xl" />,
  //     title: 'IT Infrastructure, Networking, and Continuity',
  //     details: [
  //       'IT Infrastructure Setup and Management',
  //       'Networking Solutions',
  //       'Data Backup, Disaster Recovery, and Business Continuity',
  //       'Digital Transformation Services',
  //     ],
  //     link: '/Services/it-infrastructure',
  //   },
  //   {
  //     icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
  //     title: 'Cybersecurity and IT Governance',
  //     details: [
  //       'Cybersecurity Solutions',
  //       'IT Audit and Compliance Services',
  //       'IT Risk and Governance Consulting',
  //     ],
  //     link: '/Services/cybersecurity',
  //   },
  //   {
  //     icon: <FaCloud className="text-cyan-600 text-4xl" />,
  //     title: 'Cloud Computing and IT-Enabled Services (ITES)',
  //     details: [
  //       'Cloud Computing Services',
  //       'IT Support and Managed Services',
  //       'Application Support and Maintenance (AMC)',
  //       'Hardware and Software Procurement',
  //     ],
  //     link: '/Services/IT-EnabledServices',
  //   },
  // ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <MainServices/>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ShineBorder
              key={index}
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="bg-white shadow-lg rounded-lg backdrop-blur-md bg-opacity-60 border border-gray-200 p-6 flex flex-col h-[350px]  w-full"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <ul className="text-gray-600 text-sm space-y-2 flex-grow">
                {service.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href={service.link}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700  transition"
                >
                  Learn More
                </Link>
              </div>
            </ShineBorder>
          ))}
        </div> */}


      </div>
    </section>
  );
};

export default ServicesSection;
