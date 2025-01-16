'use client'
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaPencilAlt, FaCode, FaRocket } from 'react-icons/fa';


export function MarketingProcess() {


  useEffect(() => {
    AOS.init();
  }, []);


  const steps = [
    {
      title: "Ideate",
      description: "Turn your idea from concept to MVP",
    },
    {
      title: "Design",
      description: "Sketch out the product to align the user needs",
    },
    {
      title: "Develop",
      description: "Convert the designs into a live application",
    },
    {
      title: "Deploy",
      description: "Launching the application to the market",
    },
  ];

  return (

    <div>
    <div className="bg-gray-50  mt-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 "data-aos="fade-up" data-aos-duration="2000" >
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-[#447ab1] tracking-wide uppercase">
          Our marketing process
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-[#447ab1] sm:text-5xl">
          How we work step by step with marketing
        </h1>
      </div>

      {/* map function  */}

      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <h3 className="text-2xl font-bold text-[#447ab1] ">
              {step.title}
            </h3>
            <p className="text-gray-600 ">
              {step.description}
            </p>
          </div>
        ))}
      </div> */}


    {/* process marketing  */}
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">

<div className="grid sm:grid-cols-4 gap-16 sm:gap-8 mt-16 sm:mt-24">
    <div className="text-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div
                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5"
                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Import icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                    </path>
                </svg> */}
                <FaLightbulb className="text-yellow-500 text-6xl" />
            </div>
            {/* blue-500  */}
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-yellow-500 rounded-full"></div>
        </div>
        <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">1. Ideate</h3>
        <p className="leading-relaxed mt-4">Turn your idea from concept to MVP.</p>
    </div>
    <div className="text-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div
                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5"
                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Translate icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                </svg> */}
                <FaPencilAlt className="text-blue-500 text-6xl" />
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
        </div>
        <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">2. Design</h3>
        <p className="leading-relaxed mt-4">Sketch out the product to align the user needs.</p>
    </div>
    <div className="text-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div
                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".5"
                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                    </path>
                </svg> */}

                <FaCode className="text-green-500 text-6xl" />
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-green-500 rounded-full"></div>
        </div>
        <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">3. Develop</h3>
        <p className="leading-relaxed mt-4">Convert the designs into a live application.</p>
    </div>

    <div className="text-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div
                className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".5"
                    stroke="currentColor" className="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                    </path>
                </svg> */}
                <FaRocket className="text-purple-500 text-6xl" />
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-purple-500 rounded-full"></div>
        </div>
        <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">4. Deploy</h3>
        <p className="leading-relaxed mt-4">Launching the application to the market</p>
    </div>

</div>
</div>


    </div>

{/* marketing process 2  */}

    <div>

    <div>

    

</div>
    </div>

{/* 44 */}

{/* <div>

<div className="bg-gray-700 p-4 min-h-screen">
  <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-100">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"></path>
      </svg>
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">How we work?</h2>
      <p className="text-gray-300">We follow our process to get you started as quickly as possible</p>
    </div>
    <div
      className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 10l2 -2v8"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
            <p className="text-gray-300">We will have discussions on the requirements to ensure your MVP (Minimum Viable
              Product) is ready for the initial launch</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Deal Finalized</h5>
            <p className="text-gray-300">Once we agree on what to build, We will start working on it right away.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path
              d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
            </path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Product Delivery</h5>
            <p className="text-gray-300">We will develop your product MVP in 15 days (more time required depending on the
              complexity of the project)</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" style={{ color: 'white' }} height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
            <path d="M14 8v8"></path>
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Celebrate your Launch
            </h5>
            <p className="text-gray-300">We love Celebrations. We will celebrate your launch on our Social Profiles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}

    {/* 3 */}

    {/* <div className='mt-20'>
      <section className="bg-gray-50 py-16 lg:py-24">
    <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
       

<div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-[#447ab1] tracking-wide uppercase">
          Our marketing process
        </h2>
        <h1 className="mt-2 text-4xl font-bold text-[#447ab1] sm:text-5xl">
          How we work step by step with marketing
        </h1>
      </div>
      
        <ul className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-12 sm:mt-20 lg:max-w-5xl lg:grid-cols-4">
         
            <li className="group relative flex flex-col items-center text-center">

                <div className="relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-105 group-hover:bg-indigo-600">
                    <svg className="h-6 w-6 text-gray-500 transition-colors duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5" />
                    </svg>
                </div> 
            
                <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-indigo-600">Ideate</h3>
                <p className="mt-2 text-sm text-gray-600">Turn your idea from concept to MVP.</p>
            </li>
        
            <li className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-105 group-hover:bg-indigo-600">
                    <svg className="h-6 w-6 text-gray-500 transition-colors duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-indigo-600">Design</h3>
                <p className="mt-2 text-sm text-gray-600">Sketch out the product to align the user needs.</p>
            </li>
            <li className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-105 group-hover:bg-indigo-600">
                    <svg className="h-6 w-6 text-gray-500 transition-colors duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-indigo-600">Develop</h3>
                <p className="mt-2 text-sm text-gray-600">Convert the designs into a live application.</p>
            </li>
            <li className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 transition-transform duration-500 group-hover:scale-105 group-hover:bg-indigo-600">
                    <svg className="h-6 w-6 text-gray-500 transition-colors duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5" />
                    </svg>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-indigo-600">Deploy</h3>
                <p className="mt-2 text-sm text-gray-600">Launching the application to the market.</p>
            </li>
        </ul>
    </div>
</section>


      </div> */}

    </div>
  );
}
