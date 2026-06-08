import React from "react";
import { ShieldCheck, IdCard, HeartPulse, FileText } from "lucide-react";

const complianceData = [
  {
    icon: "./apad.png",
    title: "APAD Integration",
    description: "Automatic permit tracking & reminders.",
  },
  {
    icon: "./jpj.png",
    title: "JPJ Support",
    description: "Driver license and road tax management.",
  },
  {
    icon: "./driver.png",
    title: "Driver Compliance",
    description: "Manage medical checkups and GDL/E-Hailing permits.",
  },
  {
    icon: "./permit.png",
    title: "Permit Mgmt",
    description: "Digital repository for all vehicle permits.",
  },
];

function ComplianceSection() {
  return (
    <section className="py-10 lg:px-10 px-5">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Built For Malaysian Transport Operations
          </h2>

          <p className="text-lg text-[#434653] mx-auto">
            We understand local regulations, so you don't have to worry about
            them.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceData.map((item, index) => {

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center transition-all duration-300 hover:border-[#00327D] hover:scale-[1.02] hover:shadow-lg"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-5 bg-[#EDEEEF] rounded-2xl flex items-center justify-center transition-colors duration-300 hover:bg-blue-50">
                  <img src={item.icon}/>
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className=" text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;
