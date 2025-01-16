import { Button } from "@/components/ui/button"
import healthcarebanner from  "../../../public/Images/healthcare-banner.png"
import Link from "next/link"

export default function MedicalHero() {
  return (
    <div className="relative ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage: "url(/Images/healthcare-banner.png)"
        }}
      >
        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='rgba(0,149,199,0.2)' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex items-center  justify-center px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-3xl mt-10  leading-tight text-white sm:text-4xl md:text-5xl lg:text-3xl">
            mHealth Apps — Technology solutions to improve
            <span className="block mt-2">medical care & patient services</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-200 sm:text-xl">
          {`  Healthcare providers face a challenge to design and develop mHealth app that fits their requirement
            and help them sustain in the ever rising competition`}
          </p>
<Link href={"/Contactus"}>
<Button 
            size="lg"
            className="bg-[#447ab1] text-white hover:bg-cyan-700 transition-colors duration-200"
          >
            LET'S OVERCOME THE CHALLENGE
          </Button>
</Link>
       
        </div>
      </div>

      {/* Medical Icons Grid - Decorative */}
      <div className="absolute right-0 top-0 grid grid-cols-3 gap-4 p-8 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="h-16 w-16 rounded-full bg-cyan-500/20"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}
          />
        ))}
      </div>
    </div>
  )
}

