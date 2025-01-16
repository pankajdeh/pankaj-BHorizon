import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import wave from "@/public/Images/wave.webp";
import Image from "next/image";
function Footer() {
  return (
    <>
    <Image src={wave} alt='wave' className='w-full relative -z-1 mt-5'/>

    <footer className="bg-[#f9fbfe] py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block  ">
            <div className="text-black  text-xl font-bold   ">Beyond Horizon</div>
              {/* <Image
                src="/placeholder.svg?height=80&width=150"
                alt="Beyond Horizon"
                className="h-20"
              /> */}
            </Link>
            <p className="text-gray-600 text-sm">
            Beyond Horizon IT Services delivers end-to-end digital transformation solutions and
              technology services, ranging from ideation to designing and from development to
              deployment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* First Useful Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Services/ITApplicationDevelopment" className="text-gray-600 hover:text-blue-600">
                IT Application Development
                </Link>
              </li>
              <li>
                <Link href="/Services/AI-MachineLearning&DataScience" className="text-gray-600 hover:text-blue-600">
                AI, Machine Learning, and Data Science
                </Link>
              </li>
              <li>
                <Link href="/Services/GeospatialDevelopmentandGeoAI" className="text-gray-600 hover:text-blue-600">
                Geospatial Development and GeoAI
                </Link>
              </li>
              <li>
                <Link href="/Services/DatabaseDevelopment" className="text-gray-600 hover:text-blue-600">
                Database Development and Custom Report Generation
                </Link>
              </li>
              <li>
                <Link href="/Services/IT-EnabledServices" className="text-gray-600 hover:text-blue-600">
                IT-Enabled Services (ITES)
                </Link>
              </li>
              <li>
                <Link href="/Services/BusinessIntelligence" className="text-gray-600 hover:text-blue-600">
                Business Intelligence and Business Analytics
                </Link>
              </li>

              <li>
                <Link href="/Services/Cybersecurity" className="text-gray-600 hover:text-blue-600">
                Cybersecurity and IT Governance
                </Link>
              </li>

              <li>
                <Link href="/Services/ITInfrastructure" className="text-gray-600 hover:text-blue-600">
                IT Infrastructure, Networking & Continuity
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Useful Links Column
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Useful link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  IT Consultancy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Medical Coding Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Enterprise Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Software Testing
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Beyond Horizon IT SERVICES INDIA</p>
                <address className="text-gray-600 not-italic">
                  The Workvilla, Ground Floor,
                  <br />
                  No 306, Anna Salai,
                  <br />
                  Thousand Lights, Chennai-600006.
                </address>
              </div>
              <div>
                <Link href="mailto:info@Beyond-Horizon.com" className="text-gray-600 hover:text-blue-600 block">
                  info@Beyond-Horizon.com
                </Link>
                <Link href="tel:+918035384274" className="text-gray-600 hover:text-blue-600 block">
                  +918035384274
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Copyright © 2024 Beyond Horizon IT Services
          </p>
        </div>
      </div>
    </footer>
    </>

  );
}

export default Footer;
