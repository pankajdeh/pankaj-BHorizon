'use client'
import {
  TrendingUp,
  Rocket,
  Network,
  PiggyBank,
  ArrowRight,
  BarChart,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import ITUSROI from "@/public/Images/ITUSROI.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export default function BusinessImpact() {

    useEffect(() => {
      AOS.init();
    }, []);



  return (
    <div className="min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative ">
  {/* Background Decoration */}
  <div className="absolute inset-x-0 top-0 h-96 bg-[#447ab1]/5 -z-10 rounded-[3rem]" />

  {/* Header Section */}
  < header  data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200" className="text-center mb-16">
    <h2 className="text-3xl font-bold text-center mt-10">
      Business Impact and ROI
    </h2>

    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
     {` Transform your business operations and achieve measurable results with our innovative solutions.`}
    </p>
  </header>

  {/* Responsive Image */}
  <div className="flex justify-center -mt-16" data-aos="fade-right"
          data-aos-duration="900"
          data-aos-delay="200" >
    <Image
      src={ITUSROI}
      alt="Service1BusinessImpactROI"
      className="rounded-lg "
      width={800} // Adjust to a maximum desired width
      height={450} // Maintain aspect ratio
      layout="intrinsic" // Use intrinsic for automatic responsiveness
      priority // Prioritize loading this image
    />
  </div>
</div>


        {/* <div className="text-center max-w-3xl mx-auto pt-16 pb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#447ab1] sm:text-5xl md:text-6xl mb-6">
              Business Impact and ROI
            </h1>
            <p className="text-xl text-gray-600">
              Transform your business operations and achieve measurable results with our innovative solutions
            </p>
          </div> */}

        {/* Key Metrics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <MetricCard number="40%" label="Efficiency Increase" />
            <MetricCard number="60%" label="Faster Delivery" />
            <MetricCard number="85%" label="System Integration" />
            <MetricCard number="45%" label="Cost Reduction" />
          </div> */}

        {/* Main Benefits Section */}
        {/* <div className="space-y-20">
         
          <BenefitSection
            icon={<TrendingUp className="h-8 w-8 text-[#447ab1]" />}
            title="Increased Operational Efficiency"
            description="Transform your business processes with intelligent automation and optimized workflows"
            metrics={[
              { label: "Reduced manual tasks", value: "75%" },
              { label: "Process automation", value: "40%" },
              { label: "Productivity boost", value: "60%" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Operational Efficiency Visualization"
          />

          
          <BenefitSection
            icon={<Rocket className="h-8 w-8 text-[#447ab1]" />}
            title="Reduced Time-to-Market"
            description="Accelerate your development cycles and deploy new features faster than ever"
            metrics={[
              { label: "Faster deployment", value: "3x" },
              { label: "Development speed", value: "60%" },
              { label: "Release frequency", value: "2x" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Time to Market Visualization"
            reversed
          />

         
          <BenefitSection
            icon={<Network className="h-8 w-8 text-[#447ab1]" />}
            title="Improved System Integration"
            description="Seamlessly connect your systems and scale your infrastructure with confidence"
            metrics={[
              { label: "System uptime", value: "99.9%" },
              { label: "API response time", value: "<100ms" },
              { label: "Data accuracy", value: "99.5%" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="System Integration Visualization"
          />

          <BenefitSection
            icon={<PiggyBank className="h-8 w-8 text-[#447ab1]" />}
            title="Long-term Cost Savings"
            description="Achieve significant cost reductions through automation and improved resource allocation"
            metrics={[
              { label: "Cost reduction", value: "45%" },
              { label: "ROI timeline", value: "6 mo" },
              { label: "Resource savings", value: "50%" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Cost Savings Visualization"
            reversed
          />
        </div> */}

        {/* CTA Section */}
        <div  data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200" 
          
          className="mt-20 text-center bg-[#447ab1] text-white py-16 px-4 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our solutions can drive growth and efficiency in
            your organization
          </p>
          <a
            href="https://calendly.com/pankajmehra-seoni/30min?back=1&month=2025-01&date=2025-01-15"
            className="inline-flex items-center px-8 py-4 bg-white text-[#447ab1] rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ number, label }) {
  return (
    <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-3xl font-bold text-[#447ab1] mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </Card>
  );
}

function BenefitSection({
  icon,
  title,
  description,
  metrics,
  imageSrc,
  imageAlt,
  reversed = false,
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center ${
        reversed ? "direction-rtl" : ""
      }`}
    >
      <div className={`space-y-6 ${reversed ? "md:order-2" : ""}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#447ab1]/10">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-medium text-gray-600">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#447ab1]">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${reversed ? "md:order-1" : ""}`}>
        <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
