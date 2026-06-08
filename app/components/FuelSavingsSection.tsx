import React from "react";
import { BarChart3, Timer, HandCoins } from "lucide-react";

const fuelFeatures = [
  {
    icon: "./theft.png",
    title: "Fuel Theft Detection",
    description:
      "Automated alerts for sudden fuel level drops (siphoning) during trips.",
  },
  {
    icon: "./time.png",
    title: "Idle Time Monitoring",
    description: "Identify drivers leaving engines running unnecessarily.",
  },
  {
    icon: "./trip.png",
    title: "Trip Profitability",
    description:
      "Automatically calculate if a trip was profitable after fuel and driver costs.",
  },
];

function FuelSavingsSection() {
  return (
    <section className="py-10 lg:px-10 px-5 bg-[#F8F9FA]">
      <div className="lg:max-w-[80%] mx-auto grid lg:grid-cols-2 lg:gap-16 gap-7 items-center">
        {/* Left Content */}
        <div className="space-y-10" data-aos="fade-right">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Stop Losing Money On Fuel
          </h2>

          <div className="space-y-8">
            {fuelFeatures.map((feature, index) => {

              return (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="bg-[#DAE2FF] p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <img src={feature.icon}/>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Card */}
        <div data-aos="fade-left">
          <div className="bg-white p-5 lg:p-10 rounded-3xl border border-[#C3C6D5] shadow-lg hover:shadow-2xl transition-all duration-500">
            <h5 className="text-xl font-semibold text-center text-gray-900 mb-12">
              Monthly Fuel Spend Per Fleet (RM)
            </h5>

            {/* Chart */}
            <div className="flex items-end justify-around h-72 gap-10">
              {/* Manual */}
              <div className="flex flex-col items-center w-full max-w-[120px]">
                <div className="h-56 w-full flex items-end">
                  <div className="w-full h-full bg-gray-500 rounded-t-xl"></div>
                </div>

                <p className="mt-4 text-sm text-center text-gray-600">
                  Manual Mgmt
                </p>

                <p className="font-bold text-gray-700">RM 45,000</p>
              </div>

              {/* TCMS */}
              <div className="flex flex-col items-center w-full max-w-[120px]">
                <div className="h-56 w-full flex items-end">
                  <div className="w-full h-[70%] bg-[#00327D] rounded-t-xl"></div>
                </div>

                <p className="mt-4 text-sm text-center text-gray-600">
                  TCMS.ai
                </p>

                <p className="font-bold text-[#00327D]">RM 31,500</p>
              </div>
            </div>

            {/* Savings Box */}
            <div className="mt-10 p-5 bg-[#80F98B] border border-green-200 rounded-xl text-center">
              <p className="text-xl font-bold text-[#006E25]">
                Estimated Savings: 30%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuelSavingsSection;
