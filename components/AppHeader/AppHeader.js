"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from "@/public/logo.png"



const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/allservices",
    items: [
      {
        label: "IT Application Development",
        href: "/Services/ITApplicationDevelopment",
      },
      {
        label: "AI, Machine Learning, and Data Science",
        href: "/Services/AI-MachineLearning&DataScience",
      },
      {
        label: "Geospatial Development and GeoAI",
        href: "/Services/GeospatialDevelopmentandGeoAI",
      },
      {
        label: "Database Development and Custom Report Generation",
        href: "/Services/DatabaseDevelopment",
      },
      {
        label: "IT-Enabled Services (ITES)",
        href: "/Services/IT-EnabledServices",
      },
      {
        label: "Cloud Computing and IT-Enabled Services (ITES)",
        href: "/Services/BusinessIntelligence",
      },
      {
        label: "Cybersecurity and IT Governance",
        href: "/Services/Cybersecurity",
      },
      {
        label: "IT Infrastructure, Networking & Continuity",
        href: "/Services/ITInfrastructure",
      },
    ],
  },
  { label: "Contact Us", href: "/Contactus" },
];

const AppHeader = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) {
      const timer = setTimeout(() => setActiveDropdown(null), 200);
      return () => clearTimeout(timer);
    }
  }, [hovering]);

  const handleDropdownClick = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // const handleMouseEnter = (label) => {
  //   setActiveDropdown(label);
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setTimeout(() => {
  //     if (!isHovered) {
  //       setActiveDropdown(null);
  //     }
  //   }, 200);
  // }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white bg-opacity-60 backdrop-blur-lg shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            
            <Image width={80} height={20}  src={logo} alt="logo" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors
                    ${activeDropdown === item.label
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                    }`}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform mt-1 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.items && activeDropdown === item.label && (
                  <div
                    className="absolute  top-full z-10 mt-1 w-[450px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-4"
                    style={{
                      left: "auto",
                      right: 0,
                    }}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div> */}





    {/* 3 - reals*/}

    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => {
            setActiveDropdown(item.label);
            setHovering(true);
          }}
          onMouseLeave={() => setHovering(false)}
        >
          <Link
            href={item.href}
            className={`flex items-center gap-1 py-2 text-md font-semibold transition-all duration-300 ease-in-out
              ${activeDropdown === item.label
                ? "text-[#447ab1]"
                : "text-gray-600 hover:[#447ab1]"
              }`}
          >
            {item.label}
            {item.items && (
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 mt-1 ${
                  activeDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>

          {item.items && activeDropdown === item.label && (
            <div
              // className="absolute top-full z-10 mt-3  w-[450px] rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-out"
              // style={{
              //   left: "auto",
              //   right: 0,
              // }}

              className="absolute top-full right-0 mt-2 w-[450px]  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out"
              style={{
                // opacity: isHovered ? 1 : 0,
                   left: "auto",
                right: 0,
                // transform: isHovered ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}

              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-600  hover:text-[#447ab1]   transition-colors duration-200 rounded-md"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>


{/* 4 */}
{/* <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => {
            setActiveDropdown(item.label);
            setHovering(true);
          }}
          onMouseLeave={() => {
            setActiveDropdown(null);
            setHovering(false);
          }}
        >
         
          <Link
            href={item.href}
            className={`flex items-center gap-1 py-2 text-md font-semibold transition-all duration-300 ease-in-out ${
              activeDropdown === item.label
                ? "text-[#447ab1]"
                : "text-gray-600 hover:text-[#447ab1]"
            }`}
          >
            {item.label}
            {item.items && (
              <ChevronDown
                className={`h-4 w-4 mt-1 transition-transform duration-300 ${
                  activeDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>

         
          {item.items && activeDropdown === item.label && (
            <div
              className="absolute top-full right-0 mt-3 w-[450px] rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#447ab1] hover:bg-gray-100 rounded-md transition-all duration-300 ease-in-out"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div> */}

{/* 5 */}

{/* <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
         
          <Link
            href={item.href}
            className={`flex items-center gap-1 py-2 text-md font-semibold transition-all duration-300 ease-in-out ${
              activeDropdown === item.label
                ? "text-[#447ab1]"
                : "text-gray-600 hover:text-[#447ab1]"
            }`}
          >
            {item.label}
            {item.items && (
              <ChevronDown
                className={`h-4 w-4 mt-1 transition-transform duration-300 ${
                  activeDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>

        

          {item.items && activeDropdown === item.label && (
            <div
              className="absolute top-full right-0 mt-4 w-[450px]  rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in-out"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {item.items.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-1 text-sm font-medium text-gray-600 hover:text-[#447ab1]  rounded-md transition-all duration-300 ease-in-out"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div> */}



        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="mt-4 space-y-4 md:hidden"  style={{ height: "100vh" }}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.items ? (
                  <>
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="w-full flex justify-between items-center py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="mt-2 space-y-2 pl-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            onClick={closeMobileMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
